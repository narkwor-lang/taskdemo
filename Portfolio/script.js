// Typing Effect
const roles = ["Frontend Developer", "UI Designer", "Creative Coder"];
let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
    if (charIndex < roles[index].length) {
        typingElement.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Scroll Reveal
window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// Dark Mode Toggle
const toggle = document.querySelector(".toggle-theme");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// EmailJS Setup
(function(){
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("contact-form")
.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
    .then(function() {
        alert("Message sent successfully 🚀");
    }, function(error) {
        alert("Failed to send message ❌");
    });
});