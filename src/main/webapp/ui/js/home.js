/**
 * Created by yuan on 7/13/16.
 */
var isValidCodeOk=false;
var isPasswordOk=false;
var isPasswordConsistent=false;

var expertInfoSample={

    "expertCertificateId":123123123,
    "certificateValidTime":"2014-02-01",
    "status":"可用",
    "name":"yuan",
    "sex":"男",
    "birthday":"1995-01-06",
    "party":"群众",
    "organization":"公安局",
    "certificateType":"居民身份证",
    "certificateId":"444444444444444444",
    "maxEducation":"博士研究生",
    "academicDegree":"博士",
    "title":"教授",
    "post":"教授",
    "diplomaId":"163434",
    "employmentDuration":"5年以上",
    "isRetire":"否",
    "isPartTime":"否",
    "workplace":"华南理工大学",
    "address":"广东广州市",
    "postcode":510061,
    "telephone":18826077178,
    "email":"linsdf@163.com",
    "homephone":"0663-2423433",
    "university":"华南理工大学",
    "businessSkill":"业务专长",
    "achievement":"工作业绩",
    "others":"其他说明",
    "picturePath":"http://ww2.sinaimg.cn/crop.0.0.885.885.1024/6934a102jw8elmhozigdnj20ol0olmyv.jpg",

    "qualifications":  //资格证书以及编号
        [
            {
                "qualificationName":"证书1",
                "qualificationId":"123456"
            },
            {
                "qualificationName":"证书2",
                "qualificationId":"123456"
            },
            {
                "qualificationName":"证书3",
                "qualificationId":"333333"
            }
        ],
    "evaluationFields":
        [
            "2.小学教育评估",
            "6.高校教育评估"
        ],
    "evaluationExperiences":
        [
            {
                "experienceTime":"2014-23-23",
                "missionName":"2011年广东省中职教育评估",
                "missionDescription":"2011年广东省中职教育评估",
                "missionType":"评估"
            },
            {
                "experienceTime":"2014-23-23",
                "missionName":"2011年广东省中职教育评估",
                "missionDescription":"2011年广东省中职教育评估dfdf",
                "missionType":"评估"
            }
        ],
    "workExperiences":
        [
            {
                "startTime":"2014-22-21",
                "endTime":"2014-12-3",
                "workplace":"华南理工大学",
                "post":"职务",
                "reference":"证明人"
            },
            {
                "startTime":"2014-22-21",
                "endTime":"2014-12-3",
                "workplace":"华南理",
                "post":"职务",
                "reference":"证明人"
            }
        ],
    "avoidanceUnits":
        [
            {
                "unitName":"单位名称",
                "isWorkPlace":"是"
            },
            {
                "unitName":"单位名称",
                "isWorkPlace":"是"
            }
        ]

}


var num_certificate=1;
var isPermitModiry=false;

function btn_add_certificate() {
    num_certificate++;
    var newItem="<tr class='certificate-item certificate_tr qualification_tr'> <td class=\"result  certificate-name\"><input class='form-control must-input certificate-name-input ' ></td> <td class=\"result  certificate-num\"><input class='form-control must-input certificate-name-input' ></td> <td> <button type=\"button\" class=\"btn btn-danger  btn-delete-certificate btn_modify\">删除资格证书</button> </td> </tr>";
    $(".certificate_tr").eq(-1).after(newItem);
    $("#certificate-title").attr("rowspan",num_certificate);

}
function btn_delete_certificate() {
    num_certificate--;
    $("#certificate-title").attr("rowspan",num_certificate);
    $(this).parent().parent().remove();
}
function btn_delete_certificate_first() {
    if(num_certificate==1){
        $("#certificate-item-first input").prop("value","");
    }else{
        num_certificate--;
        var nextLine=$(this).parent().parent().next();
        var certificateName=nextLine.find(".certificate-name-input").prop("value");
        var certificateNum=nextLine.find(".certificate-num-input").prop("value");
        nextLine.remove();
        $(this).parent().parent().find(".certificate-name-input").prop("value",certificateName);
        $(this).parent().parent().find(".certificate-num-input").prop("value",certificateNum);
        $("#certificate-title").attr("rowspan",num_certificate);
    }
}
function delete_evaluation_experience() {
    $(this).parent().parent().remove();
}

