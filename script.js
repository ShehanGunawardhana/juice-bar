
// Preloader
window.addEventListener('load', function () {
    document.querySelector('.preloader').style.opacity = '0';
    setTimeout(function () {
        document.querySelector('.preloader').style.display = 'none';
    }, 500);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('active');
    this.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', function () {
        nav.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
});

// Sticky Header
window.addEventListener('scroll', function () {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Here you would typically send the form data to a server
        // For this demo, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Animation on Scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.menu-item, .testimonial, .contact-form');

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial state for animations
document.querySelectorAll('.menu-item, .testimonial, .contact-form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Testimonial Slider
const testimonials = [
    {
        text: "The Green Detox juice is my daily morning ritual! I've noticed such a difference in my energy levels since I started drinking it regularly. The staff is always so friendly too!",
        name: "Malintha Shehan",
        role: "Regular Customer",
        image: "assest/malintha.jpg"
    },
    {
        text: "I was skeptical about cold-pressed juice, but the Tropical Paradise completely changed my mind. It's like vacation in a bottle! I'm now a weekly customer.",
        name: "Dahami dias",
        role: "New Customer",
        image: "assest/dahami.jpg"
    },
    {
        text: "As a nutritionist, I recommend Fresh Squeeze to all my clients. The quality of their ingredients is unmatched in the city. The Berry Blast is my personal favorite!",
        name: "Dr. Nidula Yasan",
        role: "Nutritionist",
        image: "assest/nidula.jpg"
    }
];

let currentTestimonial = 0;
const testimonialContainer = document.querySelector('.testimonial-slider');

function showTestimonial(index) {
    const testimonial = testimonials[index];
    testimonialContainer.innerHTML = `
                <div class="testimonial">
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div class="testimonial-author">
                        <div class="author-img">
                            <img src="${testimonial.image}" alt="${testimonial.name}">
                        </div>
                        <div class="author-info">
                            <h4>${testimonial.name}</h4>
                            <span>${testimonial.role}</span>
                        </div>
                    </div>
                </div>
            `;
}

// Initialize first testimonial
showTestimonial(currentTestimonial);

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000);
