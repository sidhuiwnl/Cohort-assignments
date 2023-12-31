const mongoose = require('mongoose');

// Connect to MongoDB

mongoose.connect('Mongo URl')
.then(() => {
console.log("successfully connected")        
}).catch((err) => {
    console.log(err)
});

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    id : {type : String, required : true, unique:true},
    username : {type : String, required : true, unique:true},
    password : {type : String, required : true, unique:true}
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    id : {type : String, required : true, unique:true},
    username : {type : String, required : true, unique:true},
    password : {type : String, required : true, unique:true},
    purchasedCourses: [
        {
          type: mongoose.Types.ObjectId,
          ref: 'Course',
        },
    ],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id : {type: String, required: true, unique: true},
    title : {type: String, required: true},
    description : { type: String},
    price : { type: Number, required: true},
    image : {type: String},
   
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}