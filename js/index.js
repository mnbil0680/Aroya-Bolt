// Cruise data
const cruises = [
    {
        id: 1,
        title: "رحلة الخليج الذهبية",
        duration: "7 أيام",
        ship: "أروى الملكية",
        route: "دبي - الدوحة - الكويت",
        departure: "دبي",
        arrival: "دبي",
        price: "2,500",
        rating: 4.9,
        image: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg",
        highlights: ["شواطئ خاصة", "جولات مدينة", "عروض ليلية"],
    },
    {
        id: 2,
        title: "مغامرة البحر الأحمر",
        duration: "5 أيام",
        ship: "أروى الأسطورة",
        route: "جدة - العقبة - شرم الشيخ",
        departure: "جدة",
        arrival: "جدة",
        price: "1,800",
        rating: 4.8,
        image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
        highlights: ["غوص مع الدلافين", "رحلات صحراوية", "مأكولات محلية"],
    },
    {
        id: 3,
        title: "جولة الإمارات الساحرة",
        duration: "4 أيام",
        ship: "أروى الجوهرة",
        route: "دبي - أبوظبي - الشارقة",
        departure: "دبي",
        arrival: "دبي",
        price: "1,200",
        rating: 4.7,
        image: "https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg",
        highlights: ["برج خليفة", "جامع الشيخ زايد", "أكواريوم دبي"],
    },
    {
        id: 4,
        title: "رحلة الكنوز الشرقية",
        duration: "10 أيام",
        ship: "أروى الملكية",
        route: "دبي - مسقط - البحرين - الكويت",
        departure: "دبي",
        arrival: "دبي",
        price: "3,500",
        rating: 5.0,
        image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg",
        highlights: ["قلاع تاريخية", "أسواق تقليدية", "فنادق فاخرة"],
    },
    {
        id: 5,
        title: "إجازة العائلة المثالية",
        duration: "6 أيام",
        ship: "أروى النجمة",
        route: "الدوحة - دبي - أبوظبي",
        departure: "الدوحة",
        arrival: "الدوحة",
        price: "2,000",
        rating: 4.9,
        image: "https://images.pexels.com/photos/3278364/pexels-photo-3278364.jpeg",
        highlights: ["ألعاب مائية", "نادي أطفال", "عروض سيرك"],
    },
    {
        id: 6,
        title: "رحلة شهر العسل الرومانسية",
        duration: "8 أيام",
        ship: "أروى الحب",
        route: "جدة - العقبة - الغردقة - شرم الشيخ",
        departure: "جدة",
        arrival: "جدة",
        price: "4,200",
        rating: 5.0,
        image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg",
        highlights: ["عشاء رومانسي", "سبا للأزواج", "جناح ملكي"],
    },
];

// Function to create cruise card HTML
function createCruiseCard(cruise, index) {
    const highlightsHTML = cruise.highlights
        .map((highlight) => `<span class="highlight-tag">${highlight}</span>`)
        .join("");

    return `
                <div class="card fade-in" style="animation-delay: ${
                    index * 0.1
                }s">
                    <!-- Image -->
                    <div class="image-container">
                        <img src="${cruise.image}" alt="رحلة ${
        cruise.title
    }" loading="lazy">
                        <div class="rating-badge">
                            <i class="fas fa-star star-filled"></i>
                            <span class="text-sm font-semibold text-gray-800">${
                                cruise.rating
                            }</span>
                        </div>
                        <div class="price-badge">
                            <span class="font-semibold">${
                                cruise.price
                            } ريال</span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="card-content">
                        <h3 class="card-title">${cruise.title}</h3>
                        
                        <div class="space-y-2 mb-4">
                            <div class="info-item">
                                <i class="fas fa-clock"></i>
                                <span class="text-sm">${cruise.duration}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span class="text-sm">${cruise.route}</span>
                            </div>
                            <div class="info-item">
                                <i class="fas fa-users"></i>
                                <span class="text-sm">${cruise.ship}</span>
                            </div>
                        </div>

                        <!-- Highlights -->
                        <div class="highlights-container">
                            <h4 class="highlights-title">أبرز المعالم:</h4>
                            <div class="highlights-tags">
                                ${highlightsHTML}
                            </div>
                        </div>

                        <button class="btn-primary" onclick="showDetails(${
                            cruise.id
                        })" style="width: 100%;">
                            عرض التفاصيل
                        </button>
                    </div>
                </div>
            `;
}

// Function to render all cruise cards
function renderCruises() {
    const container = document.getElementById("cruises-container");
    const cruiseCards = cruises
        .map((cruise, index) => createCruiseCard(cruise, index))
        .join("");

    container.innerHTML = cruiseCards;
}

