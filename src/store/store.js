import {writable} from "svelte/store";

export const likeCount = writable(0); // store que vamos a poder compartir entre componentes.