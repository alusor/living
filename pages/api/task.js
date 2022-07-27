import nc from 'next-connect'

const taskHandler = nc().get((req, res) => {
  res.json({ response: 'using next connect' })
})

export default taskHandler