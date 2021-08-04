import Task from './model'

export default {
  task: async args => {
    try {
      const { id } = args;
      const taskFetched = await Task.findById({_id: id});
      return taskFetched
    } catch (error) {
      throw error
    }
  },
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
      const { id, isDone, body, task } = args.task
      const taskToChange = await Task.findById({_id: id});

      taskToChange.isDone = isDone
      taskToChange.body = body
      taskToChange.task = task

      await taskToChange.save()

      return {
        ...taskToChange._doc,
      }
    } catch (error) {
      throw error
    }
  },

  createTask: async args => {
    try {
      const { task, isDone, body } = args.task
      const taskClass = new Task({
        task,
        isDone,
        body
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