function add_evaluation_experience() {
    var newItem=$("#evaluation_tr_template").html();
    newItem=newItem.replace(/\$\w*\$/gi,"");
    $("#body_evaluation_experience").append(newItem);
}

function delete_work_experience() {
    $(this).parent().parent().remove();
}
function add_work_experience() {
    var newItem="<tr class='work_experience_tr'> <td class='work-experience-td start_time'><input class='form-control must-input'></td> <td class='work-experience-td end_time'><input class='form-control must-input'></td> <td class='work-experience-td workplace'><input class='form-control must-input'></td> <td class='work-experience-td post'><input class='form-control must-input'></td> <td class='work-experience-td  reference'><input class='form-control must-input'></td> <td class='work-experience-td operation'> <button type='button' class='btn btn-danger btn_delete_work_experience_body  btn_modify'>删除</button> </td> </tr>";
    $("#work-experience-body").append(newItem);
}
function delete_avoid_unit() {
    $(this).parent().parent().remove();
}

function add_avoid_unit() {
    // var newItem="<tr> <td class='result-unit-name'> <input class='form-control'> </td> <td class='result-is-work-place'> <div class='input-group'> <input type='text' class='form-control'> <div class='input-group-btn'> <button type='button' class='btn btn-defaultdropdown-toggle  btn_modify' data-toggle='dropdown'> <span class='caret'></span> </button> <ul class='dropdown-menu pull-right'> <li><a href='#'>是</a></li> <li><a href='#'>否</a></li> </ul> </div></div></td> <td> <button class='btn btn-danger btn_delete_unit  btn_modify'>删除</button> </td> </tr>";
    var newItem=$("#avoid_unit_tr_template").html();
    newItem=newItem.replace(/\$\w*\$/gi,"");
    $("#avoid_unit_tbody").append(newItem);
}

function openEvaluationField() {
    $("#field_error").hide();
    var fields=$("#evaluation_field").text().trim();
    fields=fields.split(",");
    var fieldBoxs=$("input[name='field']");

    // alert(fieldBoxs.attr("name"));
    for(var i=0;i<fieldBoxs.length;i++){
        // alert(fieldBoxs.eq(i).attr("name"));
        fieldBoxs.eq(i).prop("checked",false);
    }
    for(var i=0;i<fields.length;i++){
        // alert(fields[i]);
        var index=fields[i].substr(0,1);
        // alert(index);
        // alert(index-1);
        fieldBoxs.eq(index-1).prop("checked",true);
    }

}

function submitEvaluationField() {
    var fieldBoxs=$("input[name='field']");
    var sum=0;
    var value="";
    fieldBoxs.each(function () {
        if($(this).prop("checked")==true){
            sum++;
            value=value+$(this).parent().text().trim()+",";
        }
    });
    if(sum>2){
        $("#field_error").show();
    }else{
        if(value.length>1)
            value=value.substr(0,value.length-1);
        $("#evaluation_field").text(value);
        $("#myModal").modal("hide");
    }
}

function setDropDownListResult() {
    var value=$(this).text().trim();
    $(this).parents(".input-group").children("input").prop("value",value);
}


function addInfoBodyButtonListener() {
    $("body").on("click",".btn-add-certificate",btn_add_certificate);
    $("body").on("click",".btn-delete-certificate",btn_delete_certificate);
    $("body").on("click",".btn-delete-certificate-first",btn_delete_certificate_first);
    $("body").on("click",".btn_delete_experience",delete_evaluation_experience);
    $("body").on("click","#btn-add-evaluation-experience",add_evaluation_experience);
    $("body").on("click",".btn_delete_work_experience_body",delete_work_experience);
    $("body").on("click","#btn-work-experience",add_work_experience);
    $("body").on("click",".btn_delete_unit",delete_avoid_unit);
    $("body").on("click","#btn_add_avoid_unit",add_avoid_unit);
    $("body").on("click","#btn_open_field",openEvaluationField);
    $("body").on("click","#btn_submit_field",submitEvaluationField);
    $("body").on("click","#btn_start_modify",permitModifyExpertInfo);
    $("body").on("click","#btn_save_modify",saveExpertInfoMidification);
    $("body").on("click",".dropdown",setDropDownListResult);
    $("body").on("click","#btn_submit_modify",submitExpertStatus);
}

