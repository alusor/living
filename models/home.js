import mongoose from 'mongoose'

const HomeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Types.ObjectId,
  },
  members: {
    type: [mongoose.Types.ObjectId]
  },
  homeName: String,
  code: String,
}, {
  timestamps: true
})

export default mongoose.models.Home || mongoose.model('Home', HomeSchema )