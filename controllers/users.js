var userModel=require('../models/Users');

exports.getUserById= function(request,response){
    var user=getUser(request.params.id);
    response.render('profile',{
        title:"User Profile",
        user:user
    });
}  //title n user ie the data written in the form attribute and value

exports.getUsers =function(){
    return userModel.users;
    
}

var getUser=function(id){
    for(var i=0; i<userModel.length; i++){
        if(users[i].id==id)
            return userModel.users[i];
    }
}
var compareAuth= function(username,password){
    for(var i=0;i<userModel.users.length;i++)
    {
        if(userModel.users[i].username==username && userModel.users[i].password==password)
        {
            return userModel.users[i];
           // return true;
        }
    }
     return false;
}
exports.postLogin=function(request,response){
    var result= compareAuth(request.body.email,request.body.password);
    if(result)
    {
        response.send("Login Successful. Hi"+result.name);
        
    }
    else{
        
        response.send("Failed");
    }
}
exports.getSignUp=function(request,response){
    
   // response.sendfile('./views/signup.html');
    response.render('signup',{
        title:"Signup"
    });
}
exports.getLogin=function(request,response){
    
    //response.sendfile('./views/login.html'); 
    response.render('login',{
                    title:"Login"
                    });
}
exports.getAbout=function(request,response){
    
    response.render('aboutus',{
                    title:"Aboutus"
                    });
}