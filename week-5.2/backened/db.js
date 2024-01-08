const mongoose =  require('mongoose');


mongoose.connect('<MONGO url>');

const cardSchema = mongoose.Schema({
    name: String,
    description: String,
    Interest : String,
    githublink : String
})

const Card = new mongoose.model('Card',cardSchema);

module.exports = {
    Card
}