// Function to handle details button click
function showDetails(cruiseId) {
    const cruise = cruises.find((c) => c.id === cruiseId);
    if (cruise) {
        alert(
            `تفاصيل الرحلة: ${cruise.title}\nالمدة: ${cruise.duration}\nالسعر: ${cruise.price} ريال`
        );
        // You can replace this with actual modal or navigation logic
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                });
            }
        });
    });
}

// Mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            navLinks.style.display =
                navLinks.style.display === "flex" ? "none" : "flex";
            navLinks.style.position = "absolute";
            navLinks.style.top = "100%";
            navLinks.style.left = "0";
            navLinks.style.right = "0";
            navLinks.style.backgroundColor = "white";
            navLinks.style.flexDirection = "column";
            navLinks.style.padding = "1rem";
            navLinks.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        });
    }
}

// Intersection Observer for animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach((el) => {
            observer.observe(el);
        });
    }, 100);
}

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
    renderCruises();
    setupSmoothScrolling();
    setupMobileMenu();
    setupAnimations();
});

// Handle scroll to show/hide navbar background
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        navbar.style.backdropFilter = "blur(10px)";
    } else {
        navbar.style.backgroundColor = "white";
        navbar.style.backdropFilter = "none";
    }
});

// Enhanced mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const navLinks = document.querySelector(".nav-links");
    let isMenuOpen = false;

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener("click", () => {
            isMenuOpen = !isMenuOpen;

            if (isMenuOpen) {
                navLinks.style.display = "flex";
                navLinks.style.position = "absolute";
                navLinks.style.top = "100%";
                navLinks.style.left = "0";
                navLinks.style.right = "0";
                navLinks.style.backgroundColor = "white";
                navLinks.style.flexDirection = "column";
                navLinks.style.padding = "1rem";
                navLinks.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                navLinks.style.zIndex = "999";
                mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                navLinks.style.display = "none";
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                if (window.innerWidth < 768) {
                    navLinks.style.display = "none";
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    isMenuOpen = false;
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener("click", (e) => {
            if (
                isMenuOpen &&
                !navLinks.contains(e.target) &&
                !mobileMenuBtn.contains(e.target)
            ) {
                navLinks.style.display = "none";
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                isMenuOpen = false;
            }
        });
    }
}

// Enhanced cruise details modal
function showDetails(cruiseId) {
    const cruise = cruises.find((c) => c.id === cruiseId);
    if (!cruise) return;

    // Create modal HTML
    const modalHTML = `
        <div id="cruise-modal" class="modal-overlay" onclick="closeModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>${cruise.title}</h2>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <img src="${cruise.image}" alt="${
        cruise.title
    }" class="modal-image">
                    <div class="cruise-details">
                        <div class="detail-row">
                            <strong>المدة:</strong> ${cruise.duration}
                        </div>
                        <div class="detail-row">
                            <strong>السفينة:</strong> ${cruise.ship}
                        </div>
                        <div class="detail-row">
                            <strong>المسار:</strong> ${cruise.route}
                        </div>
                        <div class="detail-row">
                            <strong>نقطة الانطلاق:</strong> ${cruise.departure}
                        </div>
                        <div class="detail-row">
                            <strong>نقطة العودة:</strong> ${cruise.arrival}
                        </div>
                        <div class="detail-row">
                            <strong>التقييم:</strong> 
                            <span class="rating">
                                ${generateStars(cruise.rating)} ${cruise.rating}
                            </span>
                        </div>
                        <div class="detail-row highlights">
                            <strong>أبرز المعالم:</strong>
                            <div class="highlights-list">
                                ${cruise.highlights
                                    .map(
                                        (h) =>
                                            `<span class="highlight-badge">${h}</span>`
                                    )
                                    .join("")}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="price-section">
                        <span class="price-label">السعر:</span>
                        <span class="price-value">${cruise.price} ريال</span>
                    </div>
                    <button class="btn-primary modal-btn" onclick="bookCruise(${
                        cruise.id
                    })">
                        احجز الآن
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add modal styles if not already added
    if (!document.getElementById("modal-styles")) {
        const modalStyles = `
            <style id="modal-styles">
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.8);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 10000;
                    backdrop-filter: blur(5px);
                }
                .modal-content {
                    background: white;
                    border-radius: 1rem;
                    max-width: 600px;
                    width: 90%;
                    max-height: 90vh;
                    overflow-y: auto;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                }
                .modal-header {
                    padding: 1.5rem;
                    border-bottom: 1px solid #e5e7eb;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .modal-header h2 {
                    color: var(--text-main);
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin: 0;
                }
                .modal-close {
                    background: none;
                    border: none;
                    font-size: 2rem;
                    color: #6b7280;
                    cursor: pointer;
                    padding: 0;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .modal-close:hover {
                    color: var(--btn-color);
                }
                .modal-body {
                    padding: 1.5rem;
                }
                .modal-image {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    border-radius: 0.5rem;
                    margin-bottom: 1.5rem;
                }
                .cruise-details {
                    space-y: 1rem;
                }
                .detail-row {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.5rem;
                    margin-bottom: 1rem;
                    font-size: 1rem;
                }
                .detail-row strong {
                    color: var(--text-main);
                    min-width: 120px;
                    font-weight: 600;
                }
                .rating {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .highlights.detail-row {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .highlights-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 0.5rem;
                }
                .highlight-badge {
                    background-color: var(--white-bg);
                    color: var(--text-main);
                    padding: 0.25rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 500;
                }
                .modal-footer {
                    padding: 1.5rem;
                    border-top: 1px solid #e5e7eb;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 1rem;
                }
                .price-section {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }
                .price-label {
                    font-size: 0.875rem;
                    color: #6b7280;
                }
                .price-value {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--btn-color);
                }
                .modal-btn {
                    white-space: nowrap;
                }
                @media (max-width: 768px) {
                    .modal-footer {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    .modal-btn {
                        width: 100%;
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML("beforeend", modalStyles);
    }

    // Insert modal into DOM
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    document.body.style.overflow = "hidden";
}

// Generate star rating
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = "";

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star star-filled"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt star-filled"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star" style="color: #d1d5db;"></i>';
    }

    return starsHTML;
}

// Close modal function
function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;

    const modal = document.getElementById("cruise-modal");
    if (modal) {
        modal.remove();
        document.body.style.overflow = "auto";
    }
}

