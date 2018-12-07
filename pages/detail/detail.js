// pages/detail/detail.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
		imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration:500,
		detailImg:[
			'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
			'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
		],
		detail:{
			title:"SK-II 护肤精华露",
			hot:"1888",
			price:"888",
			content:"SK-II始终坚持改写女性肌肤命运的品牌理念，自王牌成分PITERA诞生起，便以其为灵感研发而成了四大王牌产品，深受全球爱用者喜爱，帮助成就肌肤晶莹剔透。"
		}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
	

// 		goodApi.seaById(options).then((res)=>{
// 			
// 			let detail = res.data.data[0];
// 			this.setData({
// 				detail:detail
// 			})
// 		})
// 		goodApi.seaImgById(options).then((res2)=>{
// 			let detail_img = res2.data.detail_img;
// 			let swiper_img = res2.data.swiper_img;
// 			this.setData({
// 				imgUrls:swiper_img,
// 				detailImg:detail_img
// 			})
// 		})
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