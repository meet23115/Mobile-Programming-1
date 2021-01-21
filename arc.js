var express = require('express');   
const app= express();
var mysql = require('mysql');

var bodyparser = require('body-parser');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'studentresult'
});

app.use(bodyparser.json());  
app.use(bodyparser.urlencoded({extended:true}));



app.post("/retrofit/",(req,res,next) => {

    
      var data = req.body;

      var id = data.id;
      var subject = data.subject;
      var name = data.name;
      var outcome = data.outcome;

    
    connection.query("select * from result where id = ? ",[id], function(err,result, fields){
        connection.on('error',(err)=>{
            console.log("[mysql error]",err); 
    });
    


    if(result && result.length){
        res.json("student already exists")
    }
    else{
        var insert_cmd = " insert into result (id,subject,name,outcome) values (?,?,?,?)";
        values  = [id,subject,name,outcome];

        console.log("executing:" +insert_cmd + "  "+values);
        connection.query(insert_cmd, values, (err, results, fields)=>{
            connection.on('err', (err)=>{
                console.log('[mysql error]',err);
            });

            res.json("student details added to database.");
            console.log("student details added to database.");
        });
    }
});

});

var server = app.listen(3014, () => {
    console.log("running at http://localhost:3014")
})