const { Router } = require("express");
const { Admin } = require('../db/index');
const generateUniqueId = require('../utils');
const adminMiddleware = require("../middleware/admin");
const router = Router();






// Admin Routes
router.post('/admin/signup', async(req, res) => {
    // Implement admin signup logic
    
    let  username = req.body.username
    let  password = req.body.password
        const adminExist = await Admin.findOne({username})
        if(!adminExist){
            const admin = await  Admin.create({
                id : generateUniqueId(),
                username,
                password 
            })
            await admin.save()
        }else{
            res.json({msg : "user aldready exist"})
        }
    
});

router.post('admin/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;