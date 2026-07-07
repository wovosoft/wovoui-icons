import { defineComponent, h } from 'vue'
import type { ColorVariants } from '../types'

export default /*@__PURE__*/defineComponent({
  name: 'Bi',
  props: {
    icon: { type: String, default: null },
    variant: { type: String as () => ColorVariants | null, default: null },
    bgVariant: { type: String as () => ColorVariants | null, default: null },
    spin: { type: Boolean, default: false },
  },
  setup(props) {
    return () => h('i', {
      class: [
        'bi',
        props.icon ? `bi-${props.icon}` : null,
        {
          [`text-${props.variant}`]: props.variant,
          [`bg-${props.bgVariant}`]: props.bgVariant,
          'spin-icon': props.spin,
        },
      ],
    })
  },
})
