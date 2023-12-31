const mongoose = require('mongoose');

// Connect to MongoDB

    mongoose.connect('mongodb+srv://sidharthinfernal:Seemasidhu999@cluster0.sv727p9.mongodb.net/ClassApp')
    .then(() => {
console.log("successfully connected")        
    }).catch((err) => {
        console.log(err)
    });



    const AdminSchema = new mongoose.Schema({
        // Schema definition here
        username: String,
        password: String,
    });
    
    const UserSchema = new mongoose.Schema({
        // Schema definition here
        username: String,
        password: String,
        purchasedCourses: [
            {
              type: mongoose.Types.ObjectId,
              ref: 'Course',
            },
        ],
    });
    
    const CourseSchema = new mongoose.Schema({
        // Schema definition here
        title: String,
        description: String,
        price: Number,
        imageLink: String,
    });
    
    const Admin = mongoose.model('Admin', AdminSchema);
    const User = mongoose.model('User', UserSchema);
    const Course = mongoose.model('Course', CourseSchema);
    
    module.exports = {
        Admin,
        User,
        Course
    }