import { dev } from '$app/environment'
import { error } from '@sveltejs/kit'

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  if (!event.request.headers.has('some-thing')) {
    event.request.headers.append('some-thing', 'for you')
  }

  return resolve(event)
}

/** @type {import('@sveltejs/kit').HandleError} */
export async function handleError ({ error: err, event }) {
  // Close dangling db connection
  if (dev) {
    console.error('server error', err)
    console.warn('closing dangling connection')
  }

  if (event.locals) { console.log('ok') }

  throw error(500, 'Server error' + err)
}
