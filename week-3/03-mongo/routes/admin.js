const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course} = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
   const {username,password} = req.body;
   const adminExist = await Admin.findOne({username});
   if(adminExist){
    res.status(404).json({msg : "admin already exisit"})
   }else{
    const admin = await Admin.create({username,password})
    await admin.save()
    res.status(200).json({msg : "admin succesfuly created"})
   } 

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const username = req.body.username
    const {title,description,price,image} = req.body;
    const course =  Course.create({
        id : generateUniqueId(),
        title, 
        description,
        price,
        image,
        createdBy : {username}

    })
    await course.save()
    res.json({msg : "Course created successfully"})

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const username = req.headers.username;
    const courses = await Course.find({createdBy : username});
    res.status(202).json({ courses })
});

module.exports = router;