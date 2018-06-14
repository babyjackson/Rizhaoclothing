// pages/component/lineitem/lineitem.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    status: {
      cur: 0
    },
    like: [
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "今之逸品抽取式美容，美之逸品抽取式之逸品抽取式之逸品抽取式容",
        price: "23.50",
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "今之逸品抽取式美容，美之逸品抽取式之逸品抽取式之逸品抽取式容",
        price: "23.50",
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "今之逸品抽取式美容，美之逸品抽取式之逸品抽取式之逸品抽取式容",
        price: "23.50",
      },
      {
        img: "/images/allimg.jpg",
        url: "",
        tit: "今之逸品抽取式美容，美之逸品抽取式之逸品抽取式之逸品抽取式容",
        price: "23.50",
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var idcs = Number(options.cur);
    let status = this.data.status;
    status.cur = idcs;
    this.setData({
      status: status,
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