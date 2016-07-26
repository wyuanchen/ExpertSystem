/**
 * Created by yuan on 7/15/16.
 */

window.onload=function () {
    // addInfoBodyButtonListener();
    // addClickListener();
    // addInfoBodyButtonListener();
    // selectView();
    getSumOfSubmitExpert();
}

//获取待审核专家的数量
function getSumOfSubmitExpert() {
    var url=serverUrl+"getSumOfSubmitExpert";
    sendAjaxRequest(url,null,function (result) {
        if(result!=null){
            var num=result.sum;
            $("#num").text(num);
        }
    });
}

