function showNotification(message, type) {
    const notificationContainer = document.getElementById('notificationContainer');
    const notificationIcon = notificationContainer.querySelector('.notification-icon');
    const notificationMessage = notificationContainer.querySelector('.notification-message');

    // Set the message text
    notificationMessage.textContent = message;

    // Reset classes
    notificationContainer.classList.remove('success', 'error', 'warning');
    notificationIcon.className = 'notification-icon bi'; // reset

    // Add the appropriate type class and set icon styles
    // Choisir l’icône selon type
    if (type === 'success') {
        notificationContainer.classList.add('success');
        notificationIcon.classList.add('bi-check-circle-fill', 'text-success');
    } else if (type === 'error') {
        notificationContainer.classList.add('error');
        notificationIcon.classList.add('bi-x-circle-fill', 'text-danger');
    } else if (type === 'warning') {
        notificationContainer.classList.add('warning');
        notificationIcon.classList.add('bi-exclamation-triangle-fill', 'text-warning');
    }

    // Make the notification visible
    notificationContainer.style.display = 'flex'; // Use flex to work with align-items

    // Automatically hide the notification after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        notificationContainer.style.display = 'none';
    }, 3000);
}

// Example usage (you can call this function from anywhere in your code)
// document.addEventListener('DOMContentLoaded', () => {
//     // Example: show success message on page load
//     // showNotification('Welcome to the application!', 'success');
// });
