// pages/photoDetail/photoDetail.js
const app = getApp()
const Net = require('../../net/net.js')
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      {
        img: "https://happymall-1253765789.picsh.myqcloud.com/20200424/1587704672272.jpg?imageView2/3/w/400/h/400/q/100",
        desc: 'bounce'
      },
      {
        img: "https://happymall-1253765789.picsh.myqcloud.com/20200424/1587704672272.jpg?imageView2/3/w/400/h/400/q/100",
        desc: 'pulse'
      },
      {
        img: "https://happymall-1253765789.picsh.myqcloud.com/20200424/1587704672272.jpg?imageView2/3/w/400/h/400/q/100",
        desc: 'rubberBand'
      }],
    anim: '',
    curIndex: 0,
  },

    //dot切换
    bannerChange: function (e) {
      console.log({e})
      let index = e.detail.current
      this.setData({
        curIndex: index,
        anim: this.data.imgList[index].desc
      })

    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id || ''
    Net.GetImg(id).then(res => {
      if(res && res.code == 200){
        let data = res.data || []
        this.tmpData = data
        this.setData({
          curIndex: 0,
          anim: this.data.imgList[0].desc
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