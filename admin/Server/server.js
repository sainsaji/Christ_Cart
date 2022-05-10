const express = require('express')
const mysql = require('mysql2');
var bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 5500
app.use(bodyParser.json());
app.use(cors({
    origin:"*",
}))

app.listen(port,()=>console.log('Listening on port: '+port));
app.use(express.json())

const connection  = mysql.createConnection({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'cucs'
})
connection.connect((err)=>
{
    if(!err)
    {console.log("DB connected");}
    else
    {console.log("Error");}
});

app.get('/display',(req,res)=>
{
    connection.query("select * from marketplaceinstances",(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log("error");
    });
});

app.get('/add/:markid/:name/:desc/:merch',(req,res)=>
{
    var sql="insert into marketplaceinstances SET ?";
    var data={
        marketplaceid:[req.params.markid],
        marketplace_name:req.params.name,
        marketplace_description:req.params.desc,
        merchant_id:req.params.merch};
    var  query=connection.query(sql,data,(err,result)=>
    {
        if(err) throw err;
        res.send("Insert Success");
    });
});

app.get('/delete/:markid',(req,res)=>
{
    var sql=`delete from marketplaceinstances where marketplaceid=${req.params.markid}`;
    var quary=connection.query(sql,(err,result)=>
    {
        if(err) throw err;
        res.send("Delete Success");
    });
});

// app.get('/update/:regno/:event',(req,res)=>
// {
//     var sql=`update blossoms set event='${req.params.event}'where regno=${req.params.regno}`;
//     var quary=connection.query(sql,(err,result)=>
//     {
//         if(err) throw err;
//         res.send("Update Succcess");
//     });

// });