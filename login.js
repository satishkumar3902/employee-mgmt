function login(username, password) {
    if (username === "admin" && password === "admin123") {
        return "Login successful";
    }

    return "Invalid username or password";
}

module.exports = login;