import nc from 'next-connect'
import dbConnect from '../../lib/db'
import Home from '../../models/home'

const taskHandler = nc().get(async (req, res) => {
  try {
    await dbConnect()
    const { query } = req
    const result = await Home.find({ owner: query.member }).lean()
    res.json({ response: result })
  } catch (e) {
    console.error(e)
    res.json({ response: e })
  }
}).post(async (req, res) => {
  await dbConnect()
  const newHome = new Home({
    owner: req.body.owner,
    members: [req.body.owner],
    homeName: req.body.homeName,
  })
  await newHome.save()
  console.log(req.body)

  res.json({ newHome })
}).put(async (req, res) => {
  await dbConnect()
  const currentHome = await Home.findOne({
    _id: req.body.invite
  })
  console.log(currentHome)
  currentHome.members = [...currentHome.members || [], req.body.member]
  await currentHome.save()
  res.json({ currentHome })
})

export default taskHandler