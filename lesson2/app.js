// 引入模块
var express = require('express');
var utility = require('utility');
// 建立express对象实例
var app = express();
// 请求方式
app.get('/', function(req, res) {
	var q = req.query.q;
	if (q != null) {
		var md5Value = utility.md5(q);
		res.send(md5Value);
	} else {
		res.send('q参数错误')
	} 
});
// 监听的端口号
app.listen(2019, function (req, res) {
	console.log("http://localhost:2019/?q=zhangrongwu");
});
