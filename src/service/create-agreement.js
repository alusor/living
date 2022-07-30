export default async function createAgreement (payload) {
  console.log(payload)
  const response = await fetch('/api/agreement', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })
  const result =  await response.json()
  return result
}