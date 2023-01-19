<script>
    import Card from "./Card.svelte";

    export let imgs = [];

</script>

<style>
.TimeLine {
    padding: 4em 0 0 0;
}
</style>

<div class="TimeLine">
    <div class="TimeLine-container">
        {#each imgs as img}
            <Card {...img} />   
        {:else}
            <p>Loading...</p>
        {/each}
    </div>
</div>