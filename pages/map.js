// pages/map.js
let plugin = requirePlugin("chooseLocation");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    routeInfo: {
 
      // startLat: 19.17652,    //起点经度 选填，不填默认为当前位置
 
      // startLng: 21.212121,    //起点纬度 选填
 
      // startName: "我的位置",  // 起点名称 选填
 
      startName: "我的位置",  // 起点名称 选填
 
      endLat: 22.548901,    // 终点经度必传
 
      endLng: 114.089656,  //终点纬度 必传
 
      endName: "福田区中航路1号九方购物中心",  //终点名称 必传
 
      mode: "car"  //算路方式 选填
 
    }

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
    let plugin = requirePlugin("myPlugin");

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