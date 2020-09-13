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

  }
})