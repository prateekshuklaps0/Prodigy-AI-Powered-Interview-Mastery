const { QuestionModel } = require('../models/question.model');
require('dotenv').config();
require('isomorphic-fetch');

const question = async (req, res)=>{
    try {
        let {subject} = req.body;
        let response = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: "POST",
            headers:{
                "Authorization": `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content:`Generate an question on the following subject: ${subject}`}],
                max_tokens:100
            })
        });
        response = await response.json();
      //  const data = response.choices[0].message.content;
        res.status(200).send({question: response});
    } catch (error) {
        console.log(error)
    }
}

const answerFeedback = async(req,res)=>{
    try {
        const { question , answer ,subject } = req.body;
        const prompt = `Q: ${question}\nA: ${answer}\nFeedback:`;
        let response = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: "POST",
            headers:{
                "Authorization": `Bearer ${process.env.API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    { role: "system", content: "You are a helpful assistant." },
                    { role: "user", content: prompt }
                  ],
                max_tokens:100
            })
        });
        response = await response.json();
        const data = response.choices[0].message.content;
        const storefeedback =  new QuestionModel({userId:1 , question,answer,subject,feedback:data});
        await storefeedback.save();
        res.status(200).send(data);
    } catch (error) {
        
    }
}

const history = async(req, res)=>{
    try{
        console.log(req.body);
        const {subject, userId} = req.body;
        let list = await QuestionModel.aggregate([{$match: {subject,userId}},{$project:{ question: 1, answer: 1, feedback: 1, _id: 0}}])
        res.status(200).send(list);
    }catch(err){
        res.status(500).send({msg: err.message});
    }
}

module.exports = {
    history, answerFeedback, question
}
