// Gallery data
const galleryItems = [
    {
        id: 1,
        type: "image",
        src: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg",
        alt: "سفينة كروز فاخرة في البحر",
        category: "السفينة",
    },
    {
        id: 2,
        type: "image",
        src: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg",
        alt: "مطعم فاخر على متن السفينة",
        category: "المطاعم",
    },
    {
        id: 3,
        type: "image",
        src: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
        alt: "حمام سباحة مع إطلالة بحرية",
        category: "المرافق",
    },
    {
        id: 4,
        type: "image",
        src: "https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg",
        alt: "كابينة فاخرة مع شرفة",
        category: "الكابائن",
    },
    {
        id: 5,
        type: "image",
        src: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
        alt: "منطقة الاستقبال الفاخرة",
        category: "الردهة",
    },
    {
        id: 6,
        type: "image",
        src: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg",
        alt: "منطقة ألعاب الأطفال",
        category: "الترفيه",
    },
    {
        id: 7,
        type: "image",
        src: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg",
        alt: "منطقة الاسترخاء والسبا",
        category: "السبا",
    },
    {
        id: 8,
        type: "image",
        src: "https://images.pexels.com/photos/4553618/pexels-photo-4553618.jpeg",
        alt: "غروب الشمس من السفينة",
        category: "المناظر",
    },
    {
        id: 9,
        type: "video",
        src: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg",
        alt: "جولة افتراضية في السفينة",
        category: "فيديو",
    },
];

// State variables
let activeCategory = "الكل";
let selectedImage = null;
let filteredItems = galleryItems;

// DOM elements
const categoryButtons = document.querySelectorAll(".category-btn");
const galleryGrid = document.getElementById("gallery-grid");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalCategory = document.getElementById("modal-category");
const modalAlt = document.getElementById("modal-alt");
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Initialize
function init() {
    updateFilteredItems();
    bindEvents();
}

// Update filtered items based on active category
function updateFilteredItems() {
    if (activeCategory === "الكل") {
        filteredItems = galleryItems;
    } else {
        filteredItems = galleryItems.filter(
            (item) => item.category === activeCategory
        );
    }
    updateGalleryDisplay();
}

// Update gallery display
function updateGalleryDisplay() {
    const galleryItemElements = document.querySelectorAll(".gallery-item");

    galleryItemElements.forEach((element, index) => {
        const itemCategory = element.getAttribute("data-category");
        if (activeCategory === "الكل" || itemCategory === activeCategory) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

// Bind event listeners
function bindEvents() {
    // Category filter buttons
    categoryButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            setActiveCategory(category);
        });
    });

    // Gallery items
    const galleryItemElements = document.querySelectorAll(".gallery-item");
    galleryItemElements.forEach((element, index) => {
        element.addEventListener("click", function () {
            const itemIndex = parseInt(this.getAttribute("data-index"));
            openModal(itemIndex);
        });
    });

    // Modal controls
    closeBtn.addEventListener("click", closeModal);
    prevBtn.addEventListener("click", prevImage);
    nextBtn.addEventListener("click", nextImage);

    // Close modal on background click
    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener("keydown", function (e) {
        if (modal.classList.contains("active")) {
            switch (e.key) {
                case "Escape":
                    closeModal();
                    break;
                case "ArrowLeft":
                    nextImage();
                    break;
                case "ArrowRight":
                    prevImage();
                    break;
            }
        }
    });
}

// Set active category
function setActiveCategory(category) {
    activeCategory = category;

    // Update button styles
    categoryButtons.forEach((button) => {
        if (button.getAttribute("data-category") === category) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    updateFilteredItems();
}

// Open modal
function openModal(index) {
    // Find the correct index in filtered items
    const visibleItems = [];
    const galleryItemElements = document.querySelectorAll(".gallery-item");

    galleryItemElements.forEach((element, i) => {
        if (element.style.display !== "none") {
            const itemIndex = parseInt(element.getAttribute("data-index"));
            visibleItems.push(itemIndex);
        }
    });

    const modalIndex = visibleItems.indexOf(index);
    if (modalIndex === -1) return;

    selectedImage = modalIndex;
    const item = galleryItems[visibleItems[modalIndex]];

    modalImage.src = item.src;
    modalImage.alt = item.alt;
    modalCategory.textContent = item.category;
    modalAlt.textContent = item.alt;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // Show/hide navigation buttons
    if (visibleItems.length <= 1) {
        prevBtn.style.display = "none";
        nextBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
    }
}

// Close modal
function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    selectedImage = null;
}

// Next image
function nextImage() {
    if (selectedImage === null) return;

    const visibleItems = [];
    const galleryItemElements = document.querySelectorAll(".gallery-item");

    galleryItemElements.forEach((element, i) => {
        if (element.style.display !== "none") {
            const itemIndex = parseInt(element.getAttribute("data-index"));
            visibleItems.push(itemIndex);
        }
    });

    selectedImage = (selectedImage + 1) % visibleItems.length;
    const item = galleryItems[visibleItems[selectedImage]];

    modalImage.src = item.src;
    modalImage.alt = item.alt;
    modalCategory.textContent = item.category;
    modalAlt.textContent = item.alt;
}

// Previous image
function prevImage() {
    if (selectedImage === null) return;

    const visibleItems = [];
    const galleryItemElements = document.querySelectorAll(".gallery-item");

    galleryItemElements.forEach((element, i) => {
        if (element.style.display !== "none") {
            const itemIndex = parseInt(element.getAttribute("data-index"));
            visibleItems.push(itemIndex);
        }
    });

    selectedImage =
        selectedImage === 0 ? visibleItems.length - 1 : selectedImage - 1;
    const item = galleryItems[visibleItems[selectedImage]];

    modalImage.src = item.src;
    modalImage.alt = item.alt;
    modalCategory.textContent = item.category;
    modalAlt.textContent = item.alt;
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
