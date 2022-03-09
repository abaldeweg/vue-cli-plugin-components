# baldeweg/vue-cli-plugin-components

Plugin for @baldeweg/components and VueJS.

## Getting Started

```shell
yarn add @baldeweg/vue-cli-plugin-components --dev
```

## API

Import the api, so you can make use of axios. The auth is automatically included.

```javascript
import { request } from '~b/api'
```

## Locales

The locale files are loaded automatically from `src/locales`.

## Options

Add the following to `vue.config.js` under the `pluginOptions` key.

```json
"components": {
  "title": "test",
  "needsAuth": true
}
```
