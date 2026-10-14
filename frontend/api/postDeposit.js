const API_URL = 'http://localhost:3000/api/v0'

export async function postDeposit(coin, amount) {
  const response = await fetch(`${API_URL}/deposit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      coin,
      amount,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Ошибка пополнения баланса')
  }
  return data
}
