var express=require('express'); //require meanin pulling that file
var hbs=require('hbs');
var path= require('path');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
//User Model
var homeController = require('./controllers/home');
var usersController=require('./controllers/users')  //to use file in users folder  //if inside some folder then ./foldername/nameoffile
var app=express();  //creats server

app.set('views', path.join(__dirname,'views')); //search files in views
app.set('view engine','html');      //tells where view folders are
app.engine('html',hbs.__express);
app.use(bodyParser());      //does parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: false
    }));
app.use(express.static('public'));          //use consol.log(users.getUsers()) inorderto debug
//Routes
//Mongoose
mongoose.connect('mongodb://localhost:27017/');
mongoose.connection.on('error', function(){
    console.error('Mongodb is not connected. Check if mongod is running');
});
app.get('/',homeController.index);

app.get('/users/:id',usersController.getUserById);

app.get('/login',usersController.getLogin);

app.post('/login',usersController.postLogin);

app.get('/signup',usersController.getSignUp);     //sendfile sends only file and not data i e y we use render


app.get('/aboutus',usersController.getAbout);

app.listen(3000);