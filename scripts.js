document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Thank you for signing up, ' + name + '!');
    } else {
        alert('Please fill in all fields.');
    }
});
