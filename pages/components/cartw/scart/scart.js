// pages/components/cartw/scart/scart.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
    selectAllStatus:"1",
    totalPrice:0,
    carts:[
      {
        sname:"阿玛尼",
        storeurl:"",
        storeselect:"1",
        list:[
          {
            select:"1",
            gname: "欧莱雅男士洗面奶水能保湿补水控油深层清洁爽肤水化1",
            gurl:"",
            img:"/images/allimg.jpg",
            price:158,
            num:1
          },
          {
            select: "1",
            gname: "欧莱雅男士洗面奶水能保湿补水控油深层清洁爽肤水化2",
            gurl: "",
            img: "/images/allimg.jpg",
            price: 158,
            num: 1
          }
        ]
      },
      {
        sname: "SK-II",
        storeurl: "",
        storeselect: "1",
        list: [
          {
            select: "1",
            gname: "欧莱雅男士洗面奶水能保湿补水控油深层清洁爽肤水化1",
            gurl: "",
            img: "/images/allimg.jpg",
            price: 158,
            num: 1
          }
        ]
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTotalPrice()
  },
  // 计算
  getTotalPrice:function(e){
    let carts = this.data.carts;
    let total = 0;
    for(let i = 0;i<carts.length;i++){
      let list = carts[i].list;
      for(let j= 0;j<list.length;j++){
        if(list[j].select == '1'){
          total += parseInt(list[j].num) * parseInt(list[j].price);
        }
      }
    }
    this.setData({
      totalPrice:total
    })
  },
  // storeselectAll
  storeselectAll:function(e){
    const {parentindex} = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let storeselect = carts[parentindex].storeselect;
    carts[parentindex].storeselect = storeselect == "1" ? "0":"1";
    console.log(storeselect)
    for(let i=0;i<list.length;i++){
      list[i].select = storeselect == "1" ? "0" : "1";
    } 
    if (carts[parentindex].storeselect == "0"){
      this.setData({
        selectAllStatus: "0",
      })
    }
    let storeTrue = [];
    for(let j=0;j<carts.length;j++){
      if(carts[j].storeselect == "1"){
        storeTrue.push("1");
      }
    }
    if(carts.length == storeTrue.length){
      this.setData({
        selectAllStatus: "1",
      })
    }
    this.setData({
      carts:carts
    });
    this.getTotalPrice();
  },

  // selectList
  selectList:function(e){
    const {parentindex,index} = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let select = list[index].select;
    list[index].select = select == "1" ? '0' : '1';
    if (list[index].select == "0"){
      carts[parentindex].storeselect = "0";
      this.setData({
        selectAllStatus: "0",
      })
    }
    let listTrue = [];
    
    for(let i=0;i<list.length;i++){
      if(list[i].select == "1"){
        listTrue.push("1");
      }
    }
    
    if (listTrue.length == list.length){
      carts[parentindex].storeselect = "1";
    }
    let storeTrue = [];
    for(let j=0;j<carts.length;j++){
      if(carts[j].storeselect == "1"){
        storeTrue.push("1");
      }
    }
    if(carts.length == storeTrue.length){
      this.setData({
        selectAllStatus: "1",
      })
    }
    this.setData({
      carts: carts,
    })
    this.getTotalPrice();
  },
  // selectAll
  selectAll:function(e){
    let selectAll = this.data.selectAllStatus;
    selectAll = selectAll == '1' ? '0' : '1';
    let carts = this.data.carts;
    for (let i = 0; i < carts.length; i++) {
      let list = carts[i].list;
      carts[i].storeselect = selectAll;
      for (let j = 0; j < list.length; j++) {
        list[j].select = selectAll;
      }
    }
    this.setData({
      selectAllStatus: selectAll,
      carts: carts
    });
    // console.log(carts)
    this.getTotalPrice(e);
  },
  // addCount
  addCount:function(e){
    let {index,parentindex} = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let num = parseInt(list[index].num);
    if (list[index].select == "1"){
        num += 1;
        list[index].num = num;
    }else{
      wx.showToast({
        title: '您还没有选择商品哦',
        icon: 'none',
        duration: 1000
      })
    }
    this.setData({
      carts:carts
    });
    this.getTotalPrice();
  },
  // minusCount
  minusCount:function(e){
    let {index,parentindex} = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let num = list[index].num;
    if(list[index].select == "1"){
      if(num>1){
        num -= 1;
        list[index].num = num;
      }
    }else{
      wx.showToast({
        title: '您还没有选择商品哦',
        icon: 'none',
        duration: 1000
      })
    }
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // deleteList
  deleteList:function(e){
    let that = this;
    let {index,parentindex} = e.currentTarget.dataset;
    let carts = this.data.carts;
    let list = carts[parentindex].list;
    let selected = list[index].select;
    if (selected == '0') {
      wx.showToast({
        title: '您还没有选择商品哦',
        icon: 'none',
        duration: 2000
      })
    } else {
      wx.showModal({
        title: '',
        content: '确认要删除此商品吗？',
        success: function (res) {
          if (res.confirm) {
            list.splice(index, 1);
            if (carts.length > 0) {
              if (list.length <= 0) {
                carts.splice(parentindex, 1)
              }
            }
            that.getTotalPrice(e);
            that.setData({
              carts: carts
            });
          }
        }
      })
    }
  },
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