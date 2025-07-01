let activeIndex = null;

function toggleAccordion(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const button = answer.previousElementSibling;
    const chevron = button.querySelector(".chevron");

    // Close previously active accordion
    if (activeIndex !== null && activeIndex !== index) {
        const prevAnswer = document.getElementById(`faq-answer-${activeIndex}`);
        const prevButton = prevAnswer.previousElementSibling;
        const prevChevron = prevButton.querySelector(".chevron");

        prevAnswer.classList.remove("active");
        prevButton.setAttribute("aria-expanded", "false");
        prevChevron.classList.remove("chevron-active");
        prevChevron.classList.add("chevron-inactive");

        // Change chevron to down arrow
        prevChevron.innerHTML = '<polyline points="6,9 12,15 18,9"></polyline>';
    }

    // Toggle current accordion
    if (activeIndex === index) {
        // Close current
        answer.classList.remove("active");
        button.setAttribute("aria-expanded", "false");
        chevron.classList.remove("chevron-active");
        chevron.classList.add("chevron-inactive");
        chevron.innerHTML = '<polyline points="6,9 12,15 18,9"></polyline>';
        activeIndex = null;
    } else {
        // Open current
        answer.classList.add("active");
        button.setAttribute("aria-expanded", "true");
        chevron.classList.remove("chevron-inactive");
        chevron.classList.add("chevron-active");
        chevron.innerHTML = '<polyline points="18,15 12,9 6,15"></polyline>';
        activeIndex = index;
    }
}
