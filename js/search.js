// Search data object
let searchData = {
    destination: "",
    departure: "",
    duration: "",
    guests: "",
    cabinType: "",
    budget: "",
    tripType: "",
};

// DOM elements
const form = document.getElementById("searchForm");
const resultsSection = document.getElementById("resultsSection");
const searchResults = document.getElementById("searchResults");

// Form inputs
const inputs = {
    destination: document.getElementById("destination"),
    departure: document.getElementById("departure"),
    duration: document.getElementById("duration"),
    guests: document.getElementById("guests"),
    cabinType: document.getElementById("cabinType"),
    budget: document.getElementById("budget"),
    tripType: document.getElementById("tripType"),
};

// Handle input changes
function handleInputChange(field, value) {
    searchData[field] = value;
}

// Handle form submission
function handleSearch(e) {
    e.preventDefault();

    // Get all current values
    Object.keys(inputs).forEach((key) => {
        searchData[key] = inputs[key].value;
    });

    console.log("Search data:", searchData);

    // Display results
    displayResults();
}

// Display search results
function displayResults() {
    const resultsText = `بيانات البحث:

الوجهة: ${getOptionText("destination", searchData.destination)}
تاريخ المغادرة: ${searchData.departure || "غير محدد"}
المدة: ${getOptionText("duration", searchData.duration)}
عدد المسافرين: ${getOptionText("guests", searchData.guests)}

الخيارات المتقدمة:
نوع الكابينة: ${getOptionText("cabinType", searchData.cabinType)}
الميزانية: ${getOptionText("budget", searchData.budget)}
نوع الرحلة: ${getOptionText("tripType", searchData.tripType)}`;

    searchResults.textContent = resultsText;
    resultsSection.classList.add("show");

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: "smooth" });
}

// Get option text by value
function getOptionText(selectId, value) {
    if (!value) return "غير محدد";

    const select = inputs[selectId];
    const option = select.querySelector(`option[value="${value}"]`);
    return option ? option.textContent : value;
}

// Add event listeners
form.addEventListener("submit", handleSearch);

// Add input change listeners
Object.keys(inputs).forEach((key) => {
    inputs[key].addEventListener("change", (e) => {
        handleInputChange(key, e.target.value);
    });
});

// Set minimum date to today for date input
const today = new Date().toISOString().split("T")[0];
inputs.departure.setAttribute("min", today);
