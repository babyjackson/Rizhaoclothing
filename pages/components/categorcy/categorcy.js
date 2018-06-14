// pages/components/categorcy/categorcy.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    cur:0,
    rollNav:["热搜推荐","女装","男装","女童装","男童装","工装","服装配饰"],
    secondNav:{
      banimg:"/images/class_ban.jpg",
      firstNav:"热门搜索",
      second:[
        {
          imgic:"/images/allimg.jpg",
          url:"",
          text:"连衣裙"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "T恤"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "外套"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "衬衫"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "休闲裤"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "半身裙"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "牛仔裤"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "套装"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "半身裙"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "牛仔裤"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "套装"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "半身裙"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "牛仔裤"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "套装"
        },
        {
          imgic: "/images/allimg.jpg",
          url: "",
          text: "卫衣"
        }
      ]
    }
  },
  // gainTab
  gainTab: function(e) {
    let curIndex = e.currentTarget.dataset.index;
    let cur = this.data.cur;
    cur = curIndex;
    this.setData({
      cur:cur
    })
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