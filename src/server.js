////0
////نود دارای تعداد زیادی ماژول است. تعداد زیاد دیگری توسط شرکت های دیگر تعریف شده اند که از آنها استفاده خواهیم کرد. 
//// خود کاربر هم مب تواند این ماژول ها را به راحتی در یک فایل با پسوند جی اس که شامل کد های جاوااسکریپت است ایجاد کرده
//// و سپس از آنها استفاده کند. همه ماژول هایی که توسط ناگت نصب می شوند در پوشه ای بنام 
//// node_modules
//// قرار می گیرند که کتابخانه ای از همین فایل های جاوااسکریپت می باشند
//// فراخوانی آنها مانند کد زیر است

//var http = require('http');

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });    
//    res.end('Hi There');
//}).listen(8081);
//---------------------------------------------------------------------------------------------------------------------------------------------------

////1:
//// کتابخانه http
//var http = require('http');
//// ماژول express
//var express = require('express');

//var app = express();
//// شروع اپ
//http.createServer(app).listen(3000);
//// یک روت برای صفحه خانه که بجای ضربدر هر مجموعه ای می تواند بیاید
//app.get('/ddd*11', function (req, res) {
//    res.send('Welcome!');
//});
//---------------------------------------------------------------------------------------------------------------------------------------------------





////2 make an get to a page
//var express = require('express');
//var app = express();

//app.use(express.static('public'));

//app.get('/process_get', function (req, res) {

//	// Prepare output in JSON format
//	response = {
//		first_name: req.query.first_name,
//		last_name: req.query.last_name
//	};
//	console.log(response);
//	res.end(JSON.stringify(response));
//})
//var server = app.listen(8081)
//---------------------------------------------------------------------------------------------------------------------------------------------------


////3 make an post page
//var express = require('express');
//var app = express();
//var bodyParser = require('body-parser');

//// Create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.static('public'));

//app.get('/indexPost.html', function (req, res) {
//	res.sendFile("indexPost.html");
//})

//app.post('/process_post', urlencodedParser, function (req, res) {

//	// Prepare output in JSON format
//	response = {
//		first_name: req.body.first_name,
//		last_name: req.body.last_name
//	};
//	console.log(response);
//	res.end(JSON.stringify(response));
//})

//var server = app.listen(8081)
//---------------------------------------------------------------------------------------------------------------------------------------------------


////4 add delete a static json user list
//var express = require('express');
//var app = express();
//var fs = require("fs");

////Read user
//app.get('/listUsers', function(req, res) {
//    fs.readFile("data/users.json", 'utf8', function(err, data) {
//        console.log(data);
//        res.end(data);
//    });
//})

////add user
//var user = {
//        "user4" : {
//        "name" : "mohit",
//        "password" : "password4",
//        "profession" : "teacher",
//        "id": 4
//    }
//}
//app.get('/addUser', function(req, res) {
//    // First read existing users.
//    fs.readFile("data/users.json", 'utf8', function(err, data) {
//        while (data[0] && data[0] != '{')
//            data = data.replace(data[0], '');
//        data = JSON.parse(data);
//        data["user4"] = user["user4"];
//        console.log(data);
//        res.end(JSON.stringify(data));
//    });
//})


////delete user
//app.get('/deleteUser', function(req, res) {

//    // First read existing users.
//    fs.readFile("data/users.json", 'utf8', function(err, data) {
//        while (data[0] && data[0] != '{')
//            data = data.replace(data[0], '');
//        data = JSON.parse(data);
//        delete data["user" + 2];

//        console.log(data);
//        res.end(JSON.stringify(data));
//    });
//})

////Show detail -- example: http://127.0.0.1:8081/3
//app.get('/:id', function(req, res) {
//    // First read existing users.
//    fs.readFile("data/users.json", 'utf8', function(err, data) {
//        while (data[0] && data[0] != '{')
//            data = data.replace(data[0], '');
//        users = JSON.parse(data);
//        var user = users["user" + req.params.id];
//        console.log(user);
//        res.end(JSON.stringify(user));
//    });
//})


//var server = app.listen(8081, function() {
//    console.log("Example app listening at 8081");

//})
//----------------------------------------------------------------------------------------------------------------------------------------------

////5 user module by require (and explore command in js module)
//var http = require('http');
//http.createServer(function () {
//    var hello = require('./jsTest/helloModule');
//    hello.sayHello();
//}).listen(8081);
//----------------------------------------------------------------------------------------------------------------------------------------------


////////////////////////////////////////////////////////FROM EXPRESS JS WEB SITE////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////FROM EXPRESS JS WEB SITE////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////FROM EXPRESS JS WEB SITE////////////////////////////////////////////////////////////////////////////////////////

////1:  Get & Callback in order of middleware calling
//// کتابخانه http
//var http = require('http');
//var express = require('express');
//var app = express();

