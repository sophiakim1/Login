function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'apple' && password === 'apple123') {
        alert('Login successful');
        return true;
    } else {
        alert('Invalid username and/or password');
        return false;
    }
}