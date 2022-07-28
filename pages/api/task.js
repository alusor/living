import nc from 'next-connect'
import dbConnect from '../../lib/db'
import Task from '../../models/task'

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
  const newTask = new Task({
    name: req.body.name,

  })
  await newTask.save()
  console.log(req.body)|

  res.json({ newTask })
})

export default taskHandler