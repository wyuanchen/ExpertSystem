/**
 * Created by yuan on 7/21/16.
 */
var isPasswordOk=true;
var isValidCodeOk=true;
var isUserName=true;
var userType="专家";

window.onload=function () {
    addOnclickListen();
}


//设置点击事件监听者
function addOnclickListen() {
    $("body").on("click","#btn_submit_register",submitRegisterUser);
    
}


//提交注册用户申请
function submitRegisterUser() {
    if(checkDataFormat()){
        var userName=$("#user_name").prop("value");
        var password=$("#password").prop("value");
        var user={
            "userName":userName,
            "password":password,
            "userType":userType,
        };
        var url=serverUrl+"register";
        sendAjaxRequest(url,user,handleRegisterResult);
    }
}

//检查用户名，密码，验证码格式
function checkDataFormat() {
    if(!isUserName){
        alert("用户名格式错误，请重新填写!");
        return false;
    }else if(!isPasswordOk){
        alert("密码格式错误，请重新填写!");
        return false;
    }else if(!isValidCodeOk){
        alert("验证码错误，请重新填写!");
        return false;
    }
    return true;
}


//处理发送注册请求后对其响应的处理
function handleRegisterResult(result) {
    if(result==null||result.status=='fail'){
        alert("注册失败!");
        return;
    }
    alert("注册成功!");
    if(userType=='专家'){
        window.location.href='home.html';
    }else if(userType='管理员'){
        window.location.href='manage.html';
    }
}

