document.addEventListener('DOMContentLoaded', () => {

    // --- Global Variables ---
    const allSections = document.querySelectorAll('section');
    const backgroundDiv = document.getElementById('dynamic-background');
    
    let sectionStates = {}; // Stores the visibility of each section
    let currentBg = '';
    let isTransitioning = false;
    let pendingBgUrl = null;

    // --- 1. Core Logic: A Proactive "Game Loop" ---

    // This function handles the entire background change animation.
    function updateBackground(newBgUrl) {
        if (!newBgUrl || newBgUrl === currentBg) return;

        if (isTransitioning) {
            // If an animation is playing, just remember the latest request.
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

                // After finishing, immediately check if there's a pending change and run it.
                if (pendingBgUrl) {
                    const nextBg = pendingBgUrl;
                    pendingBgUrl = null;
                    updateBackground(nextBg);
                }
            }, 400);
        };
        img.onerror = () => { isTransitioning = false; };
    }

    // This is our main "decider" loop. It runs on a fixed timer.
    function masterControlLoop() {
        let mostVisibleSectionId = null;
        let maxVisibility = 0;

        // Find which section is currently most visible based on the latest data.
        for (const sectionId in sectionStates) {
            if (sectionStates[sectionId] > maxVisibility) {
                maxVisibility = sectionStates[sectionId];
                mostVisibleSectionId = sectionId;
            }
        }
        
        if (mostVisibleSectionId) {
            const section = document.getElementById(mostVisibleSectionId);
            if (section && section.hasAttribute('data-bg')) {
                const newBgUrl = section.getAttribute('data-bg');
                // Request a background update. The function will handle the logic.
                updateBackground(newBgUrl);
            }
        }
    }

    // --- 2. Observer and Loop Initialization ---
    
    // The observer's ONLY job is to passively update the state object.
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            sectionStates[entry.target.id] = entry.intersectionRatio;
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: Array.from(Array(21).keys(), i => i / 20) }); // High-frequency thresholds

    // Start the observer for all sections that have an ID.
    allSections.forEach(section => {
        if (section.id) {
            observer.observe(section);
        }
    });
    
    // Start the master control loop, running every 100ms.
    setInterval(masterControlLoop, 100);

    // --- Other page logic (modals, menus, etc.) can go here ---
    // NOTE: The skills bar animation needs to be moved out of the observer
    // and into its own simple observer for reliability.
    const skillBars = document.querySelectorAll('.skill-bar');
    if (skillBars.length > 0) {
        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillSection = entry.target;
                    skillSection.querySelectorAll('.skill-bar').forEach(bar => {
                        bar.style.width = bar.dataset.level;
                    });
                    observer.unobserve(skillSection);
                }
            });
        }, { threshold: 0.5 });
        const skillsSection = document.getElementById('skills');
        if (skillsSection) skillObserver.observe(skillsSection);
    }

    // --- Image Modal, Dropdown Menu, etc. (Unchanged) ---
    // (The rest of your code for modals and menus goes here)
});