import { PropType } from "vue";
import { ColorVariants } from "../types";
export declare const props: Readonly<import("vue").ExtractPropTypes<{
    width: {
        type: PropType<string | number>;
        default: () => 16;
    };
    height: {
        type: PropType<string | number>;
        default: () => 16;
    };
    size: {
        type: PropType<number>;
        default: () => 1;
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
        default: () => "currentColor";
    };
    spin: {
        type: PropType<boolean>;
        default: boolean;
    };
}>>;
export declare const sizeWidth: import("vue").ComputedRef<number>;
export declare const sizeHeight: import("vue").ComputedRef<number>;
//# sourceMappingURL=useSetup.d.ts.map