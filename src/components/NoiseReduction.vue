<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1 1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1.5-1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1-1a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-3 5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm.5-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm1-1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 12.83-3.875.5.5 0 1 0 .15.235c.131.214.251.437.359.667a.5.5 0 1 0 .359.932c.133.438.225.894.27 1.364a.5.5 0 1 0 .021.282 7.096 7.096 0 0 1-.091 1.592.5.5 0 1 0-.172.75 6.95 6.95 0 0 1-.418 1.091.5.5 0 0 0-.3.555 7.056 7.056 0 0 1-.296.454.499.499 0 0 0-.712.453c0 .111.036.214.098.297a6.99 6.99 0 0 1-.3.3.5.5 0 0 0-.75.614 7.056 7.056 0 0 1-.455.298.503.503 0 0 0-.555.3 6.95 6.95 0 0 1-1.092.417.5.5 0 1 0-.749.172 7.04 7.04 0 0 1-1.592.091.5.5 0 1 0-.282-.021 6.971 6.971 0 0 1-1.364-.27A.498.498 0 0 0 5.5 14a.5.5 0 0 0-.473.339 6.976 6.976 0 0 1-.668-.36A.499.499 0 0 0 5 13.5a.5.5 0 1 0-.875.33A6.993 6.993 0 0 1 1 8Z"/>
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
    "bi bi-noise-reduction",
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