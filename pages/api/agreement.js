import nc from 'next-connect'
import dbConnect from '../../lib/db'
import Agreement from '../../models/agreement'

const taskHandler = nc().get(async (req, res) => {
  try {
    await dbConnect()
    const result = await Agreement.find({}).lean()
    res.json({ response: result })
  } catch (e) {
    console.error(e)
    res.json({ response: e })
  }
}).post(async (req, res) => {
  await dbConnect()
  const newAgreement = new Agreement({
    ...req.body,
  })
  await newAgreement.save()

  res.json({ newAgreement })
})

export default taskHandler