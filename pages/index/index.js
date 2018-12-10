// pages/sea/sea.js
const util = require('../../util/util.js');
const api = require('../../api/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
		headerNavs:[
			{"name":"全部"},
			{"name":"美妆"},
			{"name":"服饰"},
			{"name":"吃货"},
			{"name":"其他"}
		],
		headerIndex:0,
		pageNo:1,
		pageSize:5,
		list:[],
		startX:0,
		endX:0
  },
	
	tab:function(event){
		var that = this;
		this.setData({
			headerIndex:event.currentTarget.dataset.index
		},function(){
			that.setData({
				list:[],
				pageNo:1
			})
		})
	},
	toDetail:function(event){
		wx.navigateTo({
			url:'/pages/detail/detail'
		})
// 		let id = event.currentTarget.dataset.id;
// 		wx.navigateTo({
// 			url:'/pages/detail/detail?id='+id
// 		})
	},
	productAll:function(){
		let params = {};
		params.pageNo = this.data.pageNo;
		params.pageSize = this.data.pageSize;
		
		if(this.data.headerIndex==0){
			
		}else{
			params.type = this.data.headerIndex;
		}
		api.productAll(params).then((res)=>{
			if(res.data.code==0){
				let _list = res.data.data;
				let list = this.data.list;
				list = list.concat(_list);
				console.log(list)
				this.setData({
					list:list
				})
			}
		})
	},
	getList:function(headerIndex){
		

		
	},
	touchS:function(e){
		if(e.touches.length==1){
      this.setData({
        //记录触摸起始位置的X坐标
        startX:e.touches[0].clientX
      });
    }
	},
	touchE:function(e){
		let startX = this.data.startX;
		let endX = e.changedTouches[0].clientX;
		
		let disX = startX-endX;
		let headerIndex = this.data.headerIndex;
		if(disX>50){
			if(headerIndex<4){
				headerIndex = headerIndex+1
				this.setData({
					headerIndex:headerIndex
				})
				this.getList(headerIndex)
				
			}
		}else if(disX<-50){
			
			if(headerIndex>0){
				headerIndex = headerIndex-1
				this.setData({
					headerIndex:headerIndex
				})
				this.getList(headerIndex)
			}
		}
	},
	touchM:function(e){
		let startX = this.data.startX;
		let endX = e.touches[0].clientX;
		let disX = startX-endX;
		let headerIndex = this.data.headerIndex;
		
		
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