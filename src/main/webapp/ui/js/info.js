
window.onload=function () {
    setOnclickListener();
}

function setOnclickListener() {
    $("body").on("click","#btn_permit",permitApply);
    $("body").on("click","#btn_refuse",showRefuseReasonView);
    $("body").on("click","#btn_end",showEndReasonView);
}

function permitApply() {
    $("#fail_reason").hide();
}
function showRefuseReasonView() {
    $(".end").hide();
    $("#fail_reason").show();
    $(".refuse").show();
}
function showEndReasonView() {
    $(".refuse").hide();
    $("#fail_reason").show();
    $(".end").show();
}