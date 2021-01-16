import express from 'express';
import addTask from '../controllers/addTasks';
import allTasks from '../controllers/listTasks';
import editTasks from '../controllers/editTasks';
import delTask from '../controllers/deleteTasks';




const router = express.Router();

router.post('/addTask', addTask);
router.get('/allTask', allTasks);
router.patch('/editTask/:_id', editTasks);
router.delete('/delTask/:_id', delTask);




export default router;
