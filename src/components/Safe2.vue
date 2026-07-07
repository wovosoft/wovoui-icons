<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h12A1.5 1.5 0 0 1 16 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 1 14.5V14H.5a.5.5 0 0 1 0-1H1V9H.5a.5.5 0 0 1 0-1H1V4H.5a.5.5 0 0 1 0-1H1zM2.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5z"/>
  <path d="M5.035 8h1.528q.072-.277.214-.516l-1.08-1.08A3.5 3.5 0 0 0 5.035 8m1.369-2.303 1.08 1.08q.24-.142.516-.214V5.035a3.5 3.5 0 0 0-1.596.662M9 5.035v1.528q.277.072.516.214l1.08-1.08A3.5 3.5 0 0 0 9 5.035m2.303 1.369-1.08 1.08q.142.24.214.516h1.528a3.5 3.5 0 0 0-.662-1.596M11.965 9h-1.528q-.072.277-.214.516l1.08 1.08A3.5 3.5 0 0 0 11.965 9m-1.369 2.303-1.08-1.08q-.24.142-.516.214v1.528a3.5 3.5 0 0 0 1.596-.662M8 11.965v-1.528a2 2 0 0 1-.516-.214l-1.08 1.08A3.5 3.5 0 0 0 8 11.965m-2.303-1.369 1.08-1.08A2 2 0 0 1 6.563 9H5.035c.085.593.319 1.138.662 1.596M4 8.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0m4.5-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
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
    "bi bi-safe2",
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