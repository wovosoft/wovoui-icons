<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-.5 12.25V12h1v3.25a.75.75 0 0 0 1.5 0V12h1l-1-5v-.215a.285.285 0 0 1 .56-.078l.793 2.777a.711.711 0 1 0 1.364-.405l-1.065-3.461A3 3 0 0 0 8.784 3.5H7.216a3 3 0 0 0-2.868 2.118L3.283 9.079a.711.711 0 1 0 1.365.405l.793-2.777a.285.285 0 0 1 .56.078V7l-1 5h1v3.25a.75.75 0 0 0 1.5 0Z"/>
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
    "bi bi-person-standing-dress",
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