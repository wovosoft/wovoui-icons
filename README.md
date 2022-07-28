# Bootstrap Icons

[wovoui-icons](https://github.com/wovosoft/wovoui-icons) are imported
from [Bootstrap 5 icons](https://icons.getbootstrap.com). There are more than 1800 icons.
And in the future, if Bootstrap provides some more icons, those will be available too as soon as possible.

## Getting Started

[DOCUMENTATION](https://wovoui.netlify.app/icons)

## Installation

### Using NPM

```shell
npm install @wovosoft/wovoui-icons 
```

### Using yarn

```shell
yarn add @wovosoft/wovoui-icons
```

## Using Icons as Vue Component

Icon Components use SVGs provided by bootstrap-icons. So, importing bootstrap-icon style is optional.

```vue

<template>
    <Activity :size="5"/>
    <Alarm :size="5"/>
</template>
<script>
import {Activity, Alarm} from "@wovosoft/wovoui-icons";

export default {
    components: {Activity, Alarm}
}
</script>
```

## Using Icons by CSS

```html

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
```

```scss
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
```

```javascript
import "bootstrap-icons"
```

```vue

<template>
    <Bi icon="alarm"/>
</template>
<script>
import {Bi} from "@wovosoft/wovoui-icons";

export default {
    components: {Bi}
}
</script>
``` 