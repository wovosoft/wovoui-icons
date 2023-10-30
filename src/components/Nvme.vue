<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M1.5 4.5A.5.5 0 0 1 2 4h13.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5.5.5 0 0 0 0 1 .5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5h-1A.5.5 0 0 1 0 11V7.5A.5.5 0 0 1 .5 7h1a.25.25 0 0 0 0-.5h-1A.5.5 0 0 1 0 6V5a.5.5 0 0 1 .5-.5h1Zm1 .5a.5.5 0 0 1-.5.5h-.5a1.25 1.25 0 1 1 0 2.5H1v2.5h1a.5.5 0 0 1 .5.5H15V9.415a1.5 1.5 0 0 1 0-2.83V5H2.5Z"/>
  <path d="M4 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-3ZM5 7v2h1V7H5Zm3-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-3ZM9 7v2h3V7H9Z"/>
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
    "bi bi-nvme",
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