// JavaScript converted from React logic
document.addEventListener("DOMContentLoaded", function () {
    // Features data (equivalent to React state/props)
    const features = [
        { icon: "wifi", text: "واي فاي مجاني في جميع أنحاء السفينة" },
        { icon: "utensils", text: "مطاعم متنوعة بأشهى المأكولات العالمية" },
        { icon: "car", text: "مواقف سيارات مجانية في الميناء" },
        { icon: "waves", text: "حمامات سباحة متعددة مع إطلالة بانورامية" },
        { icon: "star", text: "خدمة كونسيرج 24/7 لراحتكم التامة" },
        { icon: "shield", text: "أعلى معايير الأمان والسلامة البحرية" },
        { icon: "heart", text: "أنشطة ترفيهية مناسبة لجميع أفراد العائلة" },
    ];

    // Function to create SVG icons (simplified Lucide icons)
    function createIcon(iconName) {
        const icons = {
            wifi: '<svg class="icon" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><circle cx="12" cy="20" r="1"></circle></svg>',
            utensils:
                '<svg class="icon" viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z"></path></svg>',
            car: '<svg class="icon" viewBox="0 0 24 24"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 9.6a2 2 0 0 0-1.8-1.2H7.4a2 2 0 0 0-1.8 1.2L3.5 11.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>',
            waves: '<svg class="icon" viewBox="0 0 24 24"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>',
            star: '<svg class="icon" viewBox="0 0 24 24"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon></svg>',
            shield: '<svg class="icon" viewBox="0 0 24 24"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>',
            heart: '<svg class="icon" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5Z"></path>',
            check: '<svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>',
        };
        return icons[iconName] || "";
    }

    // Render features (equivalent to React map function)
    function renderFeatures() {
        const container = document.getElementById("features-container");

        features.forEach((feature, index) => {
            const featureElement = document.createElement("div");
            featureElement.className = "feature-card";

            featureElement.innerHTML = `
                        <div class="feature-icon">
                            ${createIcon(feature.icon)}
                        </div>
                        <p class="text-gray-700 font-medium" style="flex: 1;">${
                            feature.text
                        }</p>
                        <div class="mr-auto flex-shrink-0" style="color: #10b981;">
                            ${createIcon("check")}
                        </div>
                    `;

            container.appendChild(featureElement);
        });
    }

    // Initialize the features
    renderFeatures();

    // Add smooth scroll behavior for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    // Add intersection observer for animations
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll(".animate-slide-up").forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        observer.observe(el);
    });
});
