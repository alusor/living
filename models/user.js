import mongoose from 'mongoose'

const UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
})

export default mongoose.models.User || mongoose.model('User', UserSchema)