// Handle page navigation
function navigateTo(page) {
    window.location.href = page;
}

// Handle Finance form submission
document.getElementById('finance-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const form = event.target; // Get the form
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // Get the form data

    console.log('Finance Form Data:', data); // Log form data to the console

    // Show a success message for Finance form submission
    alert('Finance form submitted successfully!');
});

// Handle Product form submission
document.getElementById('product-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const form = event.target; // Get the form
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries()); // Get the form data

    console.log('Product Form Data:', data); // Log form data to the console

    // Show a success message for Product form submission
    alert('Product form submitted successfully!');
});
