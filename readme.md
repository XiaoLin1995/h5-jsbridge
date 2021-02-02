# H5-JSBridge

> Javascript bridge [android](https://github.com/lzyzsd/JsBridge)/[ios](https://github.com/marcuswestin/WebViewJavascriptBridge) webview

## Install

```
npm install h5-jsbridge --save
```

## Use

```js
import JsBridge from 'h5-jsbridge'

/**
 * 函数描述：js注册方法给app调用
 *
 * JsBridge.registerHandler(name, callback(data, callback))
 * @param {String} name 方法名
 * @param {Function} callback 回调函数
 * @param {Any} callback.data app返回的数据
 * @param {Function} callback.callback app返回的回调
 * @return
 */
JsBridge.registerHandler('funName', function (data, callback) {
  console.log(data)
}) 

/**
 * 函数描述：js调用app方法
 *
 * JsBridge.callHandler(name, params, callback)
 * @param {String} name 方法名
 * @param {Object} params 参数
 * @param {Function} callback 回调函数
 * @return
 */
JsBridge.callHandler('funName', { event: 'click' }, function (data) {
  console.log(data)
})
```
