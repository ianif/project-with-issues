// SecurityVulnerableFile.js

// This file contains multiple security vulnerabilities

// 1. Using eval() can lead to code injection attacks
function executeUserInput(userInput) {
    eval(userInput); // Dangerous: executes arbitrary code
}

// 2. Insecure handling of sensitive data
const userCredentials = {
    username: "admin",
    password: "password123" // Hardcoded sensitive information
};

// 3. Lack of input validation
function processInput(input) {
    // No validation on user input, could lead to XSS
    document.getElementById("output").innerHTML = input; 
}

// 4. Insecure cookie handling
document.cookie = "sessionId=abc123; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure; HttpOnly"; // Missing SameSite attribute

// 5. Using HTTP instead of HTTPS
fetch("http://example.com/api/data") // Should use HTTPS to protect data in transit
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));

// 6. Exposing stack traces in error messages
function riskyFunction() {
    try {
        // Some risky operation
        throw new Error("Something went wrong!");
    } catch (error) {
        console.error("Error occurred:", error); // Exposing stack trace
    }
}

// 7. Insecure password storage
const bcrypt = require('bcrypt');
const password = "mySuperSecretPassword"; // Storing plaintext password
const hashedPassword = bcrypt.hashSync(password, 10); // This should be done on user registration, not here

// 8. Lack of rate limiting on API endpoints
app.post('/api/login', (req, res) => {
    // No rate limiting, making it vulnerable to brute force attacks
    const { username, password } = req.body;
    // Authentication logic here
});

// 9. Using untrusted data in SQL queries (SQL Injection)
const sqlQuery = `SELECT * FROM users WHERE username = '${userInput}'`; // Vulnerable to SQL injection

// 10. No Content Security Policy (CSP)
const csp = "default-src 'self'; script-src 'self' 'unsafe-inline';"; // Should be more restrictive
