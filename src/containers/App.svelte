<script>
    import { onMount } from "svelte";
    import Header from "../components/Header.svelte";
    import Main from "../components/Main.svelte";
    import TimeLine from "../components/TimeLine.svelte";
    import Sidebar from "../components/Sidebar.svelte";

    /* Lógica para llamada de una API */
    let data = {};

    const API_CATS = "https://kittygram-api.vercel.app/";

    onMount(async () => {
        const response = await fetch(API_CATS);
        data = await response.json();
        console.log(data);
    });
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

    :global(body) {
        background-color: #fafafa;
        color: rgba(38, 38, 38, 0.7);
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3) {
        margin: 0;
        padding: 0;
    }
</style>

<Header />
<Main>
    <TimeLine posts={data.posts} />
    <Sidebar />
</Main>