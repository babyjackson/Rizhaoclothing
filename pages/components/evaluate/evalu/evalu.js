// pages/component/evaluate/evalu/evalu.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select:true,
    imgUrl:app.globalData.imgUrl,
    dstar: ["0", "0", "0", "0", "0"],
    starArr:[],
    rating:{
      goods:{
        img:"/images/allimg.jpg",
        tips:"小店",
        gname:"长靴女秋冬欧美新款过膝长靴瘦腿弹力靴平跟长靴女绒面高筒单靴",
        price:49.90,
        num:1
      },
      seller:{
        logo:"/images/allimg.jpg",
        conam:"阿玛尼",
        name:"胡一天"
      },
      desstar:null,
      quastar:null,
      logstar:null,
      choosesrc:[],
      totalscore:null
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let rating = this.data.rating;
    let dstar = this.data.dstar;
    rating.desstar = dstar;
    rating.quastar = dstar;
    rating.logstar = dstar;
    this.setData({
      select: true,
      rating:rating
    });
    this.getTotalScore();
  },
  //选择事件
  selectList: function (e) {//data-index
    //获取data传进来的index
    let selected = !this.data.select
    this.setData({
      select: selected
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  /****星星点击 */
  starselcted:function(options){
    let idx = options.currentTarget.id;
    let rating = this.data.rating;
    let sindex = parseInt(idx)+1;
    let sname = options.target.dataset.name;
    let starArr = this.data.starArr;
    for (let i = 0; i < sindex; i++) {
      let arrvalue = "1";
      starArr.push(arrvalue);
    }
    console.log(starArr)
    if (sname == "ms"){
      rating.desstar = starArr;
    }
    if (sname == "zl"){
      rating.quastar = starArr;
    }
    if (sname == "fw"){
      rating.logstar = starArr;
    }
    this.setData({
      rating:rating,
      starArr:[]
    });
    this.getTotalScore();
  },
  // 计算分值
  getTotalScore: function (e) {
    let total = 0;
    let rating= this.data.rating;
    total = rating.desstar.length + rating.quastar.length + rating.logstar.length;
    console.log(total)
    rating.totalscore = total;
    this.setData({
      rating:rating
    })
   },

  // ------
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
  // 删除图片
  deleteImg: function (e) {
    let rating = this.data.rating;
    let choosesrc = rating.choosesrc;
    var index = e.currentTarget.dataset.index;
    choosesrc.splice(index, 1);
    this.setData({
      rating: rating
    });
  },
  /****选择图片 */
  chooseImage: function (event) {
    let that = this;
    let rating = this.data.rating;
    let choosesrc = rating.choosesrc;
    wx.chooseImage({
      count: 5,
      sizeType: ['original', 'compressed'],/****指定是原图还是压缩图，默认是二者都有 */
      sourceType: ['album', 'camera'],/****指定来源是相册还是相机，默认二者都有 */
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        rating.choosesrc = choosesrc.concat(res.tempFilePaths);
        //concat方法 是js的方法，用于连接两个或多个数组
        that.setData({
         rating :rating
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
})