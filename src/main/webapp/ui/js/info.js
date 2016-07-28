var num_certificate=1;
var reasonType="拒绝";
window.onload=function () {
    requestExpertByExpertId();
    // setExpertInfo();
    // setOnclickListener();
}


//发送请求获取特定专家的信息
function requestExpertByExpertId() {
    var url=serverUrl+"admin/getExpertById";
    var params=getUrlParams();
    sendAjaxRequest(url,params,setExpertInfo);
}

//进行一系列点击事件的监听者设置
function setOnclickListener() {
    $("body").on("click","#btn_permit",permitApply);
    $("body").on("click","#btn_refuse",showRefuseReasonView);
    $("body").on("click","#btn_end",showEndReasonView);
    $("body").on("click","#btn_submit",submitRefuse);
    $("body").on("click","#btn_cancel",cancelRefuse);
}

function permitApply() {
    $("#fail_reason").hide();
    setReviewResult();
}
function showRefuseReasonView() {
    $(".end").hide();
    $("#fail_reason").show();
    $(".refuse").show();
    reasonType="拒绝";
}
function showEndReasonView() {
    $(".refuse").hide();
    $("#fail_reason").show();
    $(".end").show();
    reasonType="终止";
}


//设置专家个人信息
function setExpertInfo(expertInfo) {
    var template=$("#home_container_template").html();
    $("#home_container_template").remove();
    template=setBasicInfo(template,expertInfo);
    $("#home_container").html(template);
    setQualifications(expertInfo.qualifications);
    setEvaluationField(expertInfo.evaluationFields);
    setWorkExperiences(expertInfo.workExperiences);
    setEvaluationExperiences(expertInfo.evaluationExperiences);
    setAvoidUnits(expertInfo.avoidanceUnits);
    setOnclickListener();
    setFailReason(expertInfo.reason);
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
            var newItem="<tr class='certificate-item certificate_tr'> <td class=\"result  certificate-name\"><input class='form-control must-input certificate-name-input ' readonly value='"+certificateName+"'></td> <td class=\"result  certificate-num\"><input class='form-control must-input certificate-name-input' readonly value='"+certificateId+"'></td> </tr>";
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

//显示拒绝原因
function setFailReason(reason) {
    if(reason!=null){
        var failReason=reason.failReason;
        var reasonType=reason.reasonType;
        if(reasonType=="拒绝"){
            showRefuseReasonView();
            $("#refuse_reason").prop("value",failReason);
        }else{
            showEndReasonView();
            $("#end_reason").prop("value",failReason);
        }
    }
}

//通过专家审核
function setReviewResult() {
    var expertCertificateId=$("#expert_certificate_id").prop("value").trim();
    var certificateValidTime=$("#certificate_valid_time").prop("value").trim();
    var urlParams=getUrlParams();
    var expertId=urlParams.expertId;
    if(expertCertificateId==null||expertCertificateId==""){
        alert("专家证书编号不能为空!");
        return;
    }
    if(certificateValidTime==null||certificateValidTime==""){
        alert("证书有效时间不能为空!");
        return;
    }
    var url=serverUrl+"admin/comfirmExpert";
    var params={
        "expertCertificateId":expertCertificateId,
        "certificateValidTime":certificateValidTime,
        "expertId":expertId,
    };
    sendAjaxRequest(url,params,function (result) {
        if(result!=null&&result.status=="ok")
            window.location.reload();
    });
}

function submitRefuse() {
    var failReason="";
    if(reasonType=="拒绝"){
        failReason=$("#refuse_reason").prop("value").trim();
    }else{
        failReason=$("#end_reason").prop("value").trim();
    }
    var urlParams=getUrlParams();
    var expertId=urlParams.expertId;
    var params={
        "failReason":failReason,
        "reasonType":reasonType,
        "expertId":expertId,
    };
    var url=serverUrl+"admin/setFailReason";
    sendAjaxRequest(url,params,function (result) {
        if(result!=null&&result.status=="ok")
            window.location.reload();
    });
}

function cancelRefuse() {
    $("#refuse_reason").prop("value","");
    $("#end_reason").prop("value","");
    $("#end_reason").hide();
    $("#refuse_reason").hide();
}





var expertInfo={

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
                "workPlace":"华南理工大学",
                "post":"职务",
                "reference":"证明人"
            },
            {
                "startTime":"2014-22-21",
                "endTime":"2014-12-3",
                "workPlace":"华南理",
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
