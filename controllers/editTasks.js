import Tasks from '../model/Tasks';

const editTasks = async (req, res) => {
  try {
        const records = await Tasks.findOne({_id: req.params._id});
      
        if(!records){
            res.status(404).json({
                status:404,
                error:'No Task Found'
            })
            return
        }
        console.log(records)
       await records.updateOne({
            task_by: req.body.task_by,
            task_for: req.body.task_for,
            deadline: req.body.deadline,
            label: req.body.label,
            main_task: req.body.main_task
        },    
         records)
              const allTasks = await Tasks.find();
              res.status(200).json({
               allTasks
              });
            }
    catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
};

export default editTasks;