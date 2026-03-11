 // Effet d’écriture progressive du texte
        const text = "Votre messagerie sécurisée et fiable";
        const welcome = document.getElementById("welcome-text");
        welcome.textContent = "";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                welcome.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 70);
            }
        }
        // Lancer l'effet d'écriture seulement après que le DOM soit prêt
        document.addEventListener("DOMContentLoaded", typeWriter);

        // Animation de la barre de progression
        const progressBar = document.getElementById("progress-bar");
        // Assurez-vous que l'animation commence après un court délai pour mieux synchroniser
        setTimeout(() => {
            progressBar.style.width = "100%";
        }, 500); // Décalé de 500ms pour mieux synchroniser avec l'écriture du texte

        // Redirection automatique après 3.5 secondes
        setTimeout(function () {
            window.location.href = "/login"; // Remplacez par le nom de votre page de connexion réelle
        }, 3500); // Ajusté légèrement pour permettre la fin de la barre de progression

        // Permet de cliquer sur la page pour passer directement
        document.body.addEventListener("click", function () { // L'événement click est maintenant sur le body
            window.location.href = "/login"; // Remplacez par le nom de votre page de connexion réelle
        });