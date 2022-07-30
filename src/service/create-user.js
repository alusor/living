export default async function createUser (payload) {
  console.log(payload)
  const response = await fetch('/api/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })
  const result =  await response.json()
  return result
}