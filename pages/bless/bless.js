const Net = require("../../net/net")

// pages/bless/bless.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCard: false,
    hasUserInfo: false,

  },


  showCard(){
    this.setData({
      isCard: true
    })
  },

  cancelMsg(){
    this.setData({
      isCard: false
    })
  },

  //获取用户信息
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo || {}
    if(e.detail.userInfo){
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true,
        isCard: true
      })
      let data = e.detail.userInfo
      data.openId = app.globalData.openId
      this.postInfo(e.detail.userInfo)
    }
  },

  //存储信息
  postInfo(data){
    Net.PostInfo(data).then(res => {
      console.log({res})
    })
  },

  formSubmit(event) {
    var that = this

    var userInfo = that.data.userInfo;
    var nickname = userInfo.nickName;
    var face = userInfo.avatarUrl;

    var name = event.detail.value.name;
    if (name == '') {
      wx.showToast({
        title: '请填写您的姓名',
        icon: 'none'
      })
      return;
    }
    var tel = event.detail.value.tel;
    if (tel == '') {
      wx.showToast({
        title: '请填写您的电话',
        icon: 'none'
      })
      return;
    }

    var plan = event.detail.value.plan;
    var extra = event.detail.value.extra;

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
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