/** @type {import('./$types').PageLoad} */
export async function load ({ fetch }) {
  const sveltePage = fetch('https://kit.svelte.dev')
  console.log('loader sveltePage', sveltePage)

  return {
    status: 200,
    message: 'Good connection '
  }
}
