//app.js
const Net = require('net/net.js')
const util = require('utils/util.js')

App({
  onLaunch: function () {


    let openId = wx.getStorageSync('openId') || ""
    console.log({openId})
    this.globalData.openId = openId
    if(!openId){
      //没有openid就没有授权
    // 登录
      this.wxLogin()
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log({res})
            }
          })
        }else{
          console.log('-------------')
          this.getInfo(openId)
        }
      }
    })
  },
  globalData: {
    userInfo: {},
    openId: "",
    latitude: 32.540943,
    longitude: 120.258987
  },


  //微信登录，换取code
  wxLogin() {
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        Net.GetOpenId(res.code).then((res) => {
          if (res && res.code == 200) {
            this.globalData.openId = res.data.openid
            wx.setStorageSync("openId", res.data.openid);

          }
        })
      }
    })
  },

  //获取信息
  getInfo(id){
    Net.GetInfo(id).then(res => {
      if(res && res.data){
        this.globalData.userInfo = res.data
      }

    })
  }

})