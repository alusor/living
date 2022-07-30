export async function createHome (payload) {
  console.log(payload)
  const response = await fetch('/api/home', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })
  const result =  await response.json()
  return result
}

export async function getHomes (payload) {
  console.log(payload)
  const response = await fetch(`/api/home?member=${payload._id}`, {
    method: 'GET',
  })
  const result =  await response.json()
  return result
}

export async function updateHome (payload) {
  console.log(payload)
  const response = await fetch('/api/home', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  })
  const result =  await response.json()
  return result
}