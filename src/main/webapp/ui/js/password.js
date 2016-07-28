/**
 * Created by yuan on 7/15/16.
 */
var isValidCodeOk=false;
var isPasswordOk=false;
var isPasswordConsistent=false;
window.onload=function () {
    initializeValidCodeImg();
    addFocusOutListener();
    addOnclickListener();
}

//添加点击事件监听器
function addOnclickListener() {
    $("body").on("click","#valid_img",changeValidCode);
    $("body").on("click","#btn_submit",requestChangePassword);
    $("body").on("click","#btn_cancel",cancelPasswordChange);
}

//添加控件失去焦点的监听器
function addFocusOutListener() {
    $("body").on("focusout","#valid_code",checkValidCode);
    $("body").on("focusout","#new_password",checkPassword);
    $("body").on("focusout","#again_password",checkPasswordConsistent);
}

function initializeValidCodeImg() {
    var url=serverUrl+"getNewValidCode?"
    $("#valid_img").prop("src",url);
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
            // alert("验证码正确!");
        }else{
            // alert("验证码错误!");
        }
    });
}

//检验密码格式是否正确
function checkPassword() {
    isPasswordOk=false;
    $("#password_result_avail").hide();
    // $("#password_result_nonavail").hide();
    var re=/^[a-zA-Z0-9._@#]{6,20}$/g;
    var password=$("#new_password").prop("value");
    if(re.test(password)){
        // $("#password_result_avail").show();
        isPasswordOk=true;
    }else{
        // $("#password_result_nonavail").show();
    }
}

//检验两次密码是否一致
function checkPasswordConsistent() {
    isPasswordConsistent=false;
    // $("#password_comfirm_error").hide();
    var password=$("#new_password").prop("value");
    var password2=$("#again_password").prop("value");
    if(password==password2)
        isPasswordConsistent=true;
    else{
        // $("#password_comfirm_error").show();
    }

}

//发送请求更改密码
function requestChangePassword() {
    if(!isPasswordOk){
        alert("新密码格式错误");
        return;
    }
    if(!isPasswordConsistent){
        alert("两次密码不一致!");
        return;
    }
    if(!isValidCodeOk){
        alert("验证码错误!");
        return;
    }
    var oldPassword=$("#current_password").prop("value");
    var newPassword=$("#new_password").prop("value");
    oldPassword=md5(oldPassword);
    newPassword=md5(newPassword);
    var url=serverUrl+"changepassword";
    var params={
        "oldPassword":oldPassword,
        "newPassword":newPassword,
    };
    sendAjaxRequest(url,params,handleChangePasswordResult);
}

//对改变密码响应结果进行处理
function handleChangePasswordResult(result) {
    if(result!=null&&result.status=="ok"){
        alert("更改密码成功!");
    }else{
        alert("更改密码失败!");
    }
}

//取消对密码做出的更改
function cancelPasswordChange() {
    location.reload();
}