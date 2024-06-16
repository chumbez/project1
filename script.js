// JavaScript for Tabs and Filtering

document.addEventListener('DOMContentLoaded', function() {
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                if (content.id === tabId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });

            // Deactivate all tab buttons
            tabButtons.forEach(tabBtn => {
                if (tabBtn === button) {
                    tabBtn.classList.add('active');
                } else {
                    tabBtn.classList.remove('active');
                }
            });
        });
    });

    // Filtering functionality
    const searchInput = document.getElementById('search-input');
    const projectIdeas = document.querySelectorAll('.project-idea');

    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();

        projectIdeas.forEach(idea => {
            const title = idea.querySelector('h3').innerText.toLowerCase();
            const content = idea.innerText.toLowerCase();

            if (title.includes(searchText) || content.includes(searchText)) {
                idea.style.display = 'block';
            } else {
                idea.style.display = 'none';
            }
        });
    });
});
