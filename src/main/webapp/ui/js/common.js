/**
 * Created by yuan on 16-7-12.
 */


function sendAjaxRequest(url,params,callBack){
    $.ajax({
        type:'POST',
        dataType:'json',
        url:url,
        contentType:"application/json; charset=utf-8",
        data:JSON.stringify(params),
        // data:params,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success:function(data){
            if(data!=null){
                callBack(data);
            }else{
                //alert('error!');
            }
        },
        // error:function(){
        // 	var data={
        // 		'userName':'yuan',
        // 		"movieName":"movie one",
        // 		"session":1,
        // 		"seatNum":20
        // 	};
        // 	handleResult(data);
        // }
    });
}


function getUrlParams(){
    var url=window.location.search;
    var params=new Object();
    if(url.indexOf('?')!=-1){
        var str=url.substr(1);
        strs=str.split('&');
        for(var i=0;i<strs.length;i++){
            var key=strs[i].split('=')[0];
            var value=strs[i].split('=')[1];
            params[key]=value;
        }
    }
    return params;
}

function fillTemplate(template,jsonData){
    return template.replace(/\$\w+\$/gi,function(matchs){
        var value=jsonData[matchs.replace(/\$/g, "")];
        return (value+"")=="undefined"?"":value;
    });
}
var serverIP="http://localhost:8080/";
var serverUrl=serverIP+"cinema/";