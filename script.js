// JavaScript for Tabs and Filtering

document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Deactivate all tab buttons
            tabButtons.forEach(tabBtn => {
                tabBtn.classList.remove('active');
            });

            // Activate the clicked tab button and display corresponding tab content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add('active');
        });
    });

    // Filtering functionality
    const searchInput = document.getElementById('search-input');
    const filterResults = document.querySelector('.filter-results');

    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();
        const projectIdeas = document.querySelectorAll('.project-idea');

        filterResults.innerHTML = '';

        projectIdeas.forEach(idea => {
            const title = idea.querySelector('h3').innerText.toLowerCase();
            if (title.includes(searchText)) {
                filterResults.appendChild(idea.cloneNode(true));
            }
        });
    });
});
