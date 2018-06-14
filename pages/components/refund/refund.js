// pages/component/refund/refund.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    active:false,
    defalut:0,
    tkcause:"",
    maskcause:[
      {
        cause: "不想买了",
      },
      {
        cause: "订单不能按预计时间送达",
      },
      {
        cause: "操作有误（商品、地址等选错）",
      },
      {
        cause: "其他渠道价格更低",
      },
      {
        cause: "商品无货",
      },
      {
        cause: "其他原因",
      }
    ],
    choosesrc: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /**choosecause**/
  choosecause:function(e){
    let active = this.data.active;
    active = true;
    this.setData({
      active: active
    })
  },
  /***选择原因值**/
  setCause: function (e) {
    const index = e.currentTarget.dataset.index;
    let tkcause = this.data.maskcause[index].cause;
    this.setData({
      defalut: index,
      tkcause: tkcause
    })
  },
  /**确定选择***/
  surechoose: function (e) {
    let active = this.data.active;
    let tkcause = this.data.tkcause;
    let maskcause = this.data.maskcause[0].cause;
    if(tkcause == ""){
      this.setData({
        tkcause: maskcause
      })
    }
    active = false;
    this.setData({
      active:active
    })
  },
  onLoad: function (options) {

  },
  // 删除图片
  deleteImg: function (e) {
    var choosesrc = this.data.choosesrc;
    var index = e.currentTarget.dataset.index;
    choosesrc.splice(index, 1);
    this.setData({
      choosesrc: choosesrc
    });
  },
  /****选择图片 */
  chooseImage: function (event) {
    var that = this
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],/****指定是原图还是压缩图，默认是二者都有 */
      sourceType: ['album', 'camera'],/****指定来源是相册还是相机，默认二者都有 */
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var imgeList = that.data.choosesrc.concat(res.tempFilePaths);
        //concat方法 是js的方法，用于连接两个或多个数组
        that.setData({
          choosesrc: imgeList
        })
      }
    })
  },
  previewImage: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,
      pictures = this.data.choosesrc;
    wx.previewImage({
      current: pictures[index],
      urls: pictures
    });
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