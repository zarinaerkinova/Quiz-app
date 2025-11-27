import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required:true,
    },
    answers: {
        type: Array,
        required:true,
    },
    correctAnswer: {
        type: String,
        required:true,
    },
})

const Question = mongoose.model('Question', QuestionSchema);
export default Question;