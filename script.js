// Tab functionality for switching between Skills, Experience, and Education
var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName, event) {
    // Remove active classes from all tab links and tab contents
    for (var tabLink of tabLinks) {
        tabLink.classList.remove("active-link");
    }
    for (var tabContent of tabContents) {
        tabContent.classList.remove("active-tab");
    }

    // Add active class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    document.getElementById(tabName).classList.add("active-tab");
}

// Contact form submission with Google Apps Script
document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('There was a problem submitting the form.');
        }
    } catch (error) {
        console.error('Submission error:', error);
        alert('An unexpected error occurred.');
    }
});

// Hamburger menu functionality
document.querySelector('.hamburger')?.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('active');
});

// Form submissions to Google Apps Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbzel5PDMxAYdAvE-LvK9NnfnSu8ID-R6WygfFbsDeKjHXzTB7bNPvIJiAO9p1UXltghyw/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form?.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(() => {
                msg.innerHTML = "";
            }, 1500);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.innerHTML = "Error submitting form. Please try again.";
        });
});
