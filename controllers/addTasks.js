import Tasks from '../model/Tasks';


const tasks = async (req, res) => {
    try {
        const { task_by, task_for, deadline, label, main_task } = req.body;

        let task = new Tasks({
            task_by,
            task_for,
            deadline,
            label,
            main_task
        });
        console.log(task);

        await task.save();
        res.status(201).json({
            status: 201,
            task
        })
    } catch (err) {
        res.status(500).json({
            status: 500,
            err: 'server error'
        })

    }
}

export default tasks;