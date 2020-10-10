
// const BaseUrl = "http://192.168.0.102:8000/";

const BaseUrl = "https://www.manjiexiang.cn/";


const request = (url, method, token, data) => {
  let _url = BaseUrl + url;
  let header = {
    'accept': 'application/json',
    'content-type': 'application/json'
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: header,
      success(response) {
        // console.log("net success response ", response)
        wx.hideLoading();
        let res = {};
        res = response.data
        if (!response.data) {
          res.code = 0;
          res.messgae = '网络错误';
        }

        resolve(res)
      },
      fail(error) {
        wx.hideLoading();
        wx.showToast({
          icon: 'none',
          title: '网络异常，稍后再试',
          complete: function () {
            setTimeout(() => {
              // console.log("=======error ", error)
              reject(error)
            }, 200)
          }
        })
        // console.log("net error", error)
      },
      complete(aaa) {
        // 加载完成

        wx.stopPullDownRefresh()
      }
    })
  })
}


module.exports = {
  request,
  GetHome: () => {
    return request('blog/wswiper', 'get', false)
  },
  TypeList: () => {
    return request('blog/typeList', 'get', false)
  },
  GetImg: (id) => {
    return request('blog/getImg?id=' + id, 'get', false)
  },
  GetOpenId: (code) => {
    return request('blog/getOpenId?code=' + code, 'get', false)
  },
  PostInfo: (param) => {
    return request('blog/postUserInfo', 'post', false, param)
  },
  GetInfo: (id) => {
    return request('blog/getUserInfo?openId=' + id, 'get', false)
  },
  PostJoin: (param) => {
    return request('blog/postJoinMsg', 'post', false, param)
  },
  GetJoinMsg: (id) => {
    return request('blog/getJoinMsg?openId=' + id, 'get', false)
  },
  GetSeat: () => {
    return request('blog/getSeat', 'get', false)
  }
}