// 文件转换为base64码
function HXGetBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    let fileResult = ''
    if (file) reader.readAsDataURL(file.file)
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

module.exports = HXGetBase64
