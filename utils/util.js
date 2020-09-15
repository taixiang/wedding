const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//px->rpx转换
const pxToRpx = px => {
  var screenWidth = wx.getSystemInfoSync().screenWidth;
  return 750 * px /screenWidth
}

//rpx->px转换
const rpxTopx = rpx => {
  var screenWidth = wx.getSystemInfoSync().screenWidth;
  return screenWidth * rpx / 750
}


module.exports = {
  formatTime: formatTime,
  pxToRpx: pxToRpx,
  rpxTopx: rpxTopx
}
