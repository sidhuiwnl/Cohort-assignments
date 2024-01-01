const { Router } = require("express");
const router = Router();
const generateUniqueId = require('../utils');
const userMiddleware = require("../middleware/user");
const {User ,Course } = require('../db');
const jwt = require('jsonwebtoken');
require("dotenv").config();

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    try {
        const {username, password} = req.body;
        const doc = await User.create({
            id : generateUniqueId(),
            username, 
            password
        });
        res.json({message: 'User created succesfully'});
    } catch (error) {
        res.json({'error': error.message});
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    try {
        const {username, password} = req.body;
        await User.findOne({username, password});
        const token = jwt.sign({username: username, password: password},process.env.JWT_KEY);
        res.json({token: token});
    } catch (error) {
        res.json({'error': error.message});
    }
    
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const allCourse = await Course.find();
    res.status(200).json({"Courses" : allCourse})
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
   try {
    const course = await Course.findOne({_id : req.params.courseId})
    const updateUser = await User.findOneAndUpdate({
        username : req.username
    },{
        $push : {purchasedCourses : course}
    })
    res.json({message: 'Course Purchased Succesfully'});
   } catch (error) {
    res.json({"error": error.message});
   }
    

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const user = await User.findOne({username: req.username});
        await user.populate('purchasedCourses');
        res.json({purchasedCourses: user.purchasedCourses});
    } catch (error) {
        res.json({"error": error.message});
    }
});

module.exports = router