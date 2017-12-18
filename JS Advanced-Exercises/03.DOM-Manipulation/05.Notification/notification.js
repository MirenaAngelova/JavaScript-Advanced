function notify(message) {
    let notificationElement = document.getElementById('notification');
    notificationElement.textContent = message;
    notificationElement.style.display = 'block';
    let oneTimeInterval = setTimeout(hideMessage, 2000);

    function hideMessage() {
        clearTimeout(oneTimeInterval);
        notificationElement.style.display = 'none';
    }
}