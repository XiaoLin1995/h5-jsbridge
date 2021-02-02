import { getBrowerInfo, isJSON } from './libs/utils'
import connectIOSBridge from './jsBridge_ios'
import connectAndroidBridge from './jsBridge_android'

const { isAndroid, isIOS } = getBrowerInfo()

/**
 * 函数描述：js注册方法给app调用
 *
 * jsBridge.registerHandler(name, callback(data, callback))
 * @param {String} name 方法名
 * @param {Function} callback 回调函数
 * @param {Any} callback.data app返回的数据
 * @param {Function} callback.callback app返回的回调
 * @return
 */
function registerHandler(name, callback) {
  const connectBridge = (bridge) => {
    bridge.registerHandler(name, callback)
  }
  if (isIOS) {
    connectIOSBridge(connectBridge)
  } else if (isAndroid) {
    connectAndroidBridge(connectBridge)
  }
}

/**
 * 函数描述：js调用app方法
 *
 * jsBridge.callHandler(name, params, callback)
 * @param {String} name 方法名
 * @param {Object} params 参数
 * @param {Function} callback 回调函数
 * @return
 */
function callHandler(name, params, callback) {
  const connectBridge = (bridge) => {
    bridge.callHandler(name, params, (data) => {
      if (isJSON(data)) data = JSON.parse(data)
      if (typeof callback === 'function') callback(data)
    })
  }
  if (isIOS) {
    connectIOSBridge(connectBridge)
  } else if (isAndroid) {
    connectAndroidBridge(connectBridge)
  }
}

function onInit() {
  if (isAndroid) {
     connectAndroidBridge((bridge) => {
      bridge.init()
     })
   }
 }
onInit()

const JsBridge = {
  registerHandler,
  callHandler
}
window.JsBridge = JsBridge
export default JsBridge
