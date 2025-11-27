import express from 'express';
const router = express.Router();
import { getQuestions, createQuestion } from '../controllers/questionController.js';

router.get('/questions', getQuestions);
router.post('/questions', createQuestion);

export default router;