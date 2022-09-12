<script>
import { page } from '$app/stores'
</script>

<p>This is an error page. You should expect to see this.</p>
<p>Error is {$page.status} {$page.error.message}</p>