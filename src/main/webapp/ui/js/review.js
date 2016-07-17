/**
 * Created by yuan on 7/15/16.
 */
var experts = [{
    "expertCertificateId": 123123123,
    "name": "yuan",
    "workplace": "华南理工大学",
    "telephone": 18826077178,
    "registerState": "注册",
    "status": "可用",
}, {
    "expertCertificateId": 123123123,
    "name": "yuan",
    "workplace": "华南理工大学",
    "telephone": 18826077178,
    "registerState": "注册",
    "status": "可用",
}, ];
window.onload = function() {
    showExpertList(experts);
    setOnclikListener();
}

function showExpertList(experts) {
    if (experts == null || experts.length < 1)
        return;
    var template = $("#template_tr_expert_info").html();
    for(var i=0;i<experts.length;i++){
      var newItem=fillTemplate(template,experts[i]);
      $("#tbody_expert_list").append(newItem);
    }
}

// 设置按钮点击监听者
function setOnclikListener(){
  // 设置下拉框里面的项目点击事件
  $("body").on("click",".dropdown",setDropDownListResult);
  // 设置搜索按钮的点击事件
  $("body").on("click","#btn_search",searchExperts);
}

// 点击下拉框后更新相应输入框的值
function setDropDownListResult() {
    var value=$(this).text().trim();
    $(this).parents(".input-group").children("input").prop("value",value);
}

//搜索满足一定条件的所有expert
function searchExperts(){
  var field=$("#field_filter").val();
  var status=$("#status_filter").val();
  var url="review.html";
  var params={
    "field":field,
    "status":status,
  }
  gotoUrl(url,params);
}