//http.createServer(app).listen(8081);

////****A route can be handled using a more than one callback function (make sure to specify the next object) :
//app.get('/example/b', function (req, res, next) {
//    console.log('response will be sent by the next function ...');
//    next();
//}, function (req, res) {
//    res.send('Hello from B!');
//});


////****A route can be handled using an array of callback functions:
//    var cb0 = function (req, res, next) {
//        console.log('CB0');
//        next();
//    }

//var cb1 = function (req, res, next) {
//    console.log('CB1');
//    next();
//}

//var cb2 = function (req, res) {
//    res.send('Hello from C!');
//}
////ordering of calling function
//app.get('/example/c', [cb0, cb1, cb2]);


////A route can be handled using a combination of array of functions and independent functions:

//var cb0 = function (req, res, next) {
//    console.log('CB0');
//    next();
//}

//var cb1 = function (req, res, next) {
//    console.log('CB1');
//    next();
//}

//app.get('/example/d', [cb0, cb1], function (req, res, next) {
//    console.log('response will be sent by the next function ...');
//    next();
//}, function (req, res) {
//    res.send('Hello from D!');
//});
////---------------------------------------------------------------------------------------------------------------------------------------------------


////2:  Middleware
//// کتابخانه http
//var http = require('http');
//var express = require('express');
//var app = express();
//http.createServer(app).listen(8081);

////****ترتیب نوشته شدن توابع مهم است
//// a middleware with no mount path; gets executed for every request to the app
//app.use(function (req, res, next) {
//    console.log('Time:', Date.now());
//    next();
//});

//// a middleware mounted on /user/:id; will be executed for any type of HTTP request to /user/:id
//app.use('/user/:id', function(req, res, next) {
//    console.log('Request Type:', req.method);
//    next();
//});

//// a middleware sub-stack which prints request info for any type of HTTP request to /user/:id
//app.use('/user/:id', function (req, res, next) {
//    console.log('Request URL:', req.originalUrl);
//    next();
//}, function (req, res, next) {
//    console.log('Request Type:', req.method);
//    next();
//});

//// a middleware sub-stack which handles GET requests to /user/:id
//app.get('/user/:id', function (req, res, next) {
//    console.log('ID:', req.params.id);
//    next();
//}, function (req, res, next) {
//    res.write('User Info ');
//    next();
//});

//// handler for /user/:id which prints the user id
//app.get('/user/:id', function (req, res, next) {
//    console.log('Last Function', req.params.id);
//    //
//    res.end(req.params.id);
//});
//---------------------------------------------------------------------------------------------------------------------------------------------------




//3:  Middleware
var http = require('http');
var express = require('express');
var app = express();
http.createServer(app).listen(8081);
//set path to the views (template) directory
app.set('views', __dirname + '/views');
//set path to static files
app.use(express.static(__dirname + '../public'));
//handle GET requests on /
app.get('/', function(req, res) {
     res.render('v1/index1.jade', { title: 'Shoniz Title' });
});
























//--------------------------------------------------------------------------------------------------------- Previous samples ------------------------------------------


//// 2:
//var http = require('http'); 
//var express = require('express');
//var app = express();
//// موتور نمایش قالب را مشخص می کند
//app.set('view engine', 'jade');
//// مسیر نمایش را مشخص میکند
//app.set('views', './views');
//// صفحه اصلی با کمک تابع زیر تنظیم می شودصفحه
//// index 
//// از این طریق به عنوان صفحه اصلی انتخاب می شود
//app.get('/', function (req, res) { res.render('index'); });
//// masire say0hello az in tarigh be view render mishavad
//app.get('/say-hello', function (req, res) { res.render('hello'); });
//// از این طریق زمانی که مسیر تست درخواست شود مقدار متنی
//// this is a test
//// نمایش داده می شود
//app.get('/test', function (req, res) { res.send('this is a test'); });
//// مانند تابع بالا عمل می کند زمانی که مسیر
////http://127.0.0.1:3000/jade1 // درخواست می شود مقدار اچ تی ام ال نمایش داده می شود
//app.get('/jade1', function (req, res) {
//	res.send("<h3>Jade is a terse and simple templating language .</h3>");
//});
//http.createServer(app).listen(3000, function () { console.log('App started'); });

//// 3:
//var http = require('http');
//var express = require('express');
//var app = express();

//app.set('view engine', 'jade');
//// دایرکتوری ها از طریق مشخص می شوند
//app.set('views', './views');
//// دایرکتوری
////public 
//// بصورت استاتیک از طریق زیر
////برای دسترسی به اپ معرفی شده است
//app.use(express.static('./public'));

//// صفحه اصلی مشخص شده است
//app.get('/', function (req, res) { res.render('index'); });

//// سرور لوکال ساخته روی پورت 3888 منتظر دستور
//http.createServer(app).listen(80, function () { console.log('App started'); });

