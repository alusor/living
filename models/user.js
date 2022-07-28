import mongoose from 'mongoose'

const UserSchema = new Mongoose.Schema({

})

export default mongoose.models.User || mongoose.model('User', UserSchema)