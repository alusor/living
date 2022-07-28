import mongoose from 'mongoose'

const AgreementSchema = new mongoose.Schema({

})

export default mongoose.models.Agreement || mongoose.model('Agreement', AgreementSchema)