const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
app.post('/signup', (req, res) => {
    // Implement admin signup logic
    let adminUsername = req.headers.username
    let adminPassword = req.headers.password
    if((adminPassword === 'pass' && adminUsername === 'admin')){
        res.status(200).json({msg : "Admin created successfully"})

    }

});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;