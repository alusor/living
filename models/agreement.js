import mongoose from 'mongoose'

const AgreementSchema = new mongoose.Schema({
  title: String,
  responsible: String,
  importance: Number,
  effort: Number,
  home: mongoose.Types.ObjectId
},{
  timestamps: true
})

export default mongoose.models.Agreement || mongoose.model('Agreement', AgreementSchema)