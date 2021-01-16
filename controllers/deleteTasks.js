import Tasks from '../model/Tasks';


const delTasks = async(req, res) => {
    try{
        await Tasks.deleteOne({_id: req.params._id});
        res.status(200).json({
            status:200,
            msg:'Task Deleted'
        })
    }catch(err){
        res.status(500).json({
            status:500,
            err:'server error'
        })
    }
}
export default delTasks;