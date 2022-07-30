import mongoose from 'mongoose'

const AgreementSchema = new mongoose.Schema({
  title: String,
  responsible: mongoose.Types.ObjectId,
  importance: Number,
  effort: Number,
},{
  timestamps: true
})

export default mongoose.models.Agreement || mongoose.model('Agreement', AgreementSchema)