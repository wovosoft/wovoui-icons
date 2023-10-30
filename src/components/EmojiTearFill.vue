<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.5 3.5a.5.5 0 0 0 .5.5c.838 0 1.65.416 2.053 1.224a.5.5 0 1 0 .894-.448C12.351 3.584 11.162 3 10 3a.5.5 0 0 0-.5.5ZM7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5ZM4.5 13c.828 0 1.5-.746 1.5-1.667 0-.706-.882-2.29-1.294-2.99a.238.238 0 0 0-.412 0C3.882 9.044 3 10.628 3 11.334 3 12.253 3.672 13 4.5 13ZM8 11.197c.916 0 1.607.408 2.25.826.212.138.424-.069.282-.277-.564-.83-1.558-2.049-2.532-2.049-.53 0-1.066.361-1.536.824.083.179.162.36.232.535.045.115.092.241.135.373A3.1 3.1 0 0 1 8 11.197ZM10 8c.552 0 1-.672 1-1.5S10.552 5 10 5s-1 .672-1 1.5S9.448 8 10 8ZM6.5 3c-1.162 0-2.35.584-2.947 1.776a.5.5 0 1 0 .894.448C4.851 4.416 5.662 4 6.5 4a.5.5 0 0 0 0-1Z"/>
</svg>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import type {ColorVariants} from "../types";

type IconProps = {
    width?: number | string | null;
    height?: number | string | null;
    size?: number | null;
    variant?: ColorVariants | null;
    bgVariant?: ColorVariants | null;
    fill?: string;
    spin?: boolean;

}

const props = withDefaults(defineProps<IconProps>(), {
    width: () => 16,
    height: () => 16,
    size: () => 1,
    fill: () => 'currentColor',
    spin: () => false,
})


const sizeWidth = computed(() => Number(props.width) * Number(props.size));
const sizeHeight = computed(() => Number(props.height) * Number(props.size));
const classes = computed(() => [
    "bi bi-emoji-tear-fill",
    {
        ["text-" + props.variant]: props.variant,
        ["bg-" + props.bgVariant]: props.bgVariant,
        "spin-icon": props.spin
    }
]);
</script>

<style>
@keyframes spin-animation {
    to {
        transform: rotate(360deg) /* rtl:ignore */;
    }
}

.spin-icon {
    animation: 0.75s linear infinite spin-animation;
}
</style>