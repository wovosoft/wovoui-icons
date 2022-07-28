import { PropType } from "vue";
import { ColorVariants } from "../types";
export declare const props: {
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
};
export declare const sizeWidth: import("vue").ComputedRef<number>;
export declare const sizeHeight: import("vue").ComputedRef<number>;
//# sourceMappingURL=useSetup.d.ts.map