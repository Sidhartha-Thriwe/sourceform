document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const form = document.getElementById('mainForm');

    // Function to toggle section visibility
    function toggleSection(section) {
        const content = section.querySelector('.section-content');
        const title = section.querySelector('.section-title');
        content.classList.toggle('hidden');
        title.classList.toggle('active');

        // Close other sections
        sections.forEach(s => {
            if (s !== section) {
                s.querySelector('.section-content').classList.add('hidden');
                s.querySelector('.section-title').classList.remove('active');
            }
        });
    }

    // Add click event listeners to section titles
    sections.forEach(section => {
        const title = section.querySelector('.section-title');
        title.addEventListener('click', () => toggleSection(section));
    });

    // Open the first section by default
    toggleSection(sections[0]);

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add form validation and submission logic here
        console.log('Form submitted');
    });
});