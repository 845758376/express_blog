var express = require('express')
var app = express();
app.set('view engine','ejs');
app.listen(3000);//悄无声息的3000链接。
// app.use('/static', express.static('public'));//静态文件引入
app.use(express.static('public'));//静态文件引入

app.get('/', function (req, res) { //这个是在初始界面显示index页面，声明使用index.html这个路径
  res.sendFile(__dirname + "/views/" + "index.html");
});
app.get('/Experiment', function (req, res) { //这个是在路径为/index中使用index.html这个页面
  res.sendFile(__dirname + "/views/" + "Experiment.html");
});
app.get('/musicdomo', function (req, res) { //这个是在路径为/index中使用index.html这个页面
  res.sendFile(__dirname + "/views/" + "musicdomo.html");
});
app.get('/personal', function (req, res) { //这个是在路径为/index中使用index.html这个页面
  res.sendFile(__dirname + "/views/" + "personal space.html");
});
app.get('/about', function (req, res) { //这个是在路径为/index中使用index.html这个页面
  res.sendFile(__dirname + "/views/" + "about me.html");
});