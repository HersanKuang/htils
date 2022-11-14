class HXLocalCache {
  setCache(storage, key, value) {
    if (storage !== 'localStorage' && storage !== 'sessionStorage') {
      throw new TypeError('storage param must be a valid type')
    }
    if (typeof key !== "string") {
      throw new TypeError("the key must be string type")
    }
    window[storage].setItem(key, JSON.stringify(value))
  }
  getCache(storage, key) {
    if (storage !== 'localStorage' && storage !== 'sessionStorage') {
      throw new TypeError('storage param must be a valid type')
    }
    if (typeof key !== "string") {
      throw new TypeError("the key must be string type")
    }

    const value = window[storage].getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(storage, key) {
    if (storage !== 'localStorage' && storage !== 'sessionStorage') {
      throw new TypeError('storage param must be a valid type')
    }
    if (typeof key !== "string") {
      throw new TypeError("the key must be string type")
    }
    window[storage].removeItem(key)
  }
  clearCache(storage) {
    if (storage !== 'localStorage' && storage !== 'sessionStorage') {
      throw new TypeError('storage param must be a valid type')
    }
    window[storage].clear()
  }
}

module.exports = HXLocalCache
