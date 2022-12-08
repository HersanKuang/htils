// 文件转换为base64码
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    let fileResult = ''
    reader.onload = () => {
      fileResult = reader.result
    }
    reader.onerror = (error) => {
      reject(error)
    }
    reader.onloadend = () => {
      resolve(fileResult)
    }
  })
}

module.exports = getBase64
