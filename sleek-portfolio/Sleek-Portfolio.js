document.addEventListener('DOMContentLoaded', function() {
const particles = document.querySelector('.particles');
const particleCount = 15;
for (let i = 0; i < particleCount; i++) {
const particle = document.createElement('div');
particle.classList.add('particle');
// Random size between 5px and 15px
const size = Math.random() * 10 + 5;
particle.style.width = `${size}px`;
particle.style.height = `${size}px`;
// Random position
particle.style.top = `${Math.random() * 100}%`;
particle.style.left = `${Math.random() * 100}%`;
// Random animation delay
particle.style.animationDelay = `${Math.random() * 5}s`;
// Random opacity
particle.style.opacity = Math.random() * 0.5 + 0.1;
particles.appendChild(particle);
}
});
document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
menuToggle.addEventListener('click', function() {
mobileMenu.classList.toggle('hidden');
// Toggle icon
const icon = menuToggle.querySelector('i');
if (icon.classList.contains('ri-menu-line')) {
icon.classList.remove('ri-menu-line');
icon.classList.add('ri-close-line');
} else {
icon.classList.remove('ri-close-line');
icon.classList.add('ri-menu-line');
}
});
// Close mobile menu when clicking on a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
link.addEventListener('click', function() {
mobileMenu.classList.add('hidden');
menuToggle.querySelector('i').classList.remove('ri-close-line');
menuToggle.querySelector('i').classList.add('ri-menu-line');
});
});
// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80, // Adjust for header height
behavior: 'smooth'
});
}
});
});
// Active link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
function highlightNavLink() {
const scrollPosition = window.scrollY + 100;
sections.forEach(section => {
const sectionTop = section.offsetTop;
const sectionHeight = section.offsetHeight;
const sectionId = section.getAttribute('id');
if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href') === `#${sectionId}`) {
link.classList.add('active');
}
});
}
});
}
window.addEventListener('scroll', highlightNavLink);
highlightNavLink(); // Initial call
});
document.addEventListener('DOMContentLoaded', function() {
// Animate skill bars
function animateSkillBars() {
const skillBars = document.querySelectorAll('.skill-progress');
skillBars.forEach(bar => {
const width = bar.getAttribute('data-width');
bar.style.width = width;
});
}
// Animate timeline items and sections on scroll
function animateOnScroll() {
const timelineItems = document.querySelectorAll('.timeline-item');
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, { threshold: 0.1 });
timelineItems.forEach(item => {
observer.observe(item);
});
sections.forEach(section => {
observer.observe(section);
});
}
// Initialize animations
animateSkillBars();
animateOnScroll();
});
document.addEventListener('DOMContentLoaded', function() {
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
e.preventDefault();
// Get form values
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const subject = document.getElementById('subject').value;
const message = document.getElementById('message').value;
// Basic validation
if (!name || !email || !subject || !message) {
alert('Please fill in all fields');
return;
}
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
alert('Please enter a valid email address');
return;
}
// Here you would normally send the form data to a server
// For demo purposes, we'll just log it and show a success message
console.log({ name, email, subject, message });
// Clear form
form.reset();
// Show success message
alert('Message sent successfully! I will get back to you soon.');
});
});
document.addEventListener('DOMContentLoaded', function() {
  const scroll = document.getElementById('software-scroll');
  const ul = scroll.querySelector('ul');
  // Clone the list for seamless looping
  const clone = ul.cloneNode(true);
  scroll.appendChild(clone);
  // Adjust animation based on content height
  const itemCount = ul.children.length;
  const itemHeight = ul.children[0].offsetHeight + 24; // 24px = space-y-6
  const totalHeight = itemCount * itemHeight;
  scroll.style.height = (totalHeight * 2) + 'px';
  scroll.style.animationDuration = (itemCount * 2) + 's';
  scroll.style.top = '0';
  // Responsive adjustment
  window.addEventListener('resize', () => {
    const newItemHeight = ul.children[0].offsetHeight + 24;
    const newTotalHeight = itemCount * newItemHeight;
    scroll.style.height = (newTotalHeight * 2) + 'px';
    scroll.style.animationDuration = (itemCount * 2) + 's';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const scroll = document.getElementById('software-scroll-horizontal');
  const ul = scroll.querySelector('ul');
  // Clone the list for seamless looping
  const clone = ul.cloneNode(true);
  scroll.appendChild(clone);
  // Set width for seamless scroll
  const totalWidth = ul.offsetWidth;
  scroll.style.width = (totalWidth * 2) + 'px';
  // Responsive adjustment
  window.addEventListener('resize', () => {
    const newTotalWidth = ul.offsetWidth;
    scroll.style.width = (newTotalWidth * 2) + 'px';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  // 1. Badge blinks like a neon light
  const badge = document.querySelector('.badge');
  badge.style.opacity = 1;
  badge.style.animation = 'badge-blink 1.2s steps(1) 2';
  // 2. After badge blink, show cursor blinking
  setTimeout(() => {
    badge.style.animation = '';
    // Show cursor only
    const h1 = document.querySelector('.hero-type');
    const h2 = document.querySelector('.hero-type2');
    const p = document.querySelector('.hero-type3');
    const badgeFades = document.querySelectorAll('.hero-fade');
    const cursor = h1.querySelector('.typewriter-cursor');
    cursor.style.opacity = 1;
    h1.classList.add('visible');
    // 3. Cursor blinks for a moment, then type name, title, subtitle
    setTimeout(() => {
      function typeText(element, text, speed, callback) {
        let i = 0;
        const span = element.querySelector('.typewriter-text');
        const cursor = element.querySelector('.typewriter-cursor');
        function type() {
          span.textContent = text.slice(0, i);
          if (i < text.length) {
            i++;
            setTimeout(type, speed);
          } else {
            cursor.style.display = 'none';
            if (callback) callback();
          }
        }
        type();
      }
      typeText(h1, h1.getAttribute('data-text'), 60, function() {
        h2.classList.add('visible');
        typeText(h2, h2.getAttribute('data-text'), 50, function() {
          p.classList.add('visible');
          typeText(p, p.getAttribute('data-text'), 18, function() {
            badgeFades.forEach((el, idx) => {
              setTimeout(() => {
                el.classList.add('visible');
                // After all hero-fade elements are visible, blink the Download CV button
                if (idx === badgeFades.length - 1) {
                  setTimeout(() => {
                    const btn = document.querySelector('.btn-primary');
                    btn.style.animation = 'btn-blink 1.2s steps(1) 2';
                    setTimeout(() => { btn.style.animation = ''; }, 2400);
                  }, 400);
                }
              }, idx * 120);
            });
          });
        });
      });
    }, 900);
  }, 2400);
});
document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('#animated-job-titles .job-titles-wrapper');
  const titles = document.querySelectorAll('#animated-job-titles .job-title');
  let index = 0;
  setInterval(() => {
    index = (index + 1) % titles.length;
    wrapper.style.transform = `translateY(-${index * 1.2}em)`;
  }, 2200);
}); 