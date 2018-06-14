// pages/component/search/search.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reveal:true,
    imgurl: app.globalData.imgUrl,
    pastsearch:[
      {
        value:"外套"
      },
      {
        value: "长袖体恤男中年"
      },
      {
        value: "体恤男中年"
      },
      {
        value: "体恤男"
      },
      {
        value: "体恤女短袖"
      },
      {
        value: "毛衣"
      }
    ],
    hotsearch: [
      {
        value: "外套"
      },
      {
        value: "长袖体恤男中年"
      },
      {
        value: "体恤男中年"
      },
      {
        value: "体恤男"
      },
      {
        value: "体恤女短袖"
      },
      {
        value: "毛衣"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pastsearch = this.data.pastsearch;
    if (pastsearch.length>0){
      this.setData({
        reveal: true
      })
    }else{
      this.setData({
        reveal: false
      })
    }
  },

  // clearRecord
  clearRecord: function(e){
    let that = this;
    let pastsearch = this.data.pastsearch;
    wx.showModal({
      title: '',
      content: '确定清空历史搜索吗？',
      success:function(res){
        if (res.confirm){
          pastsearch = [];
          that.setData({
            reveal: false,
            pastsearch: pastsearch
          })
        }
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