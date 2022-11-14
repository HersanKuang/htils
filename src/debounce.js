function HXDebounce(callbackFn, delay, immediate = true) {
  // 1.用于记录上一次事件触发的timer
  let timer = null
  let isInvoke = false

  // 2.触发事件时执行的函数
  const _debounce = function(...args) {
    return new Promise((resolve, reject) => {
      try {
        // 2.1.如果再次触发(更多次触发)事件，那么取消上一次的事件
        if (timer) clearTimeout(timer)

        // res保存返回值
        let res = undefined
        // 第一次操作不需要延迟
        if (immediate && !isInvoke) {
          res = callbackFn.apply(this, args)
          resolve(res)
          isInvoke = true
          return
        }

        // 2.2.延迟去执行对应的fn函数(传入的回调函数)
        timer = setTimeout(() => {
          res = callbackFn.apply(this, args)
          resolve(res)
          timer = null
          isInvoke = false
        }, delay)
      } catch (error) {
        reject(error)
      }
    })
  }
  // 3.给_debounce绑定一个取消的函数
  _debounce.cancel = function() {
    if (timer) clearTimeout(timer)
    timer = null
    isInvoke = false
  }
  return _debounce
}

module.exports = HXDebounce
