const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { fname, lname, email } = req.body;
    // Perform server-side validation
    if (!isValidEmail(email)) {
        return res.status(400).send('Invalid email address');
    }
    // Process form data
    // Example: Send email, save to database, etc.
    res.send('Form submitted successfully');
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//map

