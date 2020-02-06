let express=require('express');
let app=express();
app.use(express.static('public'));
app.enable('x-powered-by');
app.use(express.urlencoded({extended:true}));
app.get('/testGET',(request,response)=>{
    console.log(request.query);
    let {callback}=request.query;
    let person=[{name:'sun',age:22},{name:'woda',age:19}];
    let str=`${callback}(${JSON.stringify(person)})`;
    console.log(str,typeof str);
    response.send(str);
});
app.listen(3000,(err)=>{
    if(!err){
        console.log('测试地址：http://localhost:3000/jsonp_test.html');
    }else{
        console.log(err);
    }
});