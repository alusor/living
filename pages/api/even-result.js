import nc from 'next-connect'
import dbConnect from '../../lib/db'
import Agreement from '../../models/agreement'

const taskHandler = nc().get(async (req, res) => {
  try {
    await dbConnect()
    const result = await Agreement.find({}).lean()
    const meassure = result.reduce((prev, current) =>{
      console.log(current)
      if (!Object.hasOwnProperty(prev[current.responsible])) {
        console.log('here first')
        prev[current.responsible] = current.effort / current.importance
      } else {
        prev[current.responsible] = current.effort / current.importance + prev[current.responsible]
      }
      return prev;
    }, {
      
    })
    
    res.json({ response: meassure })
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