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
                        })">
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

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
    renderCruises();

    // Add scroll animation observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
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
});
