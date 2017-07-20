/**
 * Created by Administrator on 2015/8/17.
 */
//var temp_product = document.body.offsetWidth / 1920;
//    window.onload = function(){
//console.log(window.screen.availWidth);
//window.onload=function(){
//
//
//}
//function getWindowHeight() {
//    var pageHeight = window.innerHeight;
//    if (typeof pageHeight != "number") {
//        if (document.compatMode == "number") {
//            pageHeight = document.documentElement.clientHeight;
//        } else {
//            pageHeight = document.body.clientHeight;
//        }
//    }
//    return pageHeight;
//}
//    function getWindowWidth(){
//        var pageWidth = window.innerWidth;
//        if(typeof pageWidth != "number"){
//            if(document.compatMode == "number"){
//                pageWidth = document.documentElement.clientWidth;
//            }else{
//                pageWidth = document.body.clientWidth;
//            }
//        }
//        return pageWidth;
//    }

//    var  win_height=getWindowHeight();
//    var avail = getWindowWidth();
    var  win_height=1072*(document.body.clientWidth/1920);
    var avail = document.body.clientWidth;
    document.getElementById('slide-1').style.width = avail + "px";
    document.getElementById('slide-1').style.height = (parseInt(win_height) - 141) + "px";
    document.getElementById('slide-2').style.width = avail + "px";
    document.getElementById('slide-2').style.height = (parseInt(win_height) - 141) + "px";
    document.getElementById('slide-3').style.width = avail + "px";
    var side_width = document.getElementById('slide-2').style.width;
    document.getElementById('slide-3').style.height = (parseInt(win_height) - 141) + "px";
    (function () {
        var lis = document.getElementById('pro_center').getElementsByTagName('li');
        for (var i = 0, len = lis.length; i < len; i++) {
           lis[i].style.width = avail + "px";
        }
    })();
document.getElementById("pro_center").style.width = avail+ "px";
document.getElementById("saloon_one").style.width = avail + "px";
document.getElementById("saloon_two").style.width = avail + "px";
document.getElementById("saloon_three").style.width = avail + "px";
document.getElementById("bed_one").style.width = avail + "px";
document.getElementById("bed_two").style.width = avail + "px";
document.getElementById("bed_three").style.width = avail + "px";
document.getElementById("pro_one").style.width = avail + "px";
document.getElementById("pro_two").style.width = avail + "px";
document.getElementById("pro_center_saloon").style.width = avail*3 + "px";
document.getElementById("pro_center_bed").style.width = avail*3 + "px";
document.getElementById("pro_center_res").style.width = avail*2 + "px";
function chose_target(){
        document.getElementById("sitroom").src="../images/sittingroom_target.jpg";
        document.getElementById("bedroom").src="../images/bedroom_target.jpg";
        document.getElementById("restaurant").src = "../images/restaurant_target.jpg";
        document.getElementById('slide-1').className = 'case_box hiddenbox';
        document.getElementById('slide-2').className = 'case_box hiddenbox';
        document.getElementById('slide-3').className = 'case_box hiddenbox'; 
        document.getElementById("pro_left_solo").className = 'pro_left_solo hiddenbox';
        document.getElementById("pro_left_cnm").className = 'pro_left_solo hiddenbox';
        document.getElementById("pro_left_box").className = 'pro_left_solo hiddenbox';
}
function choose(obj){
    var id=obj.id;
    chose_target();
    var data_status=obj.getAttribute('data-status');
    if (id == "choose_one") {
//
//        document.getElementById('pro_left_cnm').style.display = "none";
//        document.getElementById('pro_left_cnm').style.display = "none";
        document.getElementById("sitroom").src="../images/sitroom.jpg";
        document.getElementById('slide-1').className = 'case_box';
        document.getElementById("pro_left_solo").className = 'pro_left_solo';
       obj.setAttribute('data-status','1');
    }
    if(id=="choose_two" && data_status=='0'){
        document.getElementById("pro_left_solo").setAttribute('hover_status', '1');
        document.getElementById("bedroom").src="../images/bed.jpg";
        document.getElementById('slide-2').className = 'case_box';
        document.getElementById("pro_left_cnm").className = 'pro_left_solo';
        obj.setAttribute('data-status', '1');
        Effect.slider({
            'target': 'slide-2',
            'showMarkers': true,
            'showControls': false,
            'showMarkersStyle': 11,
            'hideMarkersNum': true,
            'showMarkers_target': 'pro_left_cnm',
            'autoMs': 3000
        });
       
    }
    else if (id == "choose_two" && data_status == '1') {
        document.getElementById("bedroom").src = "../images/bed.jpg";
        document.getElementById('slide-2').className = 'case_box';
        document.getElementById("pro_left_cnm").className = 'pro_left_solo';
    }
    if(id=="choose_three" && data_status=='0'){
        document.getElementById("pro_left_solo").setAttribute('hover_status', '1');
        document.getElementById("restaurant").src = "../images/restaurant.jpg";
        document.getElementById('slide-3').className = 'case_box';
        document.getElementById("pro_left_box").className = 'pro_left_solo';
        obj.setAttribute('data-status', '1');
        Effect.slider({
            'target': 'slide-3',
            'showMarkers': true,
            'showControls': false,
            'showMarkersStyle': 12,
           'hideMarkersNum': true,
            'showMarkers_target': 'pro_left_box',
            'autoMs': 3000
        });
    }
    else if (id == "choose_three" && data_status == '1') {
        document.getElementById("restaurant").src = "../images/restaurant.jpg";
        document.getElementById('slide-3').className = 'case_box';
        document.getElementById("pro_left_box").className = 'pro_left_solo';
    }
}
setTimeout(function(){
    Effect.slider({
        'target': 'slide-1',
        'showMarkers': true,
        'showMarkersStyle': 10,
        'showControls': false,
        'showMarkers_target': 'pro_left_solo',
        'hideMarkersNum': true,
        'autoMs':5000
    });
    var obj_E=document.getElementById("pro_left_solo");
    if(obj_E.getAttribute('hover_status')!=1){
        document.getElementById("pro_left_solo").className = 'pro_left_solo';
    }
}, 0);