export type ColorVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type {Icons} from "./names";

export * from "./../index";

declare module "vue" {
    // tells Vue about a custom global property/method
    interface ComponentCustomProperties {

    }

    // tells Vue about a custom component registered globally in the plugin
    interface GlobalComponents {

    }
}
