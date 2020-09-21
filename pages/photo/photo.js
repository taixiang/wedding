// pages/photo/photo.js
const app = getApp()
const Net = require('../../net/net.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTop: 24,
    menuHeight: 32,
    typeList: [],
    swing: 'swing'
  },

  toDetail(e){
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../photoDetail/photoDetail?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if (wx.getMenuButtonBoundingClientRect) {
      let menuReact = wx.getMenuButtonBoundingClientRect()
      if (menuReact) {
        let top = menuReact.top
        let height = menuReact.height
        this.setData({
          menuTop: util.pxToRpx(top),
          menuHeight: util.pxToRpx(height)
        })

      }

    }

    Net.TypeList().then(res => {
      if(res && res.code == 200){
        let data = res.data || []
        data.map((v,i) => {
          if(i % 2 == 1){
            v.anim = 'bounceInLeft'
          }else {
            v.anim = 'bounceInRight'
          }
          return v
        })
        console.log({data})
        this.tmpData = data
        this.setData({
          typeList: data,
          swing: 'swing'
        })
      }
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
    this.setData({
      typeList: this.tmpData,
      swing: 'swing'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      typeList: [],
      swing: ''
    })
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
    return {
      imageUrl: 'https://7765-wedding-i9l06-1303164777.tcb.qcloud.la/zhu1.jpg?sign=4496115c1ce17b097ec569d159fa08b8&t=1600005801',
      path: '/pages/home/home'
    }
  }
})