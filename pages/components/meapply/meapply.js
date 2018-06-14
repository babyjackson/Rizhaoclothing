// pages/components/meapply/meapply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status: 1,
    statusClass: "btn", 
    active: false,
    account: "",
    psd: "",
    failcause: "",
    apply: [
      {
        logo: "/images/allimg.jpg",
        tit: "美容美发连锁加盟",
        time: "2018-05-24",
        staname: "待审核",
        sta: 1 // 待审核状态
      },
      {
        logo: "/images/allimg.jpg",
        tit: "美容美发连锁加盟",
        time: "2018-05-24",
        staname: "已通过",
        account: "11112525",
        psd: "xx25255",
        sta: 2  // 已通过状态
      },
      {
        logo: "/images/allimg.jpg",
        tit: "美容美发连锁加盟",
        time: "2018-05-24",
        staname: "未通过",
        failcause: "账号已经申请过！",
        sta: 3  // 未通过状态
      },
      {
        logo: "/images/allimg.jpg",
        tit: "美容美发连锁加盟",
        time: "2018-05-24",
        staname: "已通过",
        account: "君山11112525",
        psd: "xx25255",
        sta: 2
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  proAlert: function (e) {
    let tindex = e.currentTarget.dataset.index;
    let apply = this.data.apply;
    let sta = parseInt(apply[tindex].sta);
    if (sta == 1) {
      this.setData({
        status: 1,
        active: false
      })
    }
    if (sta == 2) {
      let account = apply[tindex].account;
      let psd = apply[tindex].psd;
      this.setData({
        account: account,
        psd: psd,
        status: 2,
        active: true
      })
    }
    if (sta == 3) {
      let failcause = apply[tindex].failcause;
      this.setData({
        failcause: failcause,
        status: 3,
        active: true
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