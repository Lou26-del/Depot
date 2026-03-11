// menu.js
document.addEventListener('DOMContentLoaded', () => {
  // Cibler par le texte ou ajouter des IDs/classes spécifiques dans ton HTML
  const profilLink = document.querySelector('.dropdown-menu a[href="#"]'); // premier lien "Mon Profil"
  const settingsLink = document.querySelectorAll('.dropdown-menu a[href="#"]')[1]; // deuxième lien "Paramètres"
  const logoutLink = document.querySelector('.dropdown-menu a[href="/logout"]'); // lien Déconnexion

  if (profilLink) {
    profilLink.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Action : Aller vers Mon Profil');
      alert('Redirection vers votre profil...');
      // window.location.href = '/profil';
    });
  }

  if (settingsLink) {
    settingsLink.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Action : Aller vers les Paramètres');
      alert('Ouverture des paramètres...');
      // window.location.href = '/parametres';
    });
  }

  if (logoutLink) {
    logoutLink.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('Action : Déconnexion');
      alert('Vous êtes déconnecté.');
      window.location.href = '/logout'; // redirection vers ta route Flask
    });
  }
});
