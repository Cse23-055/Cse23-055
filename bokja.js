// Add any JavaScript for validation or interactivity here
// For example, you may want to validate form inputs before submission

const form = document.getElementById('bookingForm');

form.addEventListener('submit', function(event) {
    // Add validation or form submission handling here
    // For example, prevent form submission if validation fails
    // You can also use AJAX to submit the form data without refreshing the page
    event.preventDefault();
    alert('Form submitted!'); // Example alert, replace with actual submission code
});
