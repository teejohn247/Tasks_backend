import Tasks from '../model/Tasks';


const listTasks = async (req, res) => {
  try {
        const allTasks = await Tasks.find();
        res.status(200).json({
            allTasks
        })
    }
    catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
};

export default listTasks;