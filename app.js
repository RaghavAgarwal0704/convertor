const express =require("express"),
    app=express(),
    request=require("request");

app.get("/",(req,res)=>{
    var url="http://data.fixer.io/api/latest?access_key=${process.env.apiKey}";
    request(url,(error,response,body)=>{
        var obj={"rupee":"INR","usd":"USD","pound":"GBP","euro":"EUR","yen":"JPY","riyal":"SAR"};
        var data=JSON.parse(body);
        res.render("index.ejs",{rates:data.rates,obj:obj});
    });
    
});

app.listen(3000,()=>{
    console.log("Listening to the server");
});
