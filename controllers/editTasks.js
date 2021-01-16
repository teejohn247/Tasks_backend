import Tasks from '../model/Tasks';

const editTasks = async (req, res) => {
  try {
        const records = await Tasks.findOne({_id: req.params._id});
      
        if(!records){
            res.status(404).json({
                status:404,
                error:'No user Found'
            })
            return
        }
        console.log(records)
         records.updateOne({
            task_by: req.body.task_by,
            task_for: req.body.task_for,
            deadline: req.body.deadline,
            label: req.body.label,
            main_task: req.body.main_task
        },    
         records).then(
            () => {
              res.status(200).json({
                task_by: req.body.task_by,
                task_for: req.body.task_for,
                deadline: req.body.deadline,
                label: req.body.label,
                main_task: req.body.main_task
              });
            }
          )     
    }
    catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
};

export default editTasks;