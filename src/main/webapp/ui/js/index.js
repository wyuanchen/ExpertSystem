/**
 * Created by yuan on 16-7-12.
 */

function actorOnlickListener() {
    var name=this.innerHTML;
    $("#actorBtn").text(name);
}

function addButtonListener() {
    $("#admin").on("click",actorOnlickListener);
    $("#expert").on("click",actorOnlickListener);

}

window.onload=function () {
    addButtonListener();
}