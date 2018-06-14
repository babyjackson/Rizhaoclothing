// pages/components/bonus/bplist/bplist.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    jfmx: [
      {
        tit: "消费赠送",
        date: "2017-12-11",
        time: "10:30:41",
        jfdt: "+4",
        classn: "jia"
      },
      {
        tit: "积分兑换",
        date: "2017-12-11",
        time: "10:30:41",
        jfdt: "-30",
        classn: "jian"
      },
      {
        tit: "评价",
        date: "2017-12-11",
        time: "10:30:41",
        jfdt: "+5",
        classn: "jia"
      },
      {
        tit: "点赞",
        date: "2017-12-11",
        time: "10:30:41",
        jfdt: "+5",
        classn: "jia"
      },
      {
        tit: "点赞",
        date: "2017-12-11",
        time: "10:30:41",
        jfdt: "+5",
        classn: "jia"
      }
    ]
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