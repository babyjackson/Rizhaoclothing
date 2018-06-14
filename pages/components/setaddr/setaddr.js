// pages/component/setaddr/setaddr.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:app.globalData.imgUrl,
    defalut:null,
    address:[
      {
        addr:"江苏省南京市理工大学 2号宿舍楼",
        name:"张某某",
        phone:"123459678890"
      },
      {
        addr: "江苏省南京市理工大学 2号宿舍楼",
        name: "张某某",
        phone: "123459678890"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  /***设置默认地址**/
  setDafalut:function(e){
    const index = e.currentTarget.dataset.index;
    this.setData({
      defalut: index,
    })
  },
  /***删除地址**/
  deleteAddr:function(e){
    const index = e.currentTarget.dataset.index;
    let address = this.data.address;
    let that = this;
    wx.showModal({
      title: '',
      content: '确定要删除此地址吗？',
      success:function(res){
        if(res.confirm){
          address.splice(index, 1);
          that.setData({
            address: address
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