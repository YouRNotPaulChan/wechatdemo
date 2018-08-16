let md5 = require('../../utils/md5.js');
let app = getApp();
// pages/homepage/homepage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // appID: "0f8f4feea9cb7c51",//有道翻译APIID
    // appKey: "46xeU1G1Rv8fytFupQWOcJC6rjWzQKpn",//有道翻译APIKEY
    ArrayList: [
      {
        title: "1",
        desc: "1",
        photo_url: "http://dimg13.c-ctrip.com/images/200o050000000dsgj83DF_R_300_225.jpg",
        pwd: "1234",
        room: "1301"
      },
      {
        title: "2",
        desc: "2",
        photo_url: "http://dimg10.c-ctrip.com/images/200a0k000000bnf0f011F_R_300_225.jpg",
        pwd: "2345",
        room: "1302"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options){
    // this.setData({openid: app.globalData.openId})
    console.log("open----id",app.globalData.openId)
    // let salt = (new Date).getTime();
    // let query = "你好";
    // let from = '';
    // let to = 'en';
    // let str = this.data.appID + query + salt + this.data.appKey;
    // let sign = md5.md5(str);
    // console.log(sign);
    // wx.request({
    //   url: 'http://openapi.youdao.com/api',
    //   data: {
    //     q: query,
    //     appKey: this.data.appID,
    //     salt: salt,
    //     from: from,
    //     to: to,
    //     sign: sign
    //   },
    //   header: {
    //     'content-type': 'application/json'
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
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

  testSubmit: function (e) {
    console.log(e)
    let dataset = e.currentTarget.dataset
    var self = this;
    let _access_token = '12_o4nT7w6s_COddlRFqI2YACOkujCsJY28-LPE_8o582LqFPzDJmktiYd9s0jCKGKKipUl1mDBdAmfL0GiSPt4SJqRrLp3iVLlPMSg2APvvKVm1HF8i-JRotjYOMDZKVPSS34lJPClBlPJKfrSSYKgAJAEKW';
    let url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + _access_token; 
    let _jsonData = {
        access_token: _access_token,
        touser: app.globalData.openId,
        template_id: '5xZ5SvSDPUAG-C4duFYuZDfEgYY7QFbDva0zuHMifHY',
        form_id: e.detail.formId,
        page: "pages/index/index",
        data: {
          "keyword1": { "value": dataset.pwd, "color": "#173177" },
          "keyword2": { "value": dataset.room, "color": "#173177" },
          "keyword3": { "value": "2018-08-15", "color": "#173177" },
          "keyword4": { "value": "2018-08-16", "color": "#173177" },
          "keyword5": { "value": "请及时入住，密码过期失效", "color": "#173177" }
        }
      }
    wx.request({
      url: url,
      data: _jsonData,
      method: 'POST',
      success: function (res) {
        console.log(res)
      },
      fail: function (err) {
        console.log('request fail ', err);
      },
      complete: function (res) {
        console.log("request completed!");
      }

    })
  }
})