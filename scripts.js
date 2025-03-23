// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });
});
// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        // Add your newsletter signup logic here
        console.log('Newsletter signup:', email);
        // You would typically send this to your backend
    });
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.book button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Thank you for your purchase!');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Transparency on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Transparency on Scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('transparent');
        } else {
            header.classList.remove('transparent');
        }
    });
});
//bible verse
async function fetchDailyVerse() {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxF7gWzdlRh8AGNlqOaswDmR67pTTFxZz4NHA2LaXX1dM21W253WQWbFQtpuAVKndj3/exec');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const verseData = await response.json();
        console.log('Fetched verse data:', verseData);

        if (verseData) {
            displayVerse(verseData.verse, verseData.scripture);
        } else {
            console.log('No verses available.');
            displayVerse('No verses available.', '');
        }
    } catch (error) {
        console.error('Error fetching the daily verse:', error);
        displayVerse('Error loading verse. Please try again later.', '');
    }
}

function displayVerse(verse, scripture) {
    const verseContainer = document.getElementById('verse-container');
    verseContainer.innerHTML = `
        <span class="verse">${verse}</span>
        <span class="scripture">${scripture}</span>
    `;
}

// Fetch the daily verse when the page loads
fetchDailyVerse();

// Set an interval to fetch the verse every 30 seconds
setInterval(fetchDailyVerse, 30000); // 30000 ms = 30 seconds

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.addEventListener('click', function(event) {
            if (event.target.tagName === 'A') {
                navLinks.classList.remove('active');
            }
        });
    }

    // Responsive behavior for window resize
    window.addEventListener('resize', function() {
        const navLinks = document.querySelector('.nav-links');
        const screenWidth = window.innerWidth;

        if (screenWidth > 768 && navLinks) {
            navLinks.classList.remove('active');
        }
    });
});

// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect for Mobile and Desktop

    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            navbar.classList.add('blur');
        } else {
            navbar.classList.remove('blur');
        }
    });

