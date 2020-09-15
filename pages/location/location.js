// pages/location/location.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: app.globalData.latitude,
    longitude: app.globalData.longitude,
    markers: [{
      id: 1,
      latitude: app.globalData.latitude,
      longitude: app.globalData.longitude,
      callout: {
        'content':'我的老家就住在这个屯',
        'display': 'ALWAYS',
        'padding': '5'
      },
      iconPath: "/img/location.png",
      width: 50,
      height: 50

    }],
  },

  callhe: function(event) {
    wx.makePhoneCall({
      phoneNumber: '15021206840'
    })
  },
  callshe: function(event) {
    wx.makePhoneCall({
      phoneNumber: ''
    })
  },

  markertap(){
    let latitude = app.globalData.latitude
    let longitude =  app.globalData.longitude
    wx.openLocation({
      latitude,
      longitude,
      scale: 16
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})