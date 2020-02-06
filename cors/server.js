let express=require('express');
let app=express();
app.use(express.static('public'));
app.enable('x-powered-by');
app.use(express.urlencoded({extended:true}));
app.get('/testGET',(request,response)=>{
    response.set('Access-Control-Allow-Origin','http://localhost:63342');
    response.send('服务器返回的get请求数据');
});
app.listen(3000,(err)=>{
    if(!err){
        console.log('测试地址：http://localhost:3000/cors.html');
    }else{
        console.log(err);
    }
});