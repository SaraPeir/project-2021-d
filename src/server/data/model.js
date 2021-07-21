import mongoose from 'mongoose'

const Schema = mongoose.Schema
const collectionName = 'ToDo'

const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
    },

    isDone: {
      type: Boolean,
      required: true,
    },
  },
  // { timestamps: true }
)

export default mongoose.model("Task", taskSchema, collectionName)
