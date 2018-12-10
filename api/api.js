const util = require('../utils/util.js');

const api = {
	productAll:function(params){
		return util.request("/productAll",params)
	}
}
module.exports = api