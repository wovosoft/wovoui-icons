# Bootstrap Icons

[wovoui-icons](https://github.com/wovosoft/wovoui-icons) are imported
from [Bootstrap 5 icons](https://icons.getbootstrap.com). There are almost 1522 icons.
And in the future, if Bootstrap provides some more icons, those will be available too as soon as possible.

## Getting Started

[DOCUMENTATION](https://wovoui.netlify.app/icons)

Of-course You can use the icons using the provided [methods](https://icons.getbootstrap.com/#install) of [Bootstrap 5](https://icons.getbootstrap.com). For example,

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
```

```scss
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css");
```

```javascript
import "bootstrap-icons"
```

## Installation

### Using NPM

```shell
npm install @wovosoft/wovoui-icons 
```

### Using yarn

```shell
yarn add @wovosoft/wovoui-icons
```

## How to Use

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
