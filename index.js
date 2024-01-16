// Подключение модуля Express
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true })); //Для принятия данных из формы. Обязательно!!!
app.use(bodyParser.json());//Для принятия данных из формы. Обязательно!!!

// Подключение и использование различных маршрутов (routes):
let index = require('./routes/index');
app.use('/', index);


let article = require('./routes/article');
app.use('/article', article);


let admin = require('./routes/admin');
app.use('/admin', admin);

// Запуск сервера на порту 3000
app.listen(3000, 'localhost');
