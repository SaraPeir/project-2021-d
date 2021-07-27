import Task from './model'

export default {
  tasks: async () => {
    try {
      const tasksFetched = await Task.find({})
      return tasksFetched.map(task => {
        return {
          ...task._doc,
          _id: task.id,
          // createdAt: new Date(article._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  editTask: async args => {
    try {
      const { id } = args
      const taskToChange = await Task.findById({_id: id});

      return {
        ...taskToChange._doc,
        _id: taskToChange.id,
        isDone: !taskToChange.isDone
        // createdAt: new Date(article._doc.createdAt).toISOString(),
      }
    } catch (error) {
      throw error
    }
  },

  createTask: async args => {
    try {
      const { task, isDone } = args.task
      const taskClass = new Task({
        task,
        isDone,
      })
      const newTask = await taskClass.save()
      return { ...newTask._doc, _id: newTask.id }
    } catch (error) {
      throw error
    }
  },

  deleteTask: async args => {
    try {
      const { id } = args
      const taskToDelete = await Task.findOneAndDelete({_id: id});

      return taskToDelete
    } catch (error) {
      throw error
    }
  },
}

