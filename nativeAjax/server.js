let express=require('express');
let app=express();
app.use(express.static('public'));
app.disable('x-powered-by');
app.use(express.urlencoded({extended:true}));
app.get('/testGET',(request,response)=>{
    console.log(request.query);
   response.send('服务器返回的GET请求信息');
});
app.post('/testPOST',(request,response)=>{
    console.log(request.query);
    console.log(request.body);
    response.send('服务器返回的POST请求信息');
});
app.listen('3000',(err)=>{
    if(!err){
        console.log('测试地址:http://localhost:3000/ajax_get.html');
        console.log('测试地址:http://localhost:3000/ajax_post.html');
    }else{
        console.log(err);
    }
})