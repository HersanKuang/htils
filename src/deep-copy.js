function isObject(value) {
  const valueType = typeof value
  return (value !== null) && (valueType === "object" || valueType === "function")
}

function HXDeepCopy(originValue, selfMap = new WeakMap()) {

  // 0.如果是symbol类型，创建一个新得Symbol
  if (typeof originValue === "symbol")
    return Symbol(originValue.description)

  // 1.如果是原始类型，直接返回
  if (!isObject(originValue)) return originValue

  // 2.如果是set/map类型
  if (originValue instanceof Set) {
    const newSet = new Set()
    for (const setItem of originValue) {
      newSet.add(HXDeepCopy(setItem))
    }
    return newSet
  }
  if (originValue instanceof Map) {
    const newMap = new Map()
    for (const mapItem of originValue) {
      newMap.set(mapItem[0], mapItem[1])
    }
    return newMap
  }

  // 3.如果是function类型，不需要进行深拷贝
  if (typeof originValue === "function") return originValue

  // 4.如果是对象类型，才需要创建对象
  if (selfMap.get(originValue))
    return selfMap.get(originValue)

  const newObj = Array.isArray(originValue) ? [] : {}
  selfMap.set(originValue, newObj)
  // 遍历普通的key
  for (const key in originValue) {
    newObj[key] = HXDeepCopy(originValue[key], selfMap)
  }
  // 单独遍历symbol的key
  const symbolKeys = Object.getOwnPropertySymbols(originValue)
  for (const symbolKey of symbolKeys) {
    newObj[Symbol(symbolKey.description)]
      = HXDeepCopy(originValue[symbolKey], selfMap)
  }

  return newObj
}

module.exports = HXDeepCopy
