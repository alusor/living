import { ObjectID } from 'bson'
import mongoose from 'mongoose'

const TaskSchema = new mongoose.Schema({
  name: {
    /* The name of this task */

    type: String,
    required: [true, 'Please provide a name for this task.'],
  },
  owner: {
    /* The owner of this task */

    type: ObjectID,
  },
  completed: { type: Boolean, default: false }
})

export default mongoose.models.Task || mongoose.model('Task', TaskSchema)