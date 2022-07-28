<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z"/>
</svg>
</template>

<script lang="ts" setup>
import {props as rawProps, sizeWidth, sizeHeight} from "../shared/useSetup";
import {computed} from "vue";

const props = defineProps(rawProps);
const classes = computed(() => [
    "bi bi-fonts",
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