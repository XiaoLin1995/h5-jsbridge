# H5-JSBridge

> Javascript bridge android/ios webview


## Install

You can get it on npm.

```
npm install h5-jsbridge --save
```

## Use

```js
import jsBridge from 'h5-jsbridge'

/**
 *
 * jsBridge.registerHandler(method, callBack(response))
 * @param method {string} funName
 * @return {Object} callback
 */
jsBridge.registerHandler('funName', function (data) {
    console.log(data)
}) 

/**
 *
 * jsBridge.callHandler(method, data, callBack(response))
 * @param method {string} funName
 * @param data {Object} params
 * @return {Object} callback
 */
jsBridge.callHandler('funName', { event: 'click' }, function (data) {
    console.log(data)
})
```
