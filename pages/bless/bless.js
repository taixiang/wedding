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
    joinMsg: {},
    cakeList: []

  },


  showCard(){
    this.setData({
      isCard: true
    })
    wx.showLoading()
    
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
    } else {
      wx.showToast({
        title: "请填写出席信息",
        icon: 'none',
        duration: 2000
      });
    }
  },

  //存储信息
  postInfo(data){
    Net.PostInfo(data).then(res => {
      console.log({res})
    })
  },

  //出席信息
  postJoin(data){
    Net.PostJoin(data).then(res => {
      if(res && res.data){
        wx.showToast({
          title: res.data,
          icon: 'none',
          duration: 2000
        });
        this.setData({
          isCard: false,
          joinMsg: data
        })
      }
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
    var phone = event.detail.value.tel || '';
    if (phone == '') {
      wx.showToast({
        title: '请填写您的手机号码',
        icon: 'none'
      })
      return;
    }

    if (phone.length < 11) {
      wx.showToast({
        title: '请填写正确手机号码',
        icon: 'none'
      })
      return;
    }

    var msg = event.detail.value.plan;
    var remark = event.detail.value.extra;
    let openId = app.globalData.openId
    let data = {
      name,phone,msg,remark,openId
    }
    this.postJoin(data)


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

    wx.showLoading()
    Net.GetJoinMsg(app.globalData.openId).then(res => {
      this.setData({
        joinMsg: res.data,
        cakeList: res.data.cakeList
      })

    })
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
    wx.showLoading()
    Net.GetJoinMsg(app.globalData.openId).then(res => {
      this.setData({
        joinMsg: res.data,
        cakeList: res.data.cakeList
      })

    })
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
    return {
      imageUrl: 'https://7765-wedding-i9l06-1303164777.tcb.qcloud.la/zhu1.jpg?sign=4496115c1ce17b097ec569d159fa08b8&t=1600005801',
      path: '/pages/home/home'
    }
  }
})