const { Router } = require("express");
const { Admin , Course } = require('../db/index');
const generateUniqueId = require('../utils');
const adminMiddleware = require("../middleware/admin");
const router = Router();
var jwt = require('jsonwebtoken');







// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    try {
        const token = req.headers.authorization;
        const verifyAdmintoken = jwt.verify(token,process.env.JWT_KEY);
        if(verifyAdmintoken){
            res.status(400).json({
                msg : "Valid admin"
            })
        }
    } catch (error) {
        res.json('JWT verification failed:', error);
    }
    

    
    
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const {username,password} = req.body;
    const token = jwt.sign({username : username},process.env.JWT_KEY);
    if(!token){
        res.send(411).json({
            msg : "Invalid username and password"
        })
    }else{
       const AdminCredentials = await Admin.create({
        id : generateUniqueId(),
        username : username,
        password : password
    })
       if(AdminCredentials){
        res.json({
            msg : "Admin created and token genreated",
            token
        })
       }
    }
    return token
    

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const {title,description,price,image} = req.body;
    const course = await Course.create({
        id : generateUniqueId(),
        title : title,
        description : description,
        price : price,
        image : image,

    })
    course.save()
    res.json({msg : "Course created"})
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const findCourse = await Course.find();
    res.json({findCourse})
});

module.exports = router;