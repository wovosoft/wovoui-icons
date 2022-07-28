<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
  <path d="M3.5 1h.585A1.498 1.498 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5c0-.175-.03-.344-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1Z"/>
</svg>
</template>

<script lang="ts" setup>
import {props as rawProps, sizeWidth, sizeHeight} from "../shared/useSetup";
import {computed} from "vue";

const props = defineProps(rawProps);
const classes = computed(() => [
    "bi bi-clipboard2-fill",
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