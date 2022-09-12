/** @type {import('./$types').LayoutServerLoad} */
export async function load ({ fetch }) {
  const sveltePage = fetch('https://kit.svelte.dev')
  console.log('back end sveltePage', sveltePage)

  return {
    status: 200,
    message: 'Good connection '
  }
}
