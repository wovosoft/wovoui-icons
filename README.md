# @wovosoft/wovoui-icons

Vue 3 components for Bootstrap Icons, generated from the official Bootstrap Icons package. 

This package is optimized for performance, allowing consumers to include **only the icons they use** in their final bundle, with zero overhead.

---

## Consumer Guide (For Users & Team Members)

### Installation

Install via your package manager of choice:

```bash
# npm
npm install @wovosoft/wovoui-icons

# yarn
yarn add @wovosoft/wovoui-icons

# bun
bun add @wovosoft/wovoui-icons
```

### Usage

#### 1. Import CSS (Required for animations)
To support features like the `spin` prop (animations), import the package stylesheet once in your application entrypoint (e.g., `main.ts` or `App.vue`):

```typescript
import '@wovosoft/wovoui-icons/style.css';
```

#### 2. Import Icons (Fully Tree-Shakable)
You can import icons directly from the root package. Modern bundlers (Vite, Rollup, Webpack) will tree-shake and discard all unused icons automatically:

```vue
<template>
  <div class="d-flex gap-2">
    <!-- Default size (16px) -->
    <Activity />
    
    <!-- Custom size (32px), danger color, and rotating animation -->
    <Alarm :size="2" variant="danger" spin />
  </div>
</template>

<script setup lang="ts">
import { Activity, Alarm } from '@wovosoft/wovoui-icons';
</script>
```

#### 3. Import Specific Components Directly
If your project bundler does not support tree-shaking efficiently, you can import individual components directly to guarantee only those files are bundled:

```vue
<template>
  <Alarm :size="2" variant="warning" />
</template>

<script setup lang="ts">
import Alarm from '@wovosoft/wovoui-icons/components/Alarm';
</script>
```

#### 4. Generic `Bi` Component
If you need to render icons dynamically by class name, you can use the generic `Bi` component.
> [!NOTE]
> The `Bi` component renders a font-class based tag (`<i class="bi bi-...">`) and requires you to have the Bootstrap Icons web font loaded in your project.

```vue
<template>
  <Bi icon="alarm" variant="danger" spin />
</template>

<script setup lang="ts">
import { Bi } from '@wovosoft/wovoui-icons';
</script>
```

### Icon Props

Every icon component supports the following props:

| Prop | Type | Default | Description |
|---|---|---|---|
| `width` | `number \| string` | `16` | SVG width in pixels |
| `height` | `number \| string` | `16` | SVG height in pixels |
| `size` | `number \| string` | `1` | Scaling multiplier applied to width and height |
| `variant` | `string \| null` | `null` | Applies text color variants (e.g., `primary`, `danger`, `success`) |
| `bgVariant` | `string \| null` | `null` | Applies background color variants (e.g., `warning`, `dark`) |
| `fill` | `string` | `"currentColor"` | SVG fill color |
| `spin` | `boolean` | `false` | Enables CSS spin animation |

---

## Developer Guide (For Package Maintainers)

### 1. Install Dependencies

```bash
bun install
```

### 2. Generate Icon Components
To import new icons or update existing ones from the upstream `bootstrap-icons` package:

```bash
bun run generate:icons
```

This script (`src/generate_icons.js`) performs the following tasks:
- Reads SVG icons from `node_modules/bootstrap-icons/icons`.
- Extracts inner SVG paths and writes a corresponding `.ts` component inside `src/components/` using the lightweight `createIcon` helper.
- Regenerates the root index file `src/index.ts` to export all generated components.
- Regenerates typescript naming types in `src/types/names.d.ts`.

### 3. Build & Package
Build the library for distribution:

```bash
bun run build
```

This triggers the following steps:
1. **Bundler Build**: Runs `vite build` (using high-performance Vite 8 / Rolldown). Output is generated into `dist/`.
   - `dist/index.mjs` contains the root library exports.
   - `dist/components/*.mjs` contains compiled individual modules (preserved modules layout for tree-shaking).
2. **Type Generation**: Runs `node src/copyTypes.js` to create declaration files:
   - Copies type declarations for each component in `dist/components/` (naming them matching `[componentName].d.ts`).
   - Copies basic types into `dist/types/`.
   - Generates the root type definition `dist/index.d.ts` without explicit file extensions to ensure standard TypeScript module resolution.

### Codebase Architecture

- [src/createIcon.ts](file:///home/wovosoft/sites/wovoui-icons/src/createIcon.ts) — shared factory used to initialize icon components.
- [src/generate_icons.js](file:///home/wovosoft/sites/wovoui-icons/src/generate_icons.js) — developer generation script.
- [src/copyTypes.js](file:///home/wovosoft/sites/wovoui-icons/src/copyTypes.js) — type file copy and resolver script.
- [src/style.css](file:///home/wovosoft/sites/wovoui-icons/src/style.css) — stylesheet for the `.spin-icon` animation.
