# mobxRN

react native 0.57以上版本集成mobx

1. <br/>
```
yarn add mobx mobx-react
```
2.  <br/>
```
   yarn add @babel/core --dev
   yarn add @babel/plugin-proposal-decorators --dev
   yarn add @babel/plugin-transform-runtime --dev
   yarn add @babel/runtime --dev
```
 <br/>

3.修改babel.config.js文件:
```
{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/transform-runtime", {
      "helpers": true,
      "regenerator": false
    }]
  ]
}
```