function saveExpertInfoMidification() {
    banModifyExpertInfo();
    requestUpdateExpertInfo();
    setPicture();

}

function permitModifyExpertInfo(){
    // addInfoBodyButtonListener();
    isPermitModiry=true;
    $(".btn_modify").removeAttr("disabled");
    $("input,textarea").removeAttr("readonly");
}
function banModifyExpertInfo() {
    $(".btn_modify").prop("disabled","disabled");
    $("input,textarea").attr("readonly","");
}


function hideOthersView() {
    // $(".info-body").hide();
    $("#home_container").children().hide();
}

function setBasicInfo(template,info) {
    return fillTemplate(template,info);
}
function setQualifications(info) {
    if(info==null)
        return;
    var length=info.length;
    if(length>0){
        $("#certificate-item-first input").eq(0).prop("value",info[0].qualificationName);
        $("#certificate-item-first input").eq(1).prop("value",info[0].qualificationId);
        for(var i=1;i<length;i++){
            num_certificate++;
            var certificateName=info[i].qualificationName;
            var certificateId=info[i].qualificationId;
            var newItem="<tr class='certificate-item certificate_tr  qualification_tr'> <td class=\"result  certificate-name\"><input class='form-control must-input certificate-name-input ' readonly value='"+certificateName+"'></td> <td class=\"result  certificate-num\"><input class='form-control must-input certificate-name-input' readonly value='"+certificateId+"'></td> <td> <button type=\"button\" class=\"btn btn-danger  btn-delete-certificate   btn_modify\"  disabled='disabled' >删除资格证书</button> </td> </tr>";
            $(".certificate_tr").eq(-1).after(newItem);
            $("#certificate-title").attr("rowspan",num_certificate);
        }
    }
}
function setEvaluationField(info) {
    if(info==null||info.length<1)
        return;
    var value="";
    for(var i=0;i<info.length;i++){
        value=value+info[i]+",";
    }
    value=value.substr(0,value.length-1);
    $("#evaluation_field").text(value);
}

function setWorkExperiences(workExperiences) {
    if(workExperiences==null||workExperiences.length<1)
        return;
    var workExperienceTrTemplate=$("#work_experience_tr_template").html();
    for(var i=0;i<workExperiences.length;i++){
        var newItem=fillTemplate(workExperienceTrTemplate,workExperiences[i]);
        $("#work-experience-body").append(newItem);
    }
}
function setEvaluationExperiences(evaluationExperiences) {
    if(evaluationExperiences==null||evaluationExperiences.length<1)
        return;
    var template=$("#evaluation_tr_template").html();
    for(var i=0;i<evaluationExperiences.length;i++){

        // "experienceTime":"2014-23-23",
        //     "missionName":"2011年广东省中职教育评估",
        //     "missionDescription":"2011年广东省中职教育评估",
        //     "missionType":"评估"
        var newItem=fillTemplate(template,evaluationExperiences[i]);
        $("#body_evaluation_experience").append(newItem);
    }

}
function setAvoidUnits(avoidUnits) {
    if(avoidUnits==null||avoidUnits.length<1)
        return;
    var template=$("#avoid_unit_tr_template").html();
    for(var i=0;i<avoidUnits.length;i++){
        var newItem=fillTemplate(template,avoidUnits[i]);
        $("#avoid_unit_tbody").append(newItem);
    }
}

function setExpertInfo(expertInfo) {
    var template=$("#home_container_template").html();
    template=setBasicInfo(template,expertInfo);
    $("#home_container").html(template);
    setQualifications(expertInfo.qualifications);
    setEvaluationField(expertInfo.evaluationFields);
    setWorkExperiences(expertInfo.workExperiences);
    setEvaluationExperiences(expertInfo.evaluationExperiences);
    setAvoidUnits(expertInfo.avoidanceUnits);
    banModifyExpertInfo();
    checkExpertStatus(expertInfo.status);
}

function showModifyExpertInfoList() {
    hideOthersView();
    $(".navi li").removeClass("active");
    $("#li_expertInfo").addClass("active");
    $(".info-body").show();
    requestExpert();
    // setExpertInfo();
    // banModifyExpertInfo();
}
function showIndexInfo() {
    hideOthersView();
    $(".navi li").removeClass("active");
    $("#li_indexInfo").addClass("active");
    $("#index_panel").show();
}
function showPasswordModifyInfo() {
    hideOthersView();
    $(".navi li").removeClass("active");
    $("#li_password").addClass("active");
    $("#password_panel").show();
    setOnclickListenerOfPasswordModifyView();
    setFocusOutListenerOfPasswordModifyView();
    initializeValidCodeImg();
}

