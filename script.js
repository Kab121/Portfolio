// Get all tab links and contents
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
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

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
  });
  function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
