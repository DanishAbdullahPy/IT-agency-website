function openWhatsApp() {
    var message = "Hello, I'm interested in your services.";
    window.location.href = 'https://wa.me/whatsapp_number/?text=' + encodeURIComponent(message);
}
