var express =require("express");
var app=express();
var request=require("request");
app.get("/",function(req,res){
    var url="http://data.fixer.io/api/latest?access_key=f64f065eec7c9d5ad12ed9cc3669f1cf";
    request(url,(error,response,body)=>{
        var obj={"rupee":"INR","usd":"USD","pound":"GBP","euro":"EUR","yen":"JPY","riyal":"SAR"};
        var data=JSON.parse(body);
        res.render("index.ejs",{rates:data.rates,obj:obj});
    });
    
});


app.listen(3000,function(){
    console.log("Listening to the server");
});