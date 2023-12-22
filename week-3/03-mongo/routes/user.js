const { Router, json } = require("express");
const router = Router();
import {User,Course} from '../db/index'
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    try {
        const {username,password} = req.body;
        let userExist = await User.findOne({username})
        if(userExist){
            res.status(400).json({msg : "username already exist"})
            
        }else{
            const user = await User.create({username,password});
            await user.save()
            res.json({msg : "User created successfull"})
            
        }
       
    }catch(error){
        res.json({"msg" : error.message})
    }

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const courses = await Course.find();
        res.status(200).json({courses})

    } catch (error) {
        res.json({error})
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    try {
        const courseId = req.params.courseId;
        const findCourse = await Course.findOne({id : courseId})
        const updateUser = await User.findOneAndUpdate(
        {username : JSON.parse(re.headers.username)},
        {$push : {purchasedCourse : findCourse}}
    )
    res.json({message: 'Course Purchased Succesfully'});
    } catch (error) {
        res.json({"msg" : error.message})
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const findUser = await User.findOne({username : JSON.parse(req.headers.credentials).username});
        await findUser.populate('purchasedCourses');
        res.json({purchasedCourses: findUser.purchasedCourses});
    } catch (error) {
        res.json({"error": error.message});
        
    }


});
