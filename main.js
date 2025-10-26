function toggleChatbot() {
    const chatbotIframe = document.getElementById("chatbotIframe");
    if (chatbotIframe.style.display === "none" || chatbotIframe.style.display === "") {
        chatbotIframe.style.display = "block"; // Show iframe
    } else {
        chatbotIframe.style.display = "none"; // Hide iframe
    }
}
// Select the hamburger menu icon and the offscreen menu
const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

// Toggle the visibility of the off-screen menu when the hamburger menu is clicked
hamMenu.addEventListener('click', () => {
    offScreenMenu.classList.toggle('active');
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (document.querySelector('header nav a[href*=' + id + ']')) {
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                }
            });
        }
    });
};document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        // Ensure no JavaScript code is preventing the default action
        // event.preventDefault(); // This line would prevent navigation
    });
});







