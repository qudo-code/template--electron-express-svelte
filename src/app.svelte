<h4 class="text-green">sveeeetlte</h4>
<h4 class="text-purple">with expppreessss</h4>
<i>Response from "/api":</i>
<p>{responseMsg}</p>
<h4 class="text-gold">all in electronnnn</h4>
<p>already configured to build for mac + windows</p>

<script>
import { onMount } from "svelte";

let responseMsg = "";

onMount(async () => {
    const response = await fetch("http://localhost:3000/api");

    responseMsg = JSON.stringify(await response.json(), null, 4);
});
</script>