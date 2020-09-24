// pages/home/home.js
const app = getApp()
const Net = require('../../net/net.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    screenHeight: 0,
    imgList: [],
    mainInfo: {},
    animationData: "", //动画
    curIndex: 0
  },



  //dot切换
  bannerChange: function (e) {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const backgroundAudioManager = wx.getBackgroundAudioManager()
        
    backgroundAudioManager.title = '告白气球'
    backgroundAudioManager.epname = '告白气球'
    backgroundAudioManager.singer = '周杰伦'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = 'https://7765-wedding-i9l06-1303164777.tcb.qcloud.la/gbqq.mp3?sign=a40b6b3a242d1e384f7c8ca6300952b6&t=1600699294'

    backgroundAudioManager.onError(res1 => {
      console.log({res1})
    })

    wx.showLoading()
    let screenHeight = wx.getSystemInfoSync().screenHeight;
    //创建动画
    var animation = wx.createAnimation({
      duration: 2600,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "50% 50%",
    })
    animation.scale(0.9).translate(10, 10).step(); //边旋转边放大
    //导出动画数据传递给组件的animation属性。
    this.setData({
      screenHeight: screenHeight
    })

    Net.GetHome().then(res => {
      if(res.code == 200){
        this.setData({
          imgList: res.data.img,
          mainInfo: res.data.mainInfo
        })
        setTimeout(() => {
          this.setData({
            animationData: animation.export()
          })
        },300)

        console.log(this.data.imgList)

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
    return {
      imageUrl: 'https://7765-wedding-i9l06-1303164777.tcb.qcloud.la/zhu1.jpg?sign=4496115c1ce17b097ec569d159fa08b8&t=1600005801',
      path: '/pages/home/home'
    }
  }
})