// Book cruise function
function bookCruise(cruiseId) {
    const cruise = cruises.find((c) => c.id === cruiseId);
    if (cruise) {
        // Close modal first
        closeModal();

        // Simulate booking process
        showBookingForm(cruise);
    }
}

// Show booking form
function showBookingForm(cruise) {
    const bookingHTML = `
        <div id="booking-modal" class="modal-overlay" onclick="closeBookingModal(event)">
            <div class="modal-content" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <h2>حجز رحلة: ${cruise.title}</h2>
                    <button class="modal-close" onclick="closeBookingModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <form id="booking-form" class="booking-form">
                        <div class="form-group">
                            <label>الاسم الكامل</label>
                            <input type="text" required placeholder="أدخل اسمك الكامل">
                        </div>
                        <div class="form-group">
                            <label>البريد الإلكتروني</label>
                            <input type="email" required placeholder="example@email.com">
                        </div>
                        <div class="form-group">
                            <label>رقم الهاتف</label>
                            <input type="tel" required placeholder="+966 XX XXX XXXX">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>عدد البالغين</label>
                                <select required>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5+">5+</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>عدد الأطفال</label>
                                <select>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4+">4+</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>ملاحظات خاصة</label>
                            <textarea placeholder="أي طلبات خاصة أو ملاحظات"></textarea>
                        </div>
                        <div class="booking-summary">
                            <h3>ملخص الحجز</h3>
                            <div class="summary-row">
                                <span>الرحلة:</span>
                                <span>${cruise.title}</span>
                            </div>
                            <div class="summary-row">
                                <span>المدة:</span>
                                <span>${cruise.duration}</span>
                            </div>
                            <div class="summary-row total">
                                <span>المجموع:</span>
                                <span>${cruise.price} ريال</span>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn-secondary" onclick="closeBookingModal()">
                        إلغاء
                    </button>
                    <button type="submit" form="booking-form" class="btn-primary">
                        تأكيد الحجز
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add booking form styles
    if (!document.getElementById("booking-styles")) {
        const bookingStyles = `
            <style id="booking-styles">
                .booking-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .form-group label {
                    font-weight: 600;
                    color: var(--text-main);
                }
                .form-group input,
                .form-group select,
                .form-group textarea {
                    padding: 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                    transition: border-color 0.3s ease;
                }
                .form-group input:focus,
                .form-group select:focus,
                .form-group textarea:focus {
                    outline: none;
                    border-color: var(--btn-color);
                    box-shadow: 0 0 0 3px rgba(0, 144, 208, 0.1);
                }
                .form-group textarea {
                    resize: vertical;
                    min-height: 80px;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                .booking-summary {
                    background-color: var(--white-bg);
                    padding: 1rem;
                    border-radius: 0.5rem;
                    margin-top: 1rem;
                }
                .booking-summary h3 {
                    color: var(--text-main);
                    margin-bottom: 1rem;
                    font-size: 1.125rem;
                }
                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }
                .summary-row.total {
                    font-weight: 700;
                    font-size: 1.125rem;
                    color: var(--btn-color);
                    border-top: 1px solid #d1d5db;
                    padding-top: 0.5rem;
                    margin-top: 0.5rem;
                }
                @media (max-width: 768px) {
                    .form-row {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        `;
        document.head.insertAdjacentHTML("beforeend", bookingStyles);
    }

    document.body.insertAdjacentHTML("beforeend", bookingHTML);

    // Handle form submission
    document
        .getElementById("booking-form")
        .addEventListener("submit", handleBookingSubmit);
}

// Close booking modal
function closeBookingModal(event) {
    if (event && event.target !== event.currentTarget) return;

    const modal = document.getElementById("booking-modal");
    if (modal) {
        modal.remove();
        document.body.style.overflow = "auto";
    }
}

// Handle booking form submission
function handleBookingSubmit(e) {
    e.preventDefault();

    // Simulate booking process
    showLoadingModal();

    setTimeout(() => {
        closeLoadingModal();
        showSuccessModal();
    }, 2000);
}

// Show loading modal
function showLoadingModal() {
    const loadingHTML = `
        <div id="loading-modal" class="modal-overlay">
            <div class="loading-content">
                <div class="spinner"></div>
                <p>جاري معالجة طلب الحجز...</p>
            </div>
        </div>
    `;

    const loadingStyles = `
        <style id="loading-styles">
            .loading-content {
                background: white;
                padding: 2rem;
                border-radius: 1rem;
                text-align: center;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            }
            .spinner {
                width: 40px;
                height: 40px;
                border: 4px solid #f3f4f6;
                border-top: 4px solid var(--btn-color);
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;

    if (!document.getElementById("loading-styles")) {
        document.head.insertAdjacentHTML("beforeend", loadingStyles);
    }

    closeBookingModal();
    document.body.insertAdjacentHTML("beforeend", loadingHTML);
}

// Close loading modal
function closeLoadingModal() {
    const modal = document.getElementById("loading-modal");
    if (modal) modal.remove();
}

// Show success modal
function showSuccessModal() {
    const successHTML = `
        <div id="success-modal" class="modal-overlay" onclick="closeSuccessModal()">
            <div class="success-content" onclick="event.stopPropagation()">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>تم الحجز بنجاح!</h2>
                <p>شكراً لك، تم إرسال تأكيد الحجز إلى بريدك الإلكتروني</p>
                <p class="booking-ref">رقم المرجع: ARW${Date.now()
                    .toString()
                    .slice(-6)}</p>
                <button class="btn-primary" onclick="closeSuccessModal()">
                    موافق
                </button>
            </div>
        </div>
    `;

    const successStyles = `
        <style id="success-styles">
            .success-content {
                background: white;
                padding: 2rem;
                border-radius: 1rem;
                text-align: center;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                max-width: 400px;
            }
            .success-icon {
                font-size: 4rem;
                color: #10b981;
                margin-bottom: 1rem;
            }
            .success-content h2 {
                color: var(--text-main);
                margin-bottom: 1rem;
            }
            .success-content p {
                color: #6b7280;
                margin-bottom: 1rem;
            }
            .booking-ref {
                font-weight: 600;
                color: var(--btn-color);
                background-color: var(--white-bg);
                padding: 0.5rem;
                border-radius: 0.5rem;
            }
        </style>
    `;

    if (!document.getElementById("success-styles")) {
        document.head.insertAdjacentHTML("beforeend", successStyles);
    }

    document.body.insertAdjacentHTML("beforeend", successHTML);
}

// Close success modal
function closeSuccessModal() {
    const modal = document.getElementById("success-modal");
    if (modal) {
        modal.remove();
        document.body.style.overflow = "auto";
    }
}

// Search functionality
function setupSearch() {
    const searchSection = document.getElementById("search");
    if (searchSection) {
        const searchHTML = `
            <div class="search-container">
                <div class="search-form">
                    <div class="search-row">
                        <div class="search-field">
                            <label>الوجهة</label>
                            <select id="destination">
                                <option value="">اختر الوجهة</option>
                                <option value="dubai">دبي</option>
                                <option value="qatar">قطر</option>
                                <option value="kuwait">الكويت</option>
                                <option value="jeddah">جدة</option>
                                <option value="aqaba">العقبة</option>
                            </select>
                        </div>
                        <div class="search-field">
                            <label>المدة</label>
                            <select id="duration">
                                <option value="">أي مدة</option>
                                <option value="3-5">3-5 أيام</option>
                                <option value="6-8">6-8 أيام</option>
                                <option value="9+">9+ أيام</option>
                            </select>
                        </div>
                        <div class="search-field">
                            <label>السعر الأقصى</label>
                            <select id="price">
                                <option value="">أي سعر</option>
                                <option value="1500">أقل من 1,500 ريال</option>
                                <option value="2500">أقل من 2,500 ريال</option>
                                <option value="3500">أقل من 3,500 ريال</option>
                            </select>
                        </div>
                        <button class="btn-primary search-btn" onclick="searchCruises()">
                            <i class="fas fa-search"></i>
                            بحث
                        </button>
                    </div>
                </div>
                <div id="search-results" class="search-results"></div>
            </div>
        `;

        const searchStyles = `
            <style id="search-styles">
                .search-container {
                    max-width: 1000px;
                    margin: 0 auto;
                }
                .search-form {
                    background: white;
                    padding: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    margin-bottom: 2rem;
                }
                .search-row {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                    align-items: end;
                }
                .search-field {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .search-field label {
                    font-weight: 600;
                    color: var(--text-main);
                }
                .search-field select {
                    padding: 0.75rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.5rem;
                    font-size: 1rem;
                }
                .search-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    justify-content: center;
                    white-space: nowrap;
                }
                .search-results {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 2rem;
                }
                @media (max-width: 768px) {
                    .search-row {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        `;

        if (!document.getElementById("search-styles")) {
            document.head.insertAdjacentHTML("beforeend", searchStyles);
        }

        const container = searchSection.querySelector(".container");
        container.insertAdjacentHTML("beforeend", searchHTML);
    }
}

// Search cruises function
function searchCruises() {
    const destination = document.getElementById("destination").value;
    const duration = document.getElementById("duration").value;
    const price = document.getElementById("price").value;

    let filteredCruises = [...cruises];

    // Filter by destination
    if (destination) {
        filteredCruises = filteredCruises.filter(
            (cruise) =>
                cruise.route.toLowerCase().includes(destination) ||
                cruise.departure.toLowerCase().includes(destination) ||
                cruise.arrival.toLowerCase().includes(destination)
        );
    }

    // Filter by duration
    if (duration) {
        filteredCruises = filteredCruises.filter((cruise) => {
            const days = parseInt(cruise.duration);
            switch (duration) {
                case "3-5":
                    return days >= 3 && days <= 5;
                case "6-8":
                    return days >= 6 && days <= 8;
                case "9+":
                    return days >= 9;
                default:
                    return true;
            }
        });
    }

    // Filter by price
    if (price) {
        filteredCruises = filteredCruises.filter(
            (cruise) =>
                parseInt(cruise.price.replace(",", "")) <= parseInt(price)
        );
    }

    displaySearchResults(filteredCruises);
}

// Display search results
function displaySearchResults(results) {
    const resultsContainer = document.getElementById("search-results");

    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: #d1d5db; margin-bottom: 1rem;"></i>
                <h3>لم يتم العثور على نتائج</h3>
                <p>جرب تعديل معايير البحث</p>
            </div>
        `;
        return;
    }

    const resultsHTML = results
        .map((cruise, index) => createCruiseCard(cruise, index))
        .join("");

    resultsContainer.innerHTML = `
        <div class="results-header">
            <h3>تم العثور على ${results.length} رحلة</h3>
        </div>
        <div class="results-grid">
            ${resultsHTML}
        </div>
    `;
}

// Enhanced initialization with error handling
document.addEventListener("DOMContentLoaded", function () {
    try {
        renderCruises();
        setupSmoothScrolling();
        setupMobileMenu();
        setupAnimations();
        setupSearch();

        // Add escape key handler for modals
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                closeModal();
                closeBookingModal();
                closeSuccessModal();
            }
        });

        console.log("Arabic Cruise Website initialized successfully");
    } catch (error) {
        console.error("Error initializing website:", error);
    }
});

// Add window resize handler
window.addEventListener("resize", () => {
    const navLinks = document.querySelector(".nav-links");
    if (window.innerWidth >= 768 && navLinks) {
        navLinks.style.display = "";
        navLinks.style.position = "";
        navLinks.style.backgroundColor = "";
        navLinks.style.flexDirection = "";
        navLinks.style.padding = "";
        navLinks.style.boxShadow = "";
    }
});
