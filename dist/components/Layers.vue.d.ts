import { PropType } from "vue";
import { ColorVariants } from "../types";
declare const _sfc_main: import("vue").DefineComponent<{
    width: {
        type: PropType<string | number>;
        default: () => number;
    };
    height: {
        type: PropType<string | number>;
        default: () => number;
    };
    size: {
        type: PropType<number>;
        default: () => number;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    bgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    fill: {
        type: PropType<string>;
        default: () => string;
    };
    spin: {
        type: PropType<boolean>;
        default: boolean;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: PropType<string | number>;
            default: () => number;
        };
        height: {
            type: PropType<string | number>;
            default: () => number;
        };
        size: {
            type: PropType<number>;
            default: () => number;
        };
        variant: {
            type: PropType<ColorVariants>;
            default: any;
        };
        bgVariant: {
            type: PropType<ColorVariants>;
            default: any;
        };
        fill: {
            type: PropType<string>;
            default: () => string;
        };
        spin: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    }>>;
    sizeWidth: import("vue").ComputedRef<number>;
    sizeHeight: import("vue").ComputedRef<number>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | ColorVariants;
        "spin-icon": boolean;
    })[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<string | number>;
        default: () => number;
    };
    height: {
        type: PropType<string | number>;
        default: () => number;
    };
    size: {
        type: PropType<number>;
        default: () => number;
    };
    variant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    bgVariant: {
        type: PropType<ColorVariants>;
        default: any;
    };
    fill: {
        type: PropType<string>;
        default: () => string;
    };
    spin: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>, {
    fill: string;
    width: string | number;
    height: string | number;
    size: number;
    variant: ColorVariants;
    bgVariant: ColorVariants;
    spin: boolean;
}>;
export default _sfc_main;
//# sourceMappingURL=Layers.vue.d.ts.map