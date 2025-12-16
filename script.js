document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("formMessage");

    if (name === "" || email === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
    } else {
        message.textContent = "Thank you for contacting NovaTech Web Solutions!";
        message.style.color = "green";
    }
});
