// pages/component/wddd/wddd.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*****页面配置 */
    imgurl:app.globalData.imgUrl,
    tabArr: { cur:0 },
    dfk:[
      {
        dptit: "韩流主旗舰店",
        url: "/pages/components/lineitem/lineitem?cur=0",
        list: [
          {
            goodsimg: "/images/allimg.jpg",
            goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风",
            yuanj: "¥285",
            sj: "¥200",
            num: "1"
          },
          {
            goodsimg: "/images/allimg.jpg",
            goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风",
            yuanj: "285",
            sj: "200",
            num: "1"
          }
        ]
      }
     ],
    dfh: [
      {
        dptit: "韩流主旗舰店",
        url: "/pages/components/lineitem/lineitem?cur=1",
        list: [
          {

            goodsimg: "/images/allimg.jpg",
            goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风",
            yuanj: "¥285",
            sj: "¥200",
            num: "1"
          },
          {

            goodsimg: "/images/allimg.jpg",
            goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风",
            yuanj: "¥285",
            sj: "¥200",
            num: "1"
          }
        ]
      }
    ],
    dsh: [
      {
        dptit: "韩流主旗舰店",
        url: "/pages/components/lineitem/lineitem?cur=2",
        list: [
          {
            goodsimg: "/images/allimg.jpg",
            goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风",
            yuanj: "¥285",
            sj: "¥200",
            num: "1"
          },
          {
            goodsimg: "/images/allimg.jpg",
            goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风",
            yuanj: "285",
            sj: "200",
            num: "1"
          }
        ]
      }
    ],
    dpj: [
      {
        dptit: "韩流主旗舰店",
        url:"/pages/components/lineitem/lineitem?cur=3",
        list: [
          {
            goodsimg: "/images/allimg.jpg",
            goodstit: "韩国新款个性铁环画家帽子女秋冬季潮英伦风甜美可爱贝雷帽原宿风",
            yuanj: "¥285",
            sj: "¥200",
            num: "1"
          }
        ]
      }
    ],
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var idcs = Number(options.id);
    this.setData({
      tabArr: { cur: idcs },
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
  
  },

  tabFun: function (e) {   //获取触发事件组件的dataset属性 
    var idx = e.target.dataset.id;
    var tabArr = this.data.tabArr;
    if(idx){
      tabArr.cur = idx;
      this.setData({
        tabArr: tabArr
      });
    }
  },
  cancelOrder:function(e){
    let that = this;
    let parentindex = e.currentTarget.dataset.parentindex;
    console.log(parentindex);
    let dfk = this.data.dfk;
    if (dfk.length>0){
      wx.showModal({
        title: '',
        content: '确认要取消该订单吗？',
        success:function(res){
          if(res.confirm){
            dfk.splice(parentindex, 1)
          }
          that.setData({
            dfk:dfk
          })
        }
      })
    }
  }
})