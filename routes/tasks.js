import express from 'express';
import addTask from '../controllers/addTasks';
import allTasks from '../controllers/listTasks';


const router = express.Router();

router.post('/addTask', addTask);
router.get('/allTask', allTasks);


export default router;
