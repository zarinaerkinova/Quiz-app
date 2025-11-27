import Question from '../models/questionModel.js';

export const getQuestions = async (req, res) => {
    try {
        let questions = await Question.find({});
        res.status(200).json(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Server Error' });
    }
}

export const createQuestion = async (req, res) => {
    try {
        let {question, answers, correctAnswer} = req.body;
        let newQuestion = new Question({
            question: question,
            answers: answers,
            correctAnswer: correctAnswer
        });
        await newQuestion.save();
        res.status(201).json({ message: 'Question created successfully' });
    } catch (error) {
        console.error('Error creating question:', error);
        res.status(500).json({ message: 'Server Error' });
    }
}