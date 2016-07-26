/**
 * Created by yuan on 16-7-12.
 */
var isValidCodeOk=false;
var userType="专家";

window.onload=function () {
    addButtonListener();
    addFocusOutListener();
    initializeValidCodeImg();
}


function actorOnlickListener() {
    var name=this.innerHTML;
    $("#actorBtn").text(name);
    var url="register.html?userType="
    if(name=="专家"){
        url=url+"expert";
        userType="专家";
    }
    else{
        url=url+"admin";
        userType="管理员";
    }
    $("#signup").prop("href",url);
}

function addButtonListener() {
    $("#admin").on("click",actorOnlickListener);
    $("#expert").on("click",actorOnlickListener);
    $("body").on("click","#btn_signin",requestSignin);
    $("body").on("click","#valid-img",changeValidCode);
}

function addFocusOutListener() {
    $("body").on("focusout","#valid_code",checkValidCode);
}

//请求登陆
function requestSignin() {
    var userName=$("#userName").prop("value");
    var password=$("#password").prop("value");
    if(userName==null||userName.trim()==""){
        alert("用户名不能为空!");
        return;
    }
    if(password==null||password.trim()==""){
        alert("密码不能为空!");
        return;
    }
    if(isValidCodeOk==false){
        alert("验证码错误!");
        return;
    }
    userName=userName.trim();
    password=password.trim();
    password=encryptPassword(password);
    var url=serverUrl+"login";
    var user={
        "userName":userName,
        "password":password,
        "userType":userType,
    };
    sendAjaxRequest(url,user,handleSigninResult);
}

//加密密码
function encryptPassword(password) {
    return password;
}

//处理登陆返回结果
function handleSigninResult(result) {
    if(result==null||result.status=="fail"){
        alert("登陆失败");
    }else if(result.status="ok"){
        alert("登陆成功!");
        if(userType=='专家'){
            window.location.href='home.html';
        }else if(userType='管理员'){
            window.location.href='manage.html';
        }
    }
}


function initializeValidCodeImg() {
    var url=serverUrl+"getNewValidCode?"
    $("#valid-img").prop("src",url);
}

//请求新的验证码
function changeValidCode() {
    var url=$(this).prop("src");
    url=url+Math.random();
    $(this).prop("src",url);
}

//检验验证码
function checkValidCode() {
    isValidCodeOk=false;
    var validCode=$(this).prop("value");
    var url=serverUrl+"checkValidCode";
    var params={
        "validCode":validCode,
    };
    sendAjaxRequest(url,params,function (result) {
        if(result!=null&&result.status=="ok"){
            isValidCodeOk=true;
            alert("验证码正确!");
        }else{
            alert("验证码错误!");
        }
    });
}