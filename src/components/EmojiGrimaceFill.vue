<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="sizeWidth" :height="sizeHeight" :fill="fill" :class="classes" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7 6.25C7 5.56 6.552 5 6 5s-1 .56-1 1.25.448 1.25 1 1.25 1-.56 1-1.25Zm3 1.25c.552 0 1-.56 1-1.25S10.552 5 10 5s-1 .56-1 1.25.448 1.25 1 1.25Zm1.5 4.5a1.5 1.5 0 0 0 1.48-1.25v-.003a1.512 1.512 0 0 0 0-.497A1.5 1.5 0 0 0 11.5 9h-7a1.5 1.5 0 0 0-1.48 1.25v.003a1.51 1.51 0 0 0 0 .497A1.5 1.5 0 0 0 4.5 12h7Zm-7.969-1.25a1 1 0 0 0 .969.75h.25v-.75H3.531Zm8.938 0a1 1 0 0 1-.969.75h-.25v-.75h1.219ZM11.5 9.5a1 1 0 0 1 .969.75H11.25V9.5h.25Zm-7.969.75A1 1 0 0 1 4.5 9.5h.25v.75H3.531ZM5.25 11.5h1v-.75h-1v.75Zm2.5 0h-1v-.75h1v.75Zm1.5 0h-1v-.75h1v.75Zm1.5 0h-1v-.75h1v.75Zm-1-2h1v.75h-1V9.5Zm-1.5 0h1v.75h-1V9.5Zm-1.5 0h1v.75h-1V9.5Zm-1.5 0h1v.75h-1V9.5Z"/>
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
    "bi bi-emoji-grimace-fill",
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