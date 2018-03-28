function closeImg(){
    document.getElementById("img1").style.display="none";
}
function checkName(){
    var a=document.getElementById("name").value;
    if(a==""){
        document.getElementById("nameSpan").innerHTML="姓名不能为空";
    }else if(a.length<3){
        document.getElementById("nameSpan").innerHTML="姓名不能少于3位";
    }else if(a.length<10){
        document.getElementById("nameSpan").innerHTML="√";
    }else{
        document.getElementById("nameSpan").innerHTML="名字太长";
    }
}
function checkPwd(){
    var a=document.getElementById("pwd").value;
    if(a==""){
        document.getElementById("pwdSpan").innerHTML="密码不能为空";
    }else if(a.length<6){
        document.getElementById("pwdSpan").innerHTML="密码不能少于6位";
    }else if(!isNaN(a)){
        document.getElementById("pwdSpan").innerHTML="密码不能为纯数字";
    }else if(a.length<18){
        document.getElementById("pwdSpan").innerHTML="√";
    }else{
        document.getElementById("pwdSpan").innerHTML="名字太长";
    }
}
function checkPwd2(){
    var a=document.getElementById("pwd").value;
    var b=document.getElementById("pwd2").value;
    if(a!=b){
        document.getElementById("pwd2Span").innerHTML="×";
    }else if(b==""){
        document.getElementById("pwd2Span").innerHTML="密码不能为空";
    }else{
        document.getElementById("pwd2Span").innerHTML="√";
    }
}
function checkPhone(){
    var a=document.getElementById("phoneNum").value;
    var b=/^1\d{10}$/;
    if(b.test(a)){
        document.getElementById("phoneNumSpan").innerHTML="√";
    }else if(a==""){
        document.getElementById("phoneNumSpan").innerHTML="手机号不能为空";
    }else{
        document.getElementById("phoneNumSpan").innerHTML="×";
    }
}
function checkEmail(){
    var a=document.getElementById("email").value;
    var b=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    if (b.test(a)){
        document.getElementById("emailSpan").innerHTML="√";
    }else if(a==""){
        document.getElementById("emailSpan").innerHTML="邮箱不能为空";
    }else{
        document.getElementById("emailSpan").innerHTML="×";
    }
}
function checkAll(){
    var name=document.getElementById("name").value;
    var pwd=document.getElementById("pwd").value;
    var pwd2=document.getElementById("pwd2").value;
    var phoneNum=document.getElementById("phoneNum").value;
    var email=document.getElementById("email").value;
    if(name==""){
        alert("用户名未填");
        return false;
    }else if(pwd==""){
        alert("密码未填");
        return false;
    }else if(pwd2==""){
        alert("确认密码未填");
        return false;
    }else if(phoneNum==""){
        alert("手机号未填");
        return false;
    }else if(email==""){
        alert("邮箱未填");
        return false;
    }
}
