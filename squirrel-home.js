// تشغيل تأثيرات صفحة بيت السنجاب
document.addEventListener('DOMContentLoaded', () => {
    // إخفاء صفحة التحميل
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loadingScreen = document.querySelector('.loading-screen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.visibility = 'hidden';
                }, 500);
                
                // تفعيل المجلدات (الطوابق)
                activateFloors();
                
                // تفعيل تأثيرات الظهور على التمرير
                activateScrollEffects();
                
                // تفعيل قائمة التنقل
                activateNavigation();
                
                // إنشاء عناصر متساقطة
                createFallingElements();
            }
        }, 1500);
    });
    
    // إنشاء عناصر الأوراق المتساقطة
    function createFallingElements() {
        const container = document.querySelector('.falling-elements.inside');
        if (!container) return;
        
        const elements = ['💰', '📝', '💻', '📊', '💡', '🔍', '📱', '⚙️'];
        
        // إنشاء 15 عنصر متساقط
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const element = document.createElement('div');
                const randomElement = elements[Math.floor(Math.random() * elements.length)];
                
                element.className = 'falling-element';
                element.textContent = randomElement;
                element.style.left = `${Math.random() * 100}%`;
                element.style.opacity = Math.random() * 0.5 + 0.2;
                element.style.fontSize = `${Math.random() * 14 + 10}px`;
                element.style.animationDuration = `${Math.random() * 15 + 10}s`;
                element.style.animationDelay = `${Math.random() * 5}s`;
                
                container.appendChild(element);
            }, i * 300);
        }
    }
    
    // تفعيل المجلدات (الطوابق)
    function activateFloors() {
        const nextFloorArrows = document.querySelectorAll('.next-floor-arrow');
        
        nextFloorArrows.forEach(arrow => {
            arrow.addEventListener('click', () => {
                const targetId = arrow.getAttribute('data-target');
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // التمرير السلس إلى المجلد التالي
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        
        // تفعيل تأثير السلسلة الضوئية للأزرار عند تحريك الماوس فوقها
        const nextArrows = document.querySelectorAll('.next-floor-arrow');
        nextArrows.forEach(arrow => {
            arrow.addEventListener('mouseenter', () => {
                arrow.querySelector('i').style.transform = 'translateY(5px)';
                arrow.querySelector('i').style.color = 'var(--leaf-color-1)';
            });
            
            arrow.addEventListener('mouseleave', () => {
                arrow.querySelector('i').style.transform = '';
                arrow.querySelector('i').style.color = '';
            });
        });
    }
    
    // تفعيل تأثيرات الظهور عند التمرير
    function activateScrollEffects() {
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });
        
        fadeElements.forEach(element => {
            fadeObserver.observe(element);
        });
        
        // تفعيل أشرطة المهارات
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const skillObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.style.width;
                    entry.target.style.width = '0%';
                    
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 300);
                }
            });
        }, { threshold: 0.1 });
        
        skillBars.forEach(bar => {
            skillObserver.observe(bar);
        });
    }
    
    // تفعيل قائمة التنقل
    function activateNavigation() {
        // تفعيل زر القائمة على الشاشات الصغيرة
        const burger = document.querySelector('.burger');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links li');
        
        if (burger && navLinks) {
            burger.addEventListener('click', () => {
                // تبديل حالة القائمة
                navLinks.classList.toggle('nav-active');
                
                // تحريك عناصر القائمة
                links.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });
                
                // تحريك زر القائمة
                burger.classList.toggle('toggle');
            });
        }
        
        // التمرير السلس عند النقر على روابط القائمة
        const floorLinks = document.querySelectorAll('.floor-link');
        
        floorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    // إغلاق القائمة على الشاشات الصغيرة
                    if (navLinks && navLinks.classList.contains('nav-active')) {
                        navLinks.classList.remove('nav-active');
                        burger.classList.remove('toggle');
                        
                        links.forEach(link => {
                            link.style.animation = '';
                        });
                    }
                    
                    // التمرير إلى القسم المطلوب
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
        // في حدث تحميل الصفحة
window.addEventListener('load', () => {
    // بعد إخفاء شاشة التحميل
    setTimeout(() => {
        // ...
        
        // تحريك اقتباس الصفحة الرئيسية
        if (typeof gsap !== 'undefined') {
            gsap.to('.quote-container', {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: 'power3.out'
            });
        }
        
        // ...
    }, 1500);
});

// Moving quote effect on homepage
const quotes = [
    "الكود هو تجسيد للفكر، والفكر هو انعكاس للوجود",
    "في عالم من الظلام، نسعى للنور عبر سطور من الكود",
    "الحياة لحظات عابرة، والكود بصمتنا الباقية",
    "وحدك في صمت الليل، لا رفيق سوى الشاشة والأفكار"
];

let currentQuote = 0;
const quoteElement = document.querySelector('.quote');

if (quoteElement && typeof gsap !== 'undefined') {
    // Change quote every 5 seconds
    setInterval(() => {
        currentQuote = (currentQuote + 1) % quotes.length;
        
        // Fade out current quote
        gsap.to(quoteElement, {
            opacity: 0,
            y: -20,
            duration: 0.5,
            onComplete: () => {
                // Change text
                quoteElement.textContent = quotes[currentQuote];
                quoteElement.setAttribute('data-text', quotes[currentQuote]);
                
                // Fade in new quote
                gsap.to(quoteElement, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5
                });
            }
        });
    }, 5000);
}
        // تغيير خلفية القائمة عند التمرير
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.tree-nav');
            
            if (nav) {
                if (window.scrollY > 100) {
                    nav.style.backgroundColor = 'rgba(62, 39, 35, 0.95)';
                    nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.5)';
                } else {
                    nav.style.backgroundColor = 'rgba(62, 39, 35, 0.8)';
                    nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
                }
            }
        });
    }
});
