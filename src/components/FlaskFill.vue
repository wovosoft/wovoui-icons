<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M11.5 0a.5.5 0 0 1 0 1H11v5.358l4.497 7.36c.099.162.16.332.192.503l.013.063.008.083q.006.053.007.107l-.003.09q-.001.047-.005.095-.006.053-.017.106l-.016.079q-.012.049-.028.096l-.028.086a1.5 1.5 0 0 1-.17.322 1.5 1.5 0 0 1-.395.394q-.04.028-.082.054-.045.026-.095.049l-.073.035-.09.033q-.05.02-.103.034-.04.01-.08.017-.053.012-.108.021l-.006.002-.202.013H1.783l-.214-.015a1.503 1.503 0 0 1-1.066-2.268L5 6.359V1h-.5a.499.499 0 0 1-.354-.854A.5.5 0 0 1 4.5 0zm.5 12a.5.5 0 0 0 0 1h1.885l-.61-1zm-1-2a.5.5 0 0 0 0 1h1.664l-.612-1zm-1-2a.5.5 0 0 0 0 1h1.441l-.61-1zM9 6a.5.5 0 0 0 0 1h1.22l-.147-.24A.5.5 0 0 1 10 6.5V6zm0-2a.5.5 0 0 0 0 1h1V4zm0-2a.5.5 0 0 0 0 1h1V2z"/>
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
    "bi bi-flask-fill",
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