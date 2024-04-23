// Add event listener to the payButton
document.getElementById('payButton').addEventListener('click', function() {
    // Check if all form fields are filled in
    var cardNumber = document.getElementById('cardNumber').value;
    var cardName = document.getElementById('cardName').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;

    if (cardNumber.trim() === '' || cardName.trim() === '' || expiryDate.trim() === '' || cvv.trim() === '') {
        alert('Please fill in all fields.'); // Show error message if any field is empty
    } else {
        // Perform payment processing here
        // For demonstration purposes, just show an alert
        alert('Payment successful!');
    }
});
