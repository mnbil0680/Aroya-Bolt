// Cruise data
const cruises = [
    {
        id: 1,
        title: "رحلة ساوثبتون الأوروبية",
        duration: "11 أيام",
        ship: "أروى المحيط",
        route: "ساوثبتون(بريطانيا) - اوروبا",
        departure: "ساوثبتون",
        arrival: "اوروبا",
        image: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg",
        highlights: ["برج إيفل", "ساجرادا فاميليا", "الكولوسيوم"],
    },
    {
        id: 2,
        title: "رحلة الخليج الذهبية",
        duration: "7 أيام",
        ship: "أروى الملكية",
        route: "دبي - الدوحة - الكويت",
        departure: "دبي",
        arrival: "دبي",
        image: "https://images.pexels.com/photos/2467287/pexels-photo-2467287.jpeg",
        highlights: ["شواطئ خاصة", "جولات مدينة", "عروض ليلية"],
    },
    {
        id: 3,
        title: "مغامرة البحر الأحمر",
        duration: "5 أيام",
        ship: "أروى الأسطورة",
        route: "جدة - العقبة - شرم الشيخ",
        departure: "جدة",
        arrival: "جدة",
        image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg",
        highlights: ["غوص مع الدلافين", "رحلات صحراوية", "مأكولات محلية"],
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
                                <i class="fas fa-ship"></i>
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
                        <a href="https://book.mycruiseksa.com/swift/cruise?siid=1299887&lang=13&cruiseline=6&transportid=29&ship=15159&sortColumn=cruiselinePriority&sortOrder=asc">
                        
                        <button class="btn-primary" >
                            عرض التفاصيل
                        </button>
                        </a>
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
