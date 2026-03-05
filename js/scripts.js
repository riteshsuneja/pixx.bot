document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Find what page we're on and decide if we need to show links depending on the current page
            const currentPage = window.location.pathname;
            const solutionsLink = document.getElementById('solutions-link');
            const technologyLink = document.getElementById('technology-link');
            const contactLink = document.getElementById('contact-link');

            if (currentPage === '/index.html') {
                solutionsLink.style.display = 'block';
                technologyLink.style.display = 'block';
                contactLink.style.display = 'block';
            } else {
                solutionsLink.style.display = 'none';
                technologyLink.style.display = 'none';
                contactLink.style.display = 'block';
            }
        });

    // Load Footer
    fetch('/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});
