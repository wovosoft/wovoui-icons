<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M7.5 1.906v.938h1v-.938h-1zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938h-1zM1.906 8.5h.938v-1h-.938v1zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938v1zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5h.938zm.937 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zm1.875 0h.938v-1h-.938v1zM7.5 9.406v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1zm0 1.875v.938h1v-.938h-1z"/>
  <path d="M0 0v16h16V0H0zm1 1h14v14H1V1z"/>
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
    "bi bi-border-outer",
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