/** @type {import('./$types').PageServerLoad} */
export async function load ({ fetch }) {
  const sveltePage = fetch('https://kit.svelte.dev')
  console.log('server sveltePage', sveltePage)

  return {
    status: 200,
    message: 'Good connection '
  }
}
