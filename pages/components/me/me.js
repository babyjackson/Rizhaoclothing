const app = getApp();
let imgurl = app.globalData.imgUrl
// pages/components/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    comInfo: {
      logo: "/images/allimg.jpg",
      cname: "山西建材平台",
    },
    active: true,
    hidden: false,
    nocancel: false,
    imgurl: app.globalData.imgUrl,
    userInfo: {
      avatarUrl: "/images/allimg.jpg",
      nickName: "xxxxxxx",
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    order: [
      {
        url: "/pages/components/order/order?id=1",
        img: "/images/order-1.png",
        text: "待付款"
      },
      {
        url: "/pages/components/order/order?id=2",
        img: "/images/order-2.png",
        text: "待发货"
      },
      {
        url: "/pages/components/order/order?id=3",
        img: "/images/order-3.png",
        text: "待收货"
      },
      {
        url: "/pages/components/order/order?id=4",
        img: "/images/order-4.png",
        text: "待评价"
      },
      {
        url: "/pages/components/refundlist/refundlist",
        img: "/images/order-5.png",
        text: "退款"
      }
    ],
    mustfun: [
      {
        url: "/pages/components/coupons/coupons",
        img: imgurl+"/images/mustfun-1.png",
        text: "优惠券"
      },
      {
        url: "/pages/components/clubcard/vipxq/vipxq",
        img: imgurl+"/images/mustfun-2.png",
        text: "会员卡"
      },
      {
        url: "/pages/components/bonus/mebp/mebp",
        img: imgurl+"/images/mustfun-3.png",
        text: "我的积分"
      },
      {
        url: "/pages/components/collect/collect",
        img: imgurl+"/images/mustfun-4.png",
        text: "我的收藏"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        active: false,
      })
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      this.setData({
        userInfo: app.globalData.userInfo,
        active: true,
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  catchBgTap: function (e) {
    this.setData({
      active: false
    })
  },
  onGotUserInfo: function (e) {
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo,
      active: false,
    })
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