const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const request = (url, params, method) =>{
	return new Promise((resolve,reject)=>{
// 		let token = wx.getStorageSync("token")
// 		let header = {};
// 		if(token){
// 			header = {
// 				"Authorization":token
// 			}
// 		}else if(url=="wxLogin"){
// 			header={};
// 		}else{
// 			wx.redirectTo({
// 				url:'/pages/index/index'
// 			})
// 		}
		wx.request({
			url:url,
			method: method,
			data:data,
			// header:header,
			success:resolve,
			fail: reject
		})
	})
}
module.exports = {
  formatTime: formatTime,
	request:request
}
