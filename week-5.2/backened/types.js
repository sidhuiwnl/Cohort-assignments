const zod = require('zod');

const createCard = zod.object({
    name : zod.string(),
    description : zod.string(),
    Interest : zod.string(),
    githublink : zod.string(),
}) 

module.exports ={
    createCard : createCard
}