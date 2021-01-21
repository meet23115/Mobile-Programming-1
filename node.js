var express = require('express');  
const app= express();
var mysql = require('mysql');

var bodyparser = require('body-parser');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'quizadmin'
});

app.use(bodyparser.json());  
app.use(bodyparser.urlencoded({extended:true}));



app.post("/register/",(req,res,next) => {
   

   
      var data = req.body;
      var categories = data.categories;
      var sets = data.sets;
      var question = data.question;

    
    connection.query("select * from admin where categories = ? ",[categories], function(err,result, fields){
        connection.on('error',(err)=>{
            console.log("[mysql error]",err); 
    });
    



    if(result && result.length){
        res.json("category already exists")
    }
    else{
        var insert_cmd = " insert into admin (categories, sets, question) values (?,?,?)";
        values  = [categories, sets, question];

        console.log("executing:" +insert_cmd + "  "+values);
        connection.query(insert_cmd, values, (err, results, fields)=>{
            connection.on('err', (err)=>{
                console.log('[mysql error]',err);
            });

            res.json("category has been added");
            console.log("category has been added");
        });
    }
});

});

    app.post("/login/",(req,res,next) => {
    
      var data = req.body;
      var categories = data.categories;
      var sets = data.sets;
      var question = data.question;
      
    connection.query("select * from admin where categories = ?",[categories], function(err,result, fields){
        connection.on('error',(err)=>{
            console.log("[mysql error]",err); 
    });

    if(result && result.length){
        console.log(result);

        if(categories==result[0].categories){
            res.json("yes !! this categories is here");
            res.end;
        }
    }
    else{
        res.json("categories is not found");
        res.end;
    }
});
});

var server = app.listen(3001, () => {
    console.log("running at http://localhost:3001")
});