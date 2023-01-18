import App from "./containers/App.svelte";

const app = new App({
    target: document.querySelector("main"), // Donde se va a empujar la app.
});

export default app;