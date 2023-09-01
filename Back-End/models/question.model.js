const mongoose = require("mongoose");


const questionSchema = mongoose.Schema({
    userId : {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    }, 
    answer: {
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    }
})

const QuestionModel = mongoose.model("questionanswer" , questionSchema);

module.exports ={
    QuestionModel
}