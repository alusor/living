import nc from 'next-connect'
import dbConnect from '../../lib/db'
import User from '../../models/user'

const taskHandler = nc().get(async (req, res) => {
  try {
    await dbConnect()

    const result = await Task.find({}).lean()
    res.json({ response: result })
  } catch (e) {
    console.error(e)
    res.json({ response: e })
  }
}).post(async (req, res) => {
  await dbConnect()
  console.log(req.body)
  const checkUser = await User.findOne({ username: req.body.username })
  if (checkUser) {
    console.log('here')
    res.json({ user: checkUser })
  } else {
    const newUser = new User({
      username: req.body.username,
    })
    await newUser.save()
    console.log(req.body)|
  
    res.json({ user: newUser })
  }

})

export default taskHandler