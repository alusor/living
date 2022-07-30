

export async function getEvenResult (payload) {
  console.log(payload)
  const response = await fetch(`/api/even-result`, {
    method: 'GET',
  })
  const result =  await response.json()
  return result
}