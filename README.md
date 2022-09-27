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
npm login && npm publish access public
```

## How to use the components from an App VueJS

### Run Peeky tests

```
npm test
```

### Install components Vue

```
npm i @playwire/pw-vue-component
```

### Import from Vue App

```
<script setup>
import { Ramp, RampUnit } from '@playwire/pw-vue-component';
</script>
```
