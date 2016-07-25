/**
 * Created by yuan on 7/21/16.
 */
var isPasswordOk=false;
var isPasswordConsistent=false;
var isValidCodeOk=false;
var isUserNameOk=false;
var userType="专家";

window.onload=function () {
    initializeValidCodeImg();
    setUserType();
    addOnclickListen();
    addFocusOutListener();

}

//获取用户类型
function setUserType() {
    var params=getUrlParams();
    var type=params.userType;
    if(type!=null&&type.trim()!=""){
        if(type.trim()=="admin")
            userType="管理员";
    }
}

//设置点击事件监听者
function addOnclickListen() {
    $("body").on("click","#btn_submit_register",submitRegisterUser);
    $("body").on("click","#valid-img2",changeValidCode);

}

//设置输入框失去焦点触发的监听器
function addFocusOutListener() {
    $("body").on("focusout","#user_name",checkUserName);
    $("body").on("focusout","#password",checkPassword);
    $("body").on("focusout","#password2",checkPasswordConsistent);
    $("body").on("focusout","#valid_code",checkValidCode);
}

//检验用户名格式是否正确
function checkUserName() {
    isUserNameOk=false;
    $("#user_name_result_nonavailable").hide();
    $("#user_name_result_available").hide();
    var re=/^[a-zA-Z][\w.]{4,19}$/g;
    var userName=$("#user_name").prop("value");
    if(re.test(userName)){
        // $("#user_name_result_available").show();
        // isUserNameOk=true;
        checkUserNameUnique(userName);
    }else{
        $("#user_name_result_nonavailable").show();
    }
}
//检验用户名是否唯一
function checkUserNameUnique(userName) {
    var url=serverUrl+"checkUserNameUnique";
    var params={
        "userName":userName,
    };
    sendAjaxRequest(url,params,function (result) {
        if(result!=null&&result.status=="ok"){
            isUserNameOk=true;
            $("#user_name_result_available").show();
        }else{
            $("#user_name_result_nonavailable").show();
        }
    });
}


//检验密码格式是否正确
function checkPassword() {
    isPasswordOk=false;
    $("#password_result_avail").hide();
    $("#password_result_nonavail").hide();
    var re=/^[a-zA-Z0-9._@#]{6,20}$/g;
    var password=$("#password").prop("value");
    if(re.test(password)){
        $("#password_result_avail").show();
        isPasswordOk=true;
    }else{
        $("#password_result_nonavail").show();
    }
}

//检验两次密码是否一致
function checkPasswordConsistent() {
    isPasswordConsistent=false;
    $("#password_comfirm_error").hide();
    var password=$("#password").prop("value");
    var password2=$("#password2").prop("value");
    if(password==password2)
        isPasswordConsistent=true;
    else
        $("#password_comfirm_error").show();

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
    if(!isUserNameOk){
        alert("用户名格式错误，请重新填写!");
        return false;
    }else if(!isPasswordOk||!isPasswordConsistent){
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

function initializeValidCodeImg() {
    var url=serverUrl+"getNewValidCode?"
    $("#valid-img2").prop("src",url);
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