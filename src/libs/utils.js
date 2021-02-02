export function getBrowerInfo() {
  const ua = window.navigator.userAgent.toLowerCase()
  const isAndroid = /Android/i.test(ua)
  const isIOS = /iPhone|iPad|iPod/i.test(ua)

  return { isIOS, isAndroid }
}

export function isJSON(str) {
  if (typeof str === 'string') {
    try {
      JSON.parse(str)
      return true
    } catch (e) {
      return false
    }
  }
  return false
}
