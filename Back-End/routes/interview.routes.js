const express = require('express');
const { history, answerFeedback, question } = require('../controllers/interview.controllers');

const interviewRouter = express.Router();

interviewRouter.post('/questions', question)

interviewRouter.post("/answer" , answerFeedback)

interviewRouter.post('/history', history)

module.exports = interviewRouter;