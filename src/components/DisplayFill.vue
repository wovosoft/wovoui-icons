<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M6 12c0 .667-.083 1.167-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75c-.167-.333-.25-.833-.25-1.5h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h4z"/>
</svg>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import {ColorVariants} from "../types";

const props = defineProps({
    width: {
        type: [Number, String] as PropType<number | string>,
        default: () => 16
    },
    height: {
        type: [Number, String] as PropType<number | string>,
        default: () => 16
    },
    size: {
        type: Number as PropType<number>,
        default: () => 1
    },
    variant: {
        type: String as PropType<ColorVariants>,
        default: null
    },
    bgVariant: {
        type: String as PropType<ColorVariants>,
        default: null
    },
    fill: {
        type: String as PropType<string>,
        default: () => "currentColor"
    },
    spin: {
        type: Boolean as PropType<boolean>,
        default: false
    }
});
const sizeWidth = computed(() => Number(props.width) * Number(props.size));
const sizeHeight = computed(() => Number(props.height) * Number(props.size));
const classes = computed(() => [
    "bi bi-display-fill",
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