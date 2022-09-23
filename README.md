# Ramp.js

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Demo Setup

```sh
npm install
```

### Compile and Hot-Reload for Demo

```sh
npm run dev
```

### Compile and Minify for Publishing

```sh
npm run build
```

### Publish component in registry

```sh
npm run release
```

- Add all newly edited files
- Create a tag with the latest version of our project
- Create a changelod.md with the recent commits we’ve had
- The regular git push you may already be used to, but the –follow-tags part will ensure it pushes all newly created tags attached to the current commit.
- It will publish your latest version of the package to the registry github.

## How to use the components from an App VueJS

### Install components Vue

```
npm i @intergi/pw-vue-component
```

### Import from Vue App

```
<script setup>
import { Ramp, RampUnit } from '@intergi/pw-vue-component';
</script>
```
