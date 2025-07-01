// Data arrays
const quickLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "السفينة", href: "#ship" },
    { name: "الرحلات", href: "#travels" },
    { name: "المعرض", href: "#gallery" },
];

const supportLinks = [
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "شروط الخدمة", href: "#terms" },
    { name: "سياسة الخصوصية", href: "#privacy" },
    { name: "سياسة الإلغاء", href: "#cancellation" },
];

const destinations = [
    { name: "رحلات دبي", href: "#dubai" },
    { name: "رحلات جدة", href: "#jeddah" },
    { name: "رحلات الدوحة", href: "#doha" },
    { name: "رحلات الكويت", href: "#kuwait" },
];

// Function to populate links
function populateLinks(elementId, linksArray) {
    const element = document.getElementById(elementId);
    element.innerHTML = "";

    linksArray.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.href;
        a.textContent = link.name;
        li.appendChild(a);
        element.appendChild(li);
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Newsletter subscription function
function subscribeNewsletter() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    if (email) {
        if (validateEmail(email)) {
            alert("تم الاشتراك بنجاح! شكراً لك.");
            emailInput.value = "";
        } else {
            alert("يرجى إدخال بريد إلكتروني صحيح.");
        }
    } else {
        alert("يرجى إدخال البريد الإلكتروني.");
    }
}

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
    populateLinks("quickLinks", quickLinks);
    populateLinks("supportLinks", supportLinks);
    populateLinks("destinationLinks", destinations);

    // Add enter key functionality to newsletter input
    document
        .getElementById("emailInput")
        .addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                subscribeNewsletter();
            }
        });
});
