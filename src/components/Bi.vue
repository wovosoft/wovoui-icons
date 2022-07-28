<template>
    <i :class="classes"></i>
</template>

<script lang="ts" setup>
import {computed, PropType} from "vue";
import {ColorVariants, Icons} from "../types";

const props = defineProps({
    icon: {
        type: String as PropType<Icons>,
        default: null
    },
    variant: {
        type: String as PropType<ColorVariants>,
        default: null
    },
    bgVariant: {
        type: String as PropType<ColorVariants>,
        default: null
    },
    spin: {
        type: Boolean as PropType<boolean>,
        default: false
    }
});

const classes = computed(() => ({
    ["bi-" + props.icon]: props.icon,
    ["text-" + props.variant]: props.variant,
    ["bg-" + props.bgVariant]: props.bgVariant,
    "spin-icon": props.spin
}));
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