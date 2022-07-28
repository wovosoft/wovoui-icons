declare const _sfc_main: import("vue").DefineComponent<{
    width: {
        type: import("vue").PropType<string | number>;
        default: () => number;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: () => number;
    };
    size: {
        type: import("vue").PropType<number>;
        default: () => number;
    };
    variant: {
        type: import("vue").PropType<import("../types").ColorVariants>;
        default: any;
    };
    bgVariant: {
        type: import("vue").PropType<import("../types").ColorVariants>;
        default: any;
    };
    fill: {
        type: import("vue").PropType<string>;
        default: () => string;
    };
    spin: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: import("vue").PropType<string | number>;
            default: () => number;
        };
        height: {
            type: import("vue").PropType<string | number>;
            default: () => number;
        };
        size: {
            type: import("vue").PropType<number>;
            default: () => number;
        };
        variant: {
            type: import("vue").PropType<import("../types").ColorVariants>;
            default: any;
        };
        bgVariant: {
            type: import("vue").PropType<import("../types").ColorVariants>;
            default: any;
        };
        fill: {
            type: import("vue").PropType<string>;
            default: () => string;
        };
        spin: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any);
    }>>;
    classes: import("vue").ComputedRef<(string | {
        [x: string]: boolean | import("../types").ColorVariants;
        "spin-icon": boolean;
    })[]>;
    sizeWidth: import("vue").ComputedRef<number>;
    sizeHeight: import("vue").ComputedRef<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: import("vue").PropType<string | number>;
        default: () => number;
    };
    height: {
        type: import("vue").PropType<string | number>;
        default: () => number;
    };
    size: {
        type: import("vue").PropType<number>;
        default: () => number;
    };
    variant: {
        type: import("vue").PropType<import("../types").ColorVariants>;
        default: any;
    };
    bgVariant: {
        type: import("vue").PropType<import("../types").ColorVariants>;
        default: any;
    };
    fill: {
        type: import("vue").PropType<string>;
        default: () => string;
    };
    spin: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    fill: string;
    width: string | number;
    height: string | number;
    size: number;
    variant: import("../types").ColorVariants;
    bgVariant: import("../types").ColorVariants;
    spin: boolean;
}>;
export default _sfc_main;
//# sourceMappingURL=Grid3X3Gap.vue.d.ts.map