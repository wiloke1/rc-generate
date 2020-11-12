# rc-generate

React CLI to generate components ( Reactjs + React Native)

[![npm version](https://img.shields.io/npm/v/rc-generate.svg)](https://www.npmjs.com/package/rc-generate)

## Install

**npm**

```bash
npm install rc-generate --save-dev
```

**yarn**

```bash
yarn add rc-generate --dev
```

## Use in project

**package.json**

```js
{
  "scripts": {
    "rcg": "rc-generate"
  },
  // Config with package.json
  "rc-generate": {
    "baseUrl": "src",
    "typescript": true,
    "reactNative": false
  },
}
```

**Config with project -> rc-generate.config.js**

```js
const styles = `
.container {
  color: red;
}
`;
const actions = `
const getTodo = () => {
  return {
    type: 'GET_TODO',
    payload: {}
  }
}
`;
const reducers = ``;
const sagas = ``;
const thunks = ``;

const config = {
  baseUrl: 'src',
  typescript: true,
  reactNative: false,
  templates: {
    styles,
    actions,
    reducers,
    sagas,
    thunks
  }
}
module.exports = config;
```

**cli:**

```bash
npm run rcg --style scss --redux saga --component:name components/Button --component:type class
```

**or:**

```bash
yarn rcg --style scss --redux saga --component:name components/Button --component:type class
```

**or npm global**

```bash
npm install rc-generate -g
```

## Use with npx

```bash
npx rc-generate --style scss --redux saga --component:name components/Button
```

## Use with npm global

```bash
rc-generate --style scss --redux saga --component:name components/Button
```

## Options

| Option                      | Type                        | Default    | Description |
| :---------                  | :-------:                   | :-----:    | :----------- |
| -c:type, --component:type   | `function, class`           | `function` | Generate a component type ( example: Button or components/Button) |
| -c:name, --component:name   | `string`                    | -          | Generate a component name  |
| -s, --style                 | `css, scss, react-native`   | -          | Generate a style |
| -r, --redux                 | `thunk, saga`               | -          | Generate a redux state management |
| -V, --version               | -                           | -          | output the version number |
| -h, --help                  | -                           | -          | display help for command |

## License

MIT © [wiloke1](https://github.com/wiloke1)
