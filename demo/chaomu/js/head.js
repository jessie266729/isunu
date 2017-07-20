window.onload = function() {
    var temp_bl = window.screen.availWidth / 1931;
    var web_height = document.getElementById("head_top").offsetHeight;
    var jc_midHeight = temp_bl * web_height;
    document.getElementById("line_height").style.height = jc_midHeight + "px";
//    document.getElementById("line_height").style.lineHeight = jc_midHeight + "px";
    document.getElementById("ind_top_yuan").style.marginLeft = temp_bl * 400+"px";
    document.getElementById("ind_top_yuan").style.marginTop = temp_bl * 92+"px";
    document.getElementById("ind_top_yuan").style.width = temp_bl * 121+"px";
    document.getElementById("head_top").style.width = temp_bl * document.getElementById("head_top").offsetWidth+"px";
    var url = window.location.href;
    str = location.search.replace("?","");
    if(str=="1"){
        choose(document.getElementById("choose_one"));
    }else if(str=="2"){
        choose(document.getElementById("choose_two"));
    }else if(str=="3"){
        choose(document.getElementById("choose_three"));
    }else if(str=="4"){
        console.log(123);
        chose_target(0);
    }else if(str=="5"){
        chose_target(1);
    }else if(str=="6"){
        chose_target(2);
    }else if(str=="7"){
        chose_target(0);
    }else if(str=="8"){
        chose_target(1);
    }
};

var oUl=document.getElementById('line_height');
//oUl.onmoueover=function(e) {
//    var ev=e||event;
//    var target=ev.target;
//    var oLi=this.getElementsByTagName('li');
//    var i;
//    for(i=0; i<oLi.length; i++) {
//        oLi[i].index=i;
//    }
//    if(target.nodeName=='LI') {
//        switch(target.index) {
//            case 0:
//
//                break;
//            case 1:
//                break;
//            case 2:
//                break;
//            case 3:
//                break;
//            case 4:
//                break;
//        }
//    }
//}






//家具
var t,tt;
var flag=false;
function fox(){
    clearTimeout(t);
    if(flag) {
        tt=setTimeout(function(){
            flag=false;
            document.getElementById('ind_main_question').style.display = "none";
            document.getElementById('ind_main_about').style.display = "none";
            document.getElementById('ind_main_nav').style.display = "block";
        },200)
    }else {
        flag = true;
        document.getElementById('ind_main_question').style.display = "none";
        document.getElementById('ind_main_about').style.display = "none";
        document.getElementById('ind_main_nav').style.display = "block";
    }
}
function con(){
    clearTimeout(tt);
    t = setTimeout(function(){
        document.getElementById('ind_main_nav').style.display = "none";
        flag=false;
    },200);

}
//品牌
function fox_one(){
    clearTimeout(t);
    if(flag) {
        tt=setTimeout(function(){
            flag=false;
            document.getElementById('ind_main_nav').style.display = "none";
            document.getElementById('ind_main_question').style.display = "none";
            document.getElementById('ind_main_about').style.display = "block";
        },200)
    }else {
        flag = true;
        document.getElementById('ind_main_nav').style.display = "none";
        document.getElementById('ind_main_question').style.display = "none";
        document.getElementById('ind_main_about').style.display = "block";
    }
}
function con_one(){
    clearTimeout(tt);
    t = setTimeout(function(){
        document.getElementById('ind_main_about').style.display = "none";
        flag=false;
    },200);
}
//联系我们
function fox_two(o){
    clearTimeout(t);
    if(flag) {
        tt=setTimeout(function(){
            flag=false;
            document.getElementById('ind_main_nav').style.display = "none";
            document.getElementById('ind_main_about').style.display = "none";
            document.getElementById('ind_main_question').style.display = "block";
        },200)
    }else {
        flag = true;
        document.getElementById('ind_main_nav').style.display = "none";
        document.getElementById('ind_main_about').style.display = "none";
        document.getElementById('ind_main_question').style.display = "block";
    }
}
function con_two(){
    clearTimeout(tt);
    t = setTimeout(function(){
        document.getElementById('ind_main_question').style.display = "none";
        flag=false;
    },200);
}
