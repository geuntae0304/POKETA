document.getElementById('sendMessageBtn').addEventListener('click', function() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {

        alert('Message sent successfully!');
        
        const contactModal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
        contactModal.hide();
        
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});