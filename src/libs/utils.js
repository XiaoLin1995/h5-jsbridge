export function getDeviceSystem() {
  const ua = window.navigator.userAgent
  const reg = {
    iOS: /(iPhone|iPad|iPod|iOS)/i,
    android: /(Android)/i,
    winPhone: /(?:Windows Phone)/i,
    symbianOS: /(?:SymbianOS)/i
  }
  if (reg.iOS.test(ua)) return 'iOS'
  if (reg.android.test(ua)) return 'Android'
  if (reg.winPhone.test(ua)) return 'Windows Phone)'
  if (reg.symbianOS.test(ua)) return 'Symbian)'

  return 'PC'
}
