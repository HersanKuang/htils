const { HXDeepCopy } = require('../src')

const set = new Set(["abc", "cba", "nba"])
const map = new Map()
map.set({ name: "zhangsan" }, "zhangsan")
map.set("lisi", "lisi")
const s1 = Symbol("s1")
const s2 = Symbol("s2")

const info = {
  name: "khx",
  age: 18,
  friend: {
    name: "wangwu",
    address: {
      name: "洛杉矶",
      detail: "斯坦普斯中心"
    }
  },
  set: set,
  map: map,
  symbolKey: Symbol("abc"), // 值的特殊类型：Symbol
  [s1]: "aaaa", // key是symbol时
  [s2]: "bbbb"
}
// 循环引用
// info.self = info
info.info = info

const newObj = HXDeepCopy(info)
// selfMap = null

console.log(newObj)

// console.log(newObj.self === newObj) // true
