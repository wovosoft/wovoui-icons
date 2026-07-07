import { computed, defineComponent, h } from 'vue'
import type { ColorVariants } from './types'

export function createIcon(svgInnerHTML: string, iconClass: string) {
  return defineComponent({
    name: iconClass,
    props: {
      width: { type: [Number, String], default: 16 },
      height: { type: [Number, String], default: 16 },
      size: { type: [Number, String], default: 1 },
      variant: { type: String as () => ColorVariants | null, default: null },
      bgVariant: { type: String as () => ColorVariants | null, default: null },
      fill: { type: String, default: 'currentColor' },
      spin: { type: Boolean, default: false },
    },
    setup(props) {
      const sizeWidth = computed(() => Number(props.width) * Number(props.size))
      const sizeHeight = computed(() => Number(props.height) * Number(props.size))

      return () =>
        h('svg', {
          xmlns: 'http://www.w3.org/2000/svg',
          width: sizeWidth.value,
          height: sizeHeight.value,
          viewBox: '0 0 16 16',
          fill: props.fill,
          class: [
            'bi',
            iconClass,
            {
              [`text-${props.variant}`]: props.variant,
              [`bg-${props.bgVariant}`]: props.bgVariant,
              'spin-icon': props.spin,
            },
          ],
          innerHTML: svgInnerHTML,
        })
    },
  })
}
