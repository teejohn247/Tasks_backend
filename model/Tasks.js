import mongoose from 'mongoose';
import moment from 'moment';

const TasksSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    task_by:{
        type:String,
        required:true,
    },
    task_for:{
        type:String,
        required:true
    },
    deadline:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default:moment().format('YYYY-MM-DD')
    },
});

const Tasks = mongoose.model("tasks", TasksSchema);
export default Tasks;