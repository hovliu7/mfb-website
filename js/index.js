// For changing navbar for mobile view
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// Animating numbers
const animationDuration = 2000;
const steps = 100; 
const increment = (target) => target / steps; 
const interval = animationDuration / steps; 

// Function to animate the number
const updateCount = (counter, target) => {
    let current = 0;

    const animate = () => {
        current += increment(target);

        if (current <= target) {
            counter.innerText = Math.ceil(current); 
            setTimeout(animate, interval);
        } else {
            counter.innerText = target; 
        }
    };

    animate(); 
};

// IntersectionObserver to detect when the numbers come into view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');

            updateCount(counter, target);

            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 }); 

const counters = document.querySelectorAll('.animated-number');

// Observe each counter
counters.forEach(counter => {
    observer.observe(counter);
});


