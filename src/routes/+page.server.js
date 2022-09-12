/** @type {import('./$types').PageServerLoad} */
export async function load () {
  return {
    status: 200,
    message: 'Good connection'
  }
}
