const nomInput = document.getElementById("nom");
const preInput = document.getElementById("pre");
const mailInput = document.getElementById("mail");

// Quand on clique sur le champ email
mailInput.addEventListener("focus", () => {
    const nom = nomInput.value.trim().toLowerCase();
    const pre = preInput.value.trim().toLowerCase();
    if (nom && pre) {
        mailInput.value = `${pre}.${nom}@gmail.com`;
    } else {
        mailInput.value = "";
        mailInput.placeholder = "prenom.nom@gmail.com";
    }
});

const togglePassword = document.querySelector(".toggle-password");
const passwordField = document.querySelector("#password-field");

togglePassword.addEventListener("click", function () {
    // bascule type password ↔ text
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // bascule l’icône (œil ouvert/fermé)
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});