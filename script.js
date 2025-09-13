document.addEventListener('DOMContentLoaded', () => {

    // --- Global Variables ---
    const allSections = document.querySelectorAll('section');
    const backgroundDiv = document.getElementById('dynamic-background');
    const skillBars = document.querySelectorAll('.skill-bar');
    let currentBg = '';
    let isTransitioning = false;
    let pendingBgUrl = null;

    // --- 1. Background Update Function ---
    // This function handles the entire background change logic with preloading and queuing.
    function updateBackground(newBgUrl) {
        if (newBgUrl === currentBg || !newBgUrl) return;

        if (isTransitioning) {
            pendingBgUrl = newBgUrl;
            return;
        }
        isTransitioning = true;
        
        const img = new Image();
        img.src = newBgUrl;
        img.onload = () => {
            backgroundDiv.style.opacity = '0';
            setTimeout(() => {
                backgroundDiv.style.backgroundImage = `url(${newBgUrl})`;
                backgroundDiv.style.opacity = '1';
                currentBg = newBgUrl;
                isTransitioning = false;
                if (pendingBgUrl) {
                    const nextBg = pendingBgUrl;
                    pendingBgUrl = null;
                    updateBackground(nextBg);
                }
            }, 400);
        };
    }

    // --- 2. Visibility & Skills Animation Observer ---
    // This observer's ONLY job is to make things visible. It fires quickly.
    const visibilityObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'skills') {
                    skillBars.forEach(bar => {
                        bar.style.width = bar.dataset.level;
                    });
                }
                // Once visible, we don't need to watch it anymore with this observer.
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Low threshold for quick activation

    // Activate the visibility observer for all sections.
    allSections.forEach(section => {
        visibilityObserver.observe(section);
    });

    // --- 3. Background Change Observer ---
    // This observer's ONLY job is to trigger the background change. It's more deliberate.
    const backgroundObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const newBgUrl = entry.target.getAttribute('data-bg');
                updateBackground(newBgUrl);
            }
        });
    }, { threshold: 0.3 }); // High threshold to be sure which section is active

    // Activate the background observer only for sections that have backgrounds.
    document.querySelectorAll('section[data-bg]').forEach(section => {
        backgroundObserver.observe(section);
    });

    // Set the initial background
    const firstSectionWithBg = document.querySelector('section[data-bg]');
    if (firstSectionWithBg) {
        updateBackground(firstSectionWithBg.getAttribute('data-bg'));
    }

    // --- 4. Image Modal (Lightbox) Logic ---
    const modalBackdrop = document.getElementById('image-modal-backdrop');
    const modalImage = document.getElementById('modal-image-content');
    const zoomableImages = document.querySelectorAll('.zoomable-image');
    const closeButton = document.querySelector('.close-button');

    zoomableImages.forEach(image => {
        image.addEventListener('click', () => {
            modalBackdrop.style.display = 'block';
            modalImage.src = image.src;
        });
    });

    function closeModal() {
        modalBackdrop.style.display = 'none';
    }
    closeButton.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', (event) => {
        if (event.target === modalBackdrop) {
            closeModal();
        }
    });
});