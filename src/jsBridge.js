import { getDeviceSystem } from './libs/utils'
import connectIOSBridge from './jsBridge_ios'
import connectAndroidBridge from './jsBridge_android'

const deviceSystem = getDeviceSystem()

/**
 * 函数描述：webView调用JS事件
 *
 * jsBridge.registerHandler(method, callBack(response))
 * @param method {string} 方法名
 * @return {Object} 回调
 */
function registerHandler(name, callback) {
  if (deviceSystem === 'iOS') {
    connectIOSBridge((bridge) => {
      bridge.registerHandler(name, callback)
    })
  } else if (deviceSystem === 'Android') {
    connectAndroidBridge((bridge) => {
      bridge.registerHandler(name, callback)
    })
  }
}

/**
 * 函数描述：js调用webview事件
 *
 * jsBridge.callHandler(method, data, callBack(response))
 * @param method {string} 方法名
 * @param data {Object} 参数
 * @return {Object} 回调
 */
function callHandler(name, params, callback) {
  if (deviceSystem === 'iOS') {
    connectIOSBridge((bridge) => {
      bridge.callHandler(name, params, callback)
    })
  } else if (deviceSystem === 'Android') {
    connectAndroidBridge((bridge) => {
      bridge.callHandler(name, params, callback)
    })
  }
}

/**
 * android 不先 init，无法触发回调
 */
function onInit() {
  if (deviceSystem === 'Android') {
    connectAndroidBridge((bridge) => {
      bridge.init()
    })
  }
}
onInit()

export default {
  registerHandler,
  callHandler
}
