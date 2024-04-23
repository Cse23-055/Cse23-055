// Check if user is logged in and retrieve username from session/local storage
var username = localStorage.getItem('username');
if (username) {
    document.getElementById('username').innerText = username;
} else {
    // Redirect user to login page if not logged in
    window.location.href = 'login.html';
}
