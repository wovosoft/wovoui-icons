/**
 * Not used anywhere, but it is a helper function to create a Vue component for an icon.
 * Keeping this function here for future use, in case we want to create a Vue component for an icon.
 * 
 * @param svgContent - The SVG content of the icon.
 * @param originalClass - The original class name of the icon.
 * @returns A Vue component that renders the icon.
 */

import { computed, defineComponent, h } from 'vue'
import type { ColorVariants } from './types'

export function createIcon(svgContent: string, originalClass: string) {
    return defineComponent({
        name: originalClass,
        props: {
            width:     { type: [Number, String], default: 16 },
            height:    { type: [Number, String], default: 16 },
            size:      { type: Number, default: 1 },
            variant:   { type: String as () => ColorVariants, default: null },
            bgVariant: { type: String as () => ColorVariants, default: null },
            fill:      { type: String, default: 'currentColor' },
            spin:      { type: Boolean, default: false },
        },
        setup(props) {
            const sizeWidth  = computed(() => Number(props.width)  * Number(props.size))
            const sizeHeight = computed(() => Number(props.height) * Number(props.size))
            const classes    = computed(() => [
                `bi ${originalClass}`,
                {
                    [`text-${props.variant}`]:    props.variant,
                    [`bg-${props.bgVariant}`]:    props.bgVariant,
                    'spin-icon':                  props.spin,
                }
            ])

            return () => h('svg', {
                xmlns:   'http://www.w3.org/2000/svg',
                width:   sizeWidth.value,
                height:  sizeHeight.value,
                fill:    props.fill,
                class:   classes.value,
                innerHTML: svgContent,  // inner paths/shapes only
            })
        }
    })
}