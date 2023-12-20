const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const z = require('zod');

const mySchema = z.object({
    username : z.string().email(),
    password : z.string().min(6)

})

function signJwt(username, password) {
    const validate = mySchema.safeParse({username,password})
    if(validate.success){
        var token = jwt.sign({username : username},jwtPassword)
        return token
        
    } else {
        return null
    }
    
    
    
}




function verifyJwt(token) {
    
    try {
        var verify = jwt.verify(token,jwtPassword);
        return true
      } catch (error) {
        return false
      }
      
    
}



function decodeJwt(token) {
    var decoded = jwt.decode(token,jwtPassword)
    if(decoded){
        return true
    }else{
        return false
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}
