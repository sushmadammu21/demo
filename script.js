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
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 5px #f7ebeb';
    } else {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = 'none';
    }
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

// Scroll reveal functionality
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add scroll-reveal class to elements you want to animate
document.querySelectorAll('.giving-content, .newsletter-section, .book-item').forEach(el => {
    el.classList.add('scroll-reveal');
    observer.observe(el);
});

// Menu toggle functionality
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

// Add fade-in class to body when page loads
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});
//bible verse
async function fetchBibleVerse() {
    const url = "https://script.google.com/macros/s/AKfycbzwIHEco4KT-o82XTUGu9Qv-c_8jI7TCGLviGWoSkicr4bDWZp7LooYP_did2zmQkRxhA/exec";
    const today = new Date().toISOString().split("T")[0];

    // Check local storage first
    const cachedVerse = localStorage.getItem("bibleVerse");
    const cachedDate = localStorage.getItem("verseDate");

    if (cachedVerse && cachedDate === today) {
        document.getElementById("verse-text").textContent = `"${cachedVerse}"`;
        document.getElementById("verse-reference").textContent = `- ${localStorage.getItem("verseReference")}`;
        return;
    }

    try {
        let response = await fetch(url);
        let data = await response.json();

        document.getElementById("verse-text").textContent = `"${data.verse}"`;
        document.getElementById("verse-reference").textContent = `- ${data.reference}`;

        // Store in local storage
        localStorage.setItem("bibleVerse", data.verse);
        localStorage.setItem("verseReference", data.reference);
        localStorage.setItem("verseDate", today);
    } catch (error) {
        console.error("Error fetching Bible verse:", error);
        document.getElementById("verse-text").textContent = "Error loading verse.";
    }
}

fetchBibleVerse();
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


      document.getElementById("form").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission
        document.getElementById("message").textContent = "Submitting..";
        document.getElementById("message").style.display = "block";
        document.getElementById("submit-button").disabled = true;

        // Collect the form data
        var formData = new FormData(this);
        var keyValuePairs = [];
        for (var pair of formData.entries()) {
          keyValuePairs.push(pair[0] + "=" + pair[1]);
        }

        var formDataString = keyValuePairs.join("&");

        // Send a POST request to your Google Apps Script
        fetch(
          "https://script.google.com/macros/s/AKfycbzEeJKGJNAsB26sn4Eslcqp8f6Tpp-ugLg3j5KKCkcHYBwv_1GuaJtGGv6qnAYASQkc0w/exec",
          {
            redirect: "follow",
            method: "POST",
            body: formDataString,
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
          }
        )
          .then(function (response) {
            // Check if the request was successful
            if (response) {
              return response; // Assuming your script returns JSON response
            } else {
              throw new Error("Failed to submit the form.");
            }
          })
          .then(function (data) {
            // Display a success message
            document.getElementById("message").textContent =
              "Data submitted successfully!";
            document.getElementById("message").style.display = "block";
            document.getElementById("message").style.backgroundColor = "green";
            document.getElementById("message").style.color = "beige";
            document.getElementById("submit-button").disabled = false;
            document.getElementById("form").reset();

            setTimeout(function () {
              document.getElementById("message").textContent = "";
              document.getElementById("message").style.display = "none";
            }, 2600);
          })
          .catch(function (error) {
            // Handle errors, you can display an error message here
            console.error(error);
            document.getElementById("message").textContent =
              "An error occurred while submitting the form.";
            document.getElementById("message").style.display = "block";
          });
      });
