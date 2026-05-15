document.addEventListener('DOMContentLoaded', () => {

    // --- Global Variables ---
    const allSections = document.querySelectorAll('section');
    const backgroundDiv = document.getElementById('dynamic-background');
    
    let sectionStates = {}; // Stores the visibility of each section
    let currentBg = '';
    let isTransitioning = false;
    let pendingBgUrl = null;

    // --- 1. Animation & Interaction Logic ---

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

    // --- Project Filtering Logic ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filterValue === 'all' || filterValue === category) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // --- Image Modal, Dropdown Menu, etc. (Unchanged) ---
    // (The rest of your code for modals and menus goes here)
    const langButtons = document.querySelectorAll('.lang-btn');
    
    // The function that performs the translation
    function switchLanguage(lang) {
        // Handle text content changes
        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // NEW: Handle attribute changes (like the href for the resume)
        document.querySelectorAll('[data-translate-attr]').forEach(element => {
            const [attr, key] = element.getAttribute('data-translate-attr').split(':');
            if (translations[lang] && translations[lang][key]) {
                element.setAttribute(attr, translations[lang][key]);
            }
        });

        // Update the active button style
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }

    // Add click event listeners to the buttons
    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const selectedLang = event.target.getAttribute('data-lang');
            switchLanguage(selectedLang);
        });
    });

    // Set the default language on page load
    if (langButtons.length > 0) {
        switchLanguage('en');
    }
});