document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            comments: document.querySelector('textarea').value
        };

        try {
            // Fetch API POST request to your proxy server
            const response = await fetch('http://127.0.0.1:5500/formapi/32', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            console.log('Data sent successfully:', data);
            // Handle success (e.g., show a success message to the user)
        } catch (error) {
            console.error('Error:', error);
            // Handle error (e.g., show an error message to the user)
        }
    });
});
