<script>
  import { onMount } from 'svelte'

  export let data

  onMount(async () => {
    const sveltePage = await fetch('https://kit.svelte.dev')
    console.log(sveltePage)
  })
</script>

<p>Minimal page</p>
<p>Data is {JSON.stringify(data)}</p>
