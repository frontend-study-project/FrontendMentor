import { API_PREFIX } from '.'

export async function GetShortURL(url) {
  const result = await fetch(`${API_PREFIX}/v1/shorten`, {
    method: 'POST',
    headers: {
      Accept: 'application / json',
    },
    body: JSON.stringify({
      url: url,
    }),
  })

  return result.json()
}
