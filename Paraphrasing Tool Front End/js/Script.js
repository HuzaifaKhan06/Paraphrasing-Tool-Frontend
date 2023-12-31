







        // highlight
       
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.links_li');
    
    function highlightNavLink() {
        var currentPath = window.location.pathname;
        
        // Remove 'highlight' class from all links
        navLinks.forEach(function(link) {
            link.classList.remove('highlight');
        });

        // Highlight the current link based on the current path
        navLinks.forEach(function(link) {
            var linkPath = link.getAttribute('href');
            if (currentPath.includes(linkPath)) {
                link.classList.add('highlight');
            }
        });
    }

    // Call the function initially to highlight based on the page loaded
    highlightNavLink();

    // Add click event listeners to update highlight on navigation
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            highlightNavLink();
        });
    });
});

