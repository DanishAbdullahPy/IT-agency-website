document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default action
            navLinks.forEach(function(link) {
                link.classList.remove('active'); // Remove active class from all links
            });
            this.classList.add('active'); // Add active class to the clicked link
            // Add any additional functionality you want to trigger on click here
        });
    });
});


// Example: Adjust layout based on screen width
if (window.innerWidth <= 375) {
    // Adjust layout for smaller screens
   }
   