function addClickListener() {
    $("body").on("click","#btn_modify_expert_info",ModifyExpertInfoOnclick);
    $("body").on("click","#btn_show_index",indexInfoOnclick);
    $("body").on("click","#btn_modify_password",passwordModifyOnclick);

}
function ModifyExpertInfoOnclick() {
    window.location.href="home.html?viewId=2";
}
function indexInfoOnclick() {
    window.location.href="home.html?viewId=1";
}
function passwordModifyOnclick() {
    window.location.href="home.html?viewId=3";
}

function selectView() {
    var params=getUrlParams();

    if(params.viewId==null)
        showIndexInfo();
    switch (params.viewId){
        case '1':
            showIndexInfo();
            break;
        case '2':
            showModifyExpertInfoList();
            break;
        case '3':
            showPasswordModifyInfo();
            break;
        default:
            showIndexInfo();
    }
}

// function test() {
//     var url="http://localhost:8080/test";
//     var param=
//     {
//         // "expert":
//         // {
//         "name": "yuan",
//         // "sex": "男",
//         "evaluationExperiences":
//             [
//                 {"experienceId":1,"experienceTime":"2014-23-42"},
//                 {"experienceId":2,"experienceTime":"2014-23-42"}
//             ]
//         // },
//         // "evaluationExperiences":
//         //     [
//         //         {"experienceId":1,"experienceTime":"2014-23-42"},
//         //         {"experienceId":2,"experienceTime":"2014-23-42"}
//         //     ]
//     };
//     sendAjaxRequest(url,param,function (data) {
//         alert(data.name);
//     });
// }


// function testCookie() {
//     var url="http://localhost:8080/cookie2";
//     var param={"name":2};
//     sendAjaxRequest(url,null,function (data) {
//         alert(data);
//     });
// }


window.onload=function () {
    // addInfoBodyButtonListener();
    // setCookie();
    addClickListener();
    addInfoBodyButtonListener();
    setOnchangeListener();
    selectView();
}

function setCookie() {
    var url=serverUrl+"setCookie";
    sendAjaxRequest(url,null,null);
}

function requestExpert() {
    var url=serverUrl+"getExpert";
    sendAjaxRequest(url,null,setExpertInfo);
}

function requestUpdateExpertInfo() {
    var url=serverUrl+"updateExpert";
    var params=wrapParams();
    sendAjaxRequest(url,params,function () {
        alert("save success!");
    });

}

function wrapParams() {
    var expert={}
    var basicAttributes=$(".basic_info");
    for(var i=0;i<basicAttributes.length;i++){
        var key=basicAttributes.eq(i).attr("id");
        var value=basicAttributes.eq(i).prop("value");
        expert[key]=value;
    }
    var evaluationFields=wrapEvaluationFields();
    expert["evaluationFields"]=evaluationFields;
    var qualifications=wrapQualifications();
    expert["qualifications"]=qualifications;
    var evaluationExperiences=wrapEvaluationExperiences();
    expert["evaluationExperiences"]=evaluationExperiences;
    var workExperiences=wrapWorkExperiences();
    expert["workExperiences"]=workExperiences;
    var avoidanceUnits=wrapAvoidanceUnits();
    expert["avoidanceUnits"]=avoidanceUnits;

    return expert;
}

function wrapEvaluationFields() {
    var fieldsValue=$("#evaluation_field").text().trim();
    var evaluationFields=fieldsValue.split(",");
    return evaluationFields;
}

function wrapQualifications() {
    var qualifications=[];
    var qualificationTrs=$(".qualification_tr")
    for(var i=0;i<qualificationTrs.length;i++){
        var qualificationName=qualificationTrs.eq(i).find("input").eq(0).prop("value").trim();
        var qualificationId=qualificationTrs.eq(i).find("input").eq(1).prop("value").trim();
        if(qualificationName==""||qualificationId=="")
            continue;
        qualifications.push(
            {
                "qualificationName":qualificationName,
                "qualificationId":qualificationId
            }
        );
    }
    return qualifications;
}
function wrapEvaluationExperiences() {
    var evaluationExperiences=[];
    var evaluationExperiencesTrs=$(".evaluation_experiences_tr");
    for(var i=0;i<evaluationExperiencesTrs.length-1;i++){
        var item=evaluationExperiencesTrs.eq(i).find("input");
        var experienceTime=item.eq(0).prop("value").trim();
        var missionName=item.eq(1).prop("value").trim();
        var missionDescription=item.eq(2).prop("value").trim();
        var missionType=item.eq(3).prop("value").trim();
        if(experienceTime==""&&missionName==""&&missionDescription==""&&missionType=="")
            continue;
        evaluationExperiences.push(
            {
                "experienceTime":experienceTime,
                "missionName":missionName,
                "missionDescription":missionDescription,
                "missionType":missionType
            }
        );
    }
    return evaluationExperiences;
}

function wrapWorkExperiences() {
    var workExperiences=[];
    var workExperienceTrs=$(".work_experience_tr");
    for(var i=0;i<workExperienceTrs.length-1;i++){
        var item=workExperienceTrs.eq(i).find("input");
        var startTime=item.eq(0).prop("value").trim();
        var endTime=item.eq(1).prop("value").trim();
        var workplace=item.eq(2).prop("value").trim();
        var post=item.eq(3).prop("value").trim();
        var reference=item.eq(4).prop("value").trim();
        if(startTime==""&&endTime==""&&workplace==""&&post==""&&reference=="")
            continue;
        workExperiences.push(
            {
                "startTime":startTime,
                "endTime":endTime,
                "workplace":workplace,
                "post":post,
                "reference":reference
            }
        );
    }
    return workExperiences;
}

function wrapAvoidanceUnits() {
    var avoidanceUnits=[];
    var avoidUnitTrs=$(".avoid_unit_tr");
    for(var i=0;i<avoidUnitTrs.length-1;i++){
        var item=avoidUnitTrs.eq(i).find("input");
        var unitName=item.eq(0).prop("value").trim();
        var isWorkPlace=item.eq(1).prop("value").trim();
        if(unitName==""&&isWorkPlace=="")
            continue;
        avoidanceUnits.push(
            {
                "unitName":unitName,
                "isWorkPlace":isWorkPlace
            }
        );
    }
    return avoidanceUnits;
}


//验证码方面的函数

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
//关于修改密码界面的点击事件监听者设置
function setOnclickListenerOfPasswordModifyView(){
    $("body").on("click","#valid_img",changeValidCode);
    $("body").on("click","#btn_submit",requestChangePassword);
    $("body").on("click","#btn_cancel",cancelPasswordChange);
}

//关于修改密码界面的控件失去焦点时触发的监听者设置
function setFocusOutListenerOfPasswordModifyView() {
    $("body").on("focusout","#valid_code",checkValidCode);
    $("body").on("focusout","#new_password",checkPassword);
    $("body").on("focusout","#again_password",checkPasswordConsistent);
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

//提交
function submitExpertStatus() {
    saveExpertInfoMidification();
    var url=serverUrl+"submitInfo";
    sendAjaxRequest(url,null,function (result) {
        if(result!=null&&result.status=="ok")
            alert("提交成功!");
        else
            alert("提交失败!");
        location.reload();
    });
}

//为头像上传设置实时预览监听器
function setOnchangeListener() {
    $("body").on("change","#img_upload",previewFile);
}

//实时预览上传图片
function previewFile() {
    var preview=$("#picture");
    var file=$("#img_upload")[0].files[0];
    var reader=new FileReader();
    reader.addEventListener("load",function () {
       preview.prop("src",reader.result);
    },false);
    if(file){
        reader.readAsDataURL(file);
    }
}

//上传图片
function setPicture() {
    var file=$("#img_upload")[0].files[0];
    if(file==null)
        return;
    var formData=new FormData();
    formData.append('file',file);
    var url=serverUrl+"uploadPic";
    $.ajax({
        url:url,
        type:'POST',
        cache:false,
        data:formData,
        processData:false,
        contentType:false,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
    });
}

//检查专家审核状态
function checkExpertStatus(status) {
    if("审核中"==status){
        $("#btn_submit_modify").prop("disabled","disabled");
    }
}