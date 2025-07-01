// Smooth scroll functionality
document.addEventListener("DOMContentLoaded", function () {
    // Button event listeners
    const exploreBtn = document.getElementById("exploreBtn");
    const videoBtn = document.getElementById("videoBtn");
    const bookingForm = document.getElementById("bookingForm");

    exploreBtn.addEventListener("click", function () {
        // Add your navigation logic here
        console.log("Explore trips clicked");
        // Example: window.location.href = '#trips';
    });

    videoBtn.addEventListener("click", function () {
        // Add your video modal logic here
        console.log("Watch video clicked");
        // Example: openVideoModal();
    });

    // Booking form submission
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const destination = document.getElementById("destination").value;
        const departureDate = document.getElementById("departureDate").value;
        const duration = document.getElementById("duration").value;

        if (!destination || !departureDate || !duration) {
            alert("يرجى ملء جميع الحقول المطلوبة");
            return;
        }

        // Add your search logic here
        console.log("Search submitted:", {
            destination,
            departureDate,
            duration,
        });

        // Example: performSearch(destination, departureDate, duration);
    });

    // Scroll indicator click
    const scrollIndicator = document.querySelector(".scroll-indicator");
    scrollIndicator.addEventListener("click", function () {
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        });
    });

    // Add entrance animation delay for better effect
    setTimeout(() => {
        document.querySelector(".animate-fade-in").style.opacity = "1";
    }, 300);
});

// Add some interactive effects
document
    .querySelectorAll(".btn-primary, .btn-secondary, .search-button")
    .forEach((button) => {
        button.addEventListener("mouseenter", function () {
            this.style.transform = "translateY(-2px)";
        });

        button.addEventListener("mouseleave", function () {
            this.style.transform = "translateY(0)";
        });
    });
