import * as tokenService from './tokenService'

const baseUrl = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api`

async function getTrendingMovie() {
  try {
    const res = await fetch(`${baseUrl}/trending`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    if(!res.ok) {
      throw new Error ('err fetching trending movie')
    }
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}


export {
  getTrendingMovie,
}