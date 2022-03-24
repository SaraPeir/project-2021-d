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

    body: {
      type: String,
      required: false,
    },
  },
  // { timestamps: true } // tells to mongoose to add a createdAt and updatedAt fields to the schema.
)

export default mongoose.model("Task", taskSchema, collectionName)
