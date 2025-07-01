// State variables
let isOpen = false;
let isScrolled = false;

// DOM elements
const navbar = document.getElementById("navbar");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileNav = document.getElementById("mobile-nav");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
const allNavLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

// Handle scroll effect
function handleScroll() {
    const scrollY = window.scrollY;
    const newIsScrolled = scrollY > 50;

    if (newIsScrolled !== isScrolled) {
        isScrolled = newIsScrolled;
        if (isScrolled) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }
}

// Toggle mobile menu
function toggleMobileMenu() {
    isOpen = !isOpen;

    if (isOpen) {
        mobileNav.classList.add("open");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        mobileNav.classList.remove("open");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}

// Close mobile menu
function closeMobileMenu() {
    if (isOpen) {
        isOpen = false;
        mobileNav.classList.remove("open");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}

// Event listeners
window.addEventListener("scroll", handleScroll);
mobileMenuBtn.addEventListener("click", toggleMobileMenu);

// Close mobile menu when clicking on navigation links
mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

// Smooth scrolling for anchor links
allNavLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }

        closeMobileMenu();
    });
});

// Initialize
handleScroll();
