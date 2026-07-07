<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M6.563 8H5.035a3.5 3.5 0 0 1 .662-1.596l1.08 1.08q-.142.24-.214.516m.921-1.223-1.08-1.08A3.5 3.5 0 0 1 8 5.035v1.528q-.277.072-.516.214M9 6.563V5.035a3.5 3.5 0 0 1 1.596.662l-1.08 1.08A2 2 0 0 0 9 6.563m1.223.921 1.08-1.08c.343.458.577 1.003.662 1.596h-1.528a2 2 0 0 0-.214-.516M10.437 9h1.528a3.5 3.5 0 0 1-.662 1.596l-1.08-1.08q.142-.24.214-.516m-.921 1.223 1.08 1.08A3.5 3.5 0 0 1 9 11.965v-1.528q.277-.072.516-.214M8 10.437v1.528a3.5 3.5 0 0 1-1.596-.662l1.08-1.08q.24.142.516.214m-1.223-.921-1.08 1.08A3.5 3.5 0 0 1 5.035 9h1.528q.072.277.214.516M7.5 8.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
  <path d="M2.5 1A1.5 1.5 0 0 0 1 2.5V3H.5a.5.5 0 0 0 0 1H1v4H.5a.5.5 0 0 0 0 1H1v4H.5a.5.5 0 0 0 0 1H1v.5A1.5 1.5 0 0 0 2.5 16h12a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 1zm6 3a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9"/>
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
    "bi bi-safe2-fill",
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