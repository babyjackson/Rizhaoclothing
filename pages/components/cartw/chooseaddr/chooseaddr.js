// pages/component/dzgl/dzgl.js
const app = getApp();

Page({

  /**
    * 页面的初始数据
    */
  data: {
    imgurl:app.globalData.imgUrl,
    listdz: [
      {
        id: 0,
        name: "张三",
        tel: "13733332222",
        addre: "长沙市天心区解放路一单元110号",
        select: false
      },
      {
        id: 1,
        name: "张三",
        tel: "13733332222",
        addre: "长沙市天心区解放路一单元110号",
        select: true
      }
    ]
  },
  selectClick: function (event) {

    // this.data.model[event.currentTarget.id].selectImage  
    for (var i = 0; i < this.data.listdz.length; i++) {
      if (event.currentTarget.id == i) {


        this.data.listdz[i].select = true
      }
      else {

        this.data.listdz[i].select = false
      }

    }
    this.setData(this.data)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var flag = false;//判断是从哪个页面跳转过来  

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

  formSubmit: function (e) {

  }
})