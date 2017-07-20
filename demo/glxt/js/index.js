/**
 *author:jessieLee
 *data:2016/8/25
 **/
var init = {
    //框架ID
    body_container: $("#body_container"),
    content_north: $("#content_north"),
    content_west: $("#content_west"),
    content_center: $("#content_center"),
    content_main: $("#content_main"),

    //树ID
    tree_ul0: $("#tree_ul0"),
    tree_ul1: $("#tree_ul1"),
    tree_ul2: $("#tree_ul2"),

    //一级菜单ID
    menu_one: $("#menu_one"),

    //tabID
    tabs_list: $("#tabs_list"),

    user_info: $("#user_info"),

    //退出登录
    login_out: $("#login_out"),

    //面包屑
    locate_menu: $("#locate_menu"),
    locate_tree: $("#locate_tree"),

    //显示时间
    view_time: $("#view_time")
};

//一级菜单id前缀
var menuOneLiIdBefore = "menu_one_li";
//二级菜单name 前缀
var menuTwoLiBefore = "menu_two_li";
//一级菜单a标签class前缀
var menuOneAClassBefore = "index";
//存储所有二级菜单li长度
var menuTwoAllWidth = {};
//存储当前显示二级菜单li的长度
var menuTwoNowWidth = [];
//二级菜单左移的下标
var menuTwoMoveIndex = 0;
//一级菜单选中下标
var menuOneNowWidth = [];
//一级菜单左移下标
var menuOneMoveIndex = 0;
//存放打开的tabID,以及默认打开的列表页
var tabsId = [];
//存放打开的子tabID
var tabSonId = {};
//存放当前是否有父id
var nowParentId = "";
//当前打开tab的id
var nowTabId = "";

var menuOneChooseIndex = null;
var menuOnePadding = 8;//一级菜单的padding 在计算一级菜单li的宽度时  需要*2加上
var menuTwoMaxLeft = 90;//在可见区域最大长度的情况下，第一个二级菜单margin-left的标准
var menuTwoArrowWidth = 18;//二级菜单箭头宽度
var menuTwoPadding = 5;//二级菜单的padding 在计算二级菜单li的宽度时  需要*2加上
var menuTwoUlViewMaxWidth = 0; //二级菜单中ul可见区域的最大宽度
var menuOneUlViewMaxWidth = 0;

//判断单双击树节点
var isSingleClick = true;
//第一次打开tab
var isFirst = true;
//右侧树的宽度记录
var treeAreaWidth = 0;
//鼠标是否移开二级菜单
var isMoveOutMenuTwo = true;

//是否只显示一棵树
var onlyOneTreeView = true;
//是否只显示一个tab
var onlyOneTabView = true;
//移开菜单栏 二级菜单消失前停留的时长
var menuTwoGoneTime = 2;

var urlClick = {'frame_id_search_0':'table-full.html',
    'frame_id_search_1':'table-out.html',
    'frame_id_search_2':'table-lock-columns.html',
    'frame_id_search_3':'table-new-dialog.html',
    'frame_id_search_4':'table-no-content.html',
    'frame_id_search_5':'table-checkbox.html',
    'frame_id_search_6':'table-lock-columns2.html',
    'frame_id_search_7':'table-update.html',
    'frame_id_search_8':'table-two-lock-title.html'
};

pageInit();
pageClick();

//页面初始化
function pageInit() {
    //拉动面板  列表动态变化
    $('body').mousedown(function(){
        treeAreaWidth = init.content_west.width();
    }).mouseup(function(){
        setTimeout(function(){
            if(treeAreaWidth != init.content_west.width()){
                if(window.frames[nowTabId].document.body.innerHTML)
                    window.frames[nowTabId].listChangeWidth();
            }
        },100);
    });

    //鼠标移开两秒 二级菜单栏消失
    $('.menu-two').on('mouseout',function(){
        var $this = $(this);
        isMoveOutMenuTwo = true;
    }).on('mouseover',function(){
        isMoveOutMenuTwo = false;
    });
    $('.menu-one-ul>.menu-one-li').on('mouseover',function(){
        var $this = $(this);
        if($this.hasClass('active')){
            isMoveOutMenuTwo = false;
        }
    }).on('mouseout',function(){
        var $this = $(this);
        if($this.hasClass('active')){
            isMoveOutMenuTwo = true;
        }
    }).on('click',function(){
        isMoveOutMenuTwo = false;
    });

    var menuTwoTimeCounter = 0;
    setInterval(function(){
        if(isMoveOutMenuTwo){
            menuTwoTimeCounter++;
            if(menuTwoTimeCounter > menuTwoGoneTime)
            {
                menuTwoTimeCounter = 0;
                var target = $('.menu-one-ul>.active');
                target.find('.menu-two').addClass('hide');
                target.removeClass('active');
                menuOneChooseIndex = null;
                isMoveOutMenuTwo = false;
            }
        }else{
            menuTwoTimeCounter = 0;
        }
    },1000);
    //
    setInterval(function(){
        //二级菜单栏处显示时间
        init.view_time.empty().append(getNowDate());
    },1000);
    //
    //
    //初始化面板tab
    getTab();

    //页面默认显示的列表
    openTab('frame_id_search_0','table-full.html','列表填满区域');

    //页面大小变化
    resizeWindow();
    $(window).resize(resizeWindow);

    //一级菜单初始化
    oneMenuInit();

    //二级菜单初始化
    twoMenuPositon(menuOneChooseIndex);

    //初始化右侧树数据
    if(onlyOneTreeView){
        getTree(init.tree_ul0,'tree_data1.json');
        getTree(init.tree_ul1,'tree_data1.json');
        $('.tree-single-view').addClass('hide');
    }else{
        getTree(init.tree_ul0,'tree_data1.json');
        getTree(init.tree_ul1,'tree_data1.json');
        getTree(init.tree_ul2,'tree_data1.json');
        $('.tree-single-view').removeClass('hide');
    }
}

//页面点击事件
function pageClick() {
    //点击一级菜单
    $('.menu-one-ul>li>a').on('click', function () {
        $('.menu-one-li').removeClass('active');
        $(this).parent().addClass('active');
        $('.menu-two').removeClass('hide').addClass('hide');
        $(this).parent().find('.menu-two').removeClass('hide');
        menuOneChooseIndex = $(this).attr('class').replace(menuOneAClassBefore, '');
        menuTwoMoveIndex = 0;
        twoMenuPositon(menuOneChooseIndex);
    });
    //点击二级菜单时
    $('.menu-two-ul>li>a').on('click',function(){
        if(onlyOneTabView && !isEmptyObject(tabSonId)){
            $.messager.alert("提示","亲，您当前存在未处理的操作哦！","info");
            return;
        }
        $('.menu-two-li').removeClass('active');
        $(this).parent().addClass('active');
        //todo 获取打开tab的数据
        var tabId = $(this).attr('frameId');
        var url = urlClick[tabId];
        var title = $(this).text();
        openTab(tabId,url,title);
    });
    //点击右边树tab
    $('.title-box').on('click',function(){
        $('.title-box').removeClass('active');
        $(this).addClass('active');
        var treeIndex = $(this).attr('name').replace('title','');
        $('.tree-detail').removeClass('hide').addClass('hide');
        $('#tree_panel'+treeIndex).removeClass('hide');
    });
    //点击树收起展开按钮
    $('.tree-show-hide-bg').on('click',function(){
        var isTrue = $(this).hasClass('open');
        if(isTrue){
            $(this).removeClass('open');
            $(this).find('.show-hide-arrow').css('background','url("../images/menu-two-arrow.png") -6px 0 no-repeat');
            init.content_main.layout('collapse','west');

        }else{
            $(this).addClass('open');
            $(this).find('.show-hide-arrow').css('background','url("../images/menu-two-arrow.png") 0 0 no-repeat');
            init.content_main.layout('expand','west');

        }
        var timer = setInterval(function(){
            var target = $('.layout-expand-west');
            if(target.length > 0){
                target.css('visibility','hidden');
                window.clearInterval(timer);
                if(isTrue){
                    init.content_center.css('margin-left','20px');
                    $('.layout-panel-center').css('left',0);
                }else{
                    init.content_center.css('margin-left','0');
                }
            }
        },100);
        setTimeout(function(){
            window.frames[nowTabId].listChangeWidth();
        },500);
        setTimeout(function(){
            var target = $('.layout-expand-west');
            if(target.length > 0){
                target.css('display','none');
            }
        },1000);
    });
    //点击管理员
    init.user_info.on('click',function(){
        var target = $(this).find('.select-list');
        target.removeClass('hide');
        return false;
//        if(target.hasClass('hide')){
//            target.removeClass('hide');
//        }else{
//            target.addClass('hide');
//        }
    });
    $('body').off('click',closeUserPanel).on('click',closeUserPanel);

    //点击注销
    init.login_out.on('click',function(){
        $.messager.confirm({title:"提示",msg:"是否确认退出系统？",ok:"确定",cancel:"取消",
            fn:function(r){
                if(r){
                    window.location.href = 'login.html';
                }
            }
        });
    })
}

function isEmptyObject(e) {
    var t;
    for (t in e)
        return !1;
    return !0
}

function closeUserPanel(){
    var target = init.user_info.find('.select-list');
    target.removeClass('hide');
    if(!target.hasClass('hide')){
        target.addClass('hide');
    }
}

//获取当前时间
function getNowDate(){
    var xq = ["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
    var mydate = new Date();
    var month = mydate.getMonth()+1;
    var day = mydate.getDate();
    var hour = mydate.getHours();
    var min = mydate.getMinutes();
    var sec = mydate.getSeconds();
    month = month<10?'0'+month:month;
    day = day<10?'0'+day:day;
    hour = hour<10?'0'+hour:hour;
    min = min<10?'0'+min:min;
    sec = sec<10?'0'+sec:sec;
    return mydate.getFullYear() + "年"+month+"月"+day+"日"+"&nbsp;"+hour+":"+min+":"+sec+"&nbsp;"+xq[mydate.getDay()];
}

//获得tab的初始化
function getTab(){
    init.tabs_list.tabs({
        onSelect:function(title,index){
            nowTabId = tabsId[index];
            init.locate_menu.text(title);
            setTimeout(function(){
                if(!isFirst && window.frames[nowTabId].document.body.innerHTML)
                    window.frames[nowTabId].listChangeWidth();
                initListPageSize(nowTabId);
                isFirst = false;
            },100);
        },
        onClose: function(title,index){
            if(tabSonId[tabsId[index]]){
                var getTabId = tabSonId[tabsId[index]];
                for(var i = 0 ; i < tabsId.length ; i++){
                    if(tabsId[i] == getTabId){
                        init.tabs_list.tabs('select',i);
                        break;
                    }
                }
            }
            delete tabSonId[tabsId[index]];
            tabsId.splice(index,1);
            //delete tabsId['tab'+index];
        },
        onBeforeClose: function(title,index){

            if($(this).tabs('tabs').length <= 1)
                return false;
        },
        onAdd: function(title,index){
            tabsId.push(nowTabId);
            if(nowParentId && nowParentId!=""){

                tabSonId[nowTabId] = nowParentId;
            }
            nowParentId = "";
        }
    });
}

//打开tab
/*
tabId: 一个打开tab页的唯一标示   url:打开tab的链接路径  title:显示在打开tab title栏的标题
 */
function openTab(tabId,url,title,parentId){
    //判断是否已经打开过该tab
    for(var i = 0 ; i < tabsId.length ; i++){
        if(tabsId[i] == tabId){
            init.tabs_list.tabs('select', i);
            return;
        }
    }
    if(parentId){
        nowParentId = parentId;
    }
    nowTabId = tabId;
    var html = '<iframe id="'+tabId+'" name="'+tabId+'" src="'+url+'" style="width: 100%;height: 100%;border: none;" frameborder="no" border="0"></iframe>';
    init.tabs_list.tabs('add',{
        title: title,
        closable:!onlyOneTabView,
        selected: true,
        content: html
    });
    if(!parentId){
        initListPageSize(tabId);
        if(onlyOneTabView){
            init.tabs_list.tabs('close', 0);
        }
    }
}
/*
计算列表页的长宽  获得列表页的布局
iframeid: 即tabid   某个tab的唯一标示
 */
function initListPageSize(iframeId){
    //初始化列表的高度
    if(iframeId && $(document.getElementById(iframeId)).length>0 ){
        var timeCounter = 0;
        var bodyTimer = setInterval(function(){
            timeCounter ++;
            if(document.getElementById(iframeId) && document.getElementById(iframeId).contentWindow.document.body){
                var getFrameBody = $(document.getElementById(iframeId).contentWindow.document.body);
                var footer_area_height = parseInt(getFrameBody.find('#footer_area').height());
                if(footer_area_height == 45 || footer_area_height == 85){
                    getFrameBody.off('click',closeUserPanel).on('click',closeUserPanel);
                    window.clearInterval(bodyTimer);
                    var search_area_height = parseInt(getFrameBody.find('#search_area').height());
                    var table_area = getFrameBody.find('#table_area');
                    table_area.css('height',($(document.getElementById(iframeId)).height()-search_area_height-footer_area_height)+'px');
                }
            }
            if(timeCounter > 20){
                window.clearInterval(bodyTimer);
            }
        },200);
    }
}

//页面大小变化
function resizeWindow() {
    //获取屏幕的长宽
    var screenWidth = parseInt($(window).width());
    if(screenWidth >= 1200){
        $('.menu-one').css('max-width','512px');
        $('.menu-area').css('width','712px');
        $('.menu-one-ul .menu-two').css('width','747px');
        $('.menu-two-area').css('max-width','711px');
        menuTwoUlViewMaxWidth = 711;
        menuOneUlViewMaxWidth = 512;
    }else{
        $('.menu-one').css('max-width','320px');
        $('.menu-area').css('width','520px');
        $('.menu-one-ul .menu-two').css('width','555px');
        $('.menu-two-area').css('max-width','519px');
        menuTwoUlViewMaxWidth = 519;
        menuOneUlViewMaxWidth = 320;
    }
    var screenHeight = parseInt($(window).height());
    //设置容器的高度
    init.body_container.css({"height": screenHeight + "px"});
    //设置树按钮padding-top
    var marginTop = (parseInt((screenHeight-100)/2)-59);
    $('.tree-show-hide-bg').css('margin-top',marginTop<0?0:marginTop+"px");
    initListPageSize(nowTabId);
    setTimeout(function(){
        if(window.frames[nowTabId].document.body.innerHTML)
            window.frames[nowTabId].listChangeWidth();
    },600);
    twoMenuPositon(menuOneChooseIndex);

    var menuOneUl = init.menu_one;
    var menuOneLiNodes = $('.menu-one-li');
    var activeWidth = 0;
    for(var i = 0 ; i < menuOneLiNodes.length ; i++){
        if($(menuOneLiNodes[i]).hasClass('active')){
            break;
        }
        activeWidth += menuOneNowWidth[parseInt($(menuOneLiNodes[i]).attr('id').replace(menuOneLiIdBefore,''))];
    }
    if((activeWidth + 20) < menuOneUlViewMaxWidth){
        menuOneUl.find('.menu-one-ul>.active .menu-two').removeClass('hide');
        twoMenuPositon(menuOneChooseIndex);
    }else{
        menuOneUl.find('.menu-one-ul>.active .menu-two').addClass('hide');
    }
}

//一级菜单长度是否超过规定显示的最小长度
function oneMenuInit(){

    var menuOneView = init.menu_one;
    var menuOneNodes = menuOneView.find('.menu-one-li');
    var menuOneUlWidth = 0;
    for(var i = 0 ; i < menuOneNodes.length;i++){
        menuOneUlWidth += $(menuOneNodes[i]).width() + menuOnePadding *2;
        menuOneNowWidth.push($(menuOneNodes[i]).width() + menuOnePadding *2);
    }
    //menuOneView.find('.menu-one-ul').css('width', menuOneUlWidth + 'px');
    //如果超出可见区域范围  显示箭头
    if(menuOneUlWidth > menuOneUlViewMaxWidth){
        menuOneView.parent().find('.menu-one-right').addClass('menu-one-right-hover').on('click', moveMenuOneRight);
        menuOneView.parent().find('.menu-one-left').addClass('menu-one-left-hover').on('click', moveMenuOneLeft);
    }else{
        menuOneView.parent().find('.menu-one').css('width',menuOneUlWidth+'px')
    }
}

//二级菜单位置
/*
number: 选中的一级菜单的下标
 */
function twoMenuPositon(number) {
    //获得初始化的一级菜单li
    var menuOneLi = $('#' + menuOneLiIdBefore + number);

        menuTwoAllWidth['index' + number] = [];
        //根据二级菜单设置二级菜单ul的长度
        var menuTwoNodes = menuOneLi.find('.menu-two-li');//获得二级菜单所有Li
        var menuTwoUlWidth = 0;
        for (var i = 0; i < menuTwoNodes.length; i++) {
            menuTwoUlWidth += $(menuTwoNodes[i]).width() + menuTwoPadding * 2;
            menuTwoAllWidth['index' + number].push($(menuTwoNodes[i]).width() + menuTwoPadding * 2);
        }
//        menuOneLi.find('.menu-two').css('width',(menuTwoUlWidth+18*2)+'px');
        menuOneLi.find('.menu-two-area').css('width', menuTwoUlWidth + 'px');

    menuTwoNowWidth = menuTwoAllWidth['index' + number];

    //如果二级菜单长度超出可见范围区  出现箭头
    if (menuTwoUlWidth > menuTwoUlViewMaxWidth) {
        menuOneLi.find('.menu-two-area').css('width',menuTwoUlViewMaxWidth+'px');
        menuOneLi.find('.menu-two-right').addClass('menu-two-right-hover').off('click',moveMenuTwoRight).on('click', moveMenuTwoRight);
        menuOneLi.find('.menu-two-left').addClass('menu-two-left-hover').off('click',moveMenuTwoLeft).on('click', moveMenuTwoLeft);
//        menuOneLi.find('.menu-two').css('width',(612)+'px');
    }else{
        menuOneLi.find('.menu-two-right').removeClass('menu-two-right-hover').off('click',moveMenuTwoRight);
        menuOneLi.find('.menu-two-left').removeClass('menu-two-left-hover').off('click',moveMenuTwoLeft);
        menuOneLi.find('.menu-two').css('width',(menuTwoUlWidth+18*2)+'px');
    }

    var menuTwoWidth = parseInt(menuOneLi.find('.menu-two').width());//二级菜单的长度

    //选中的一级菜单距离父元素左边的距离
    //var menuOneLeft = parseInt(menuOneLi.offset().left - $('.menu-area').offset().left);
    var menuOneLeft = 47;
    var menuOneLiNodes = $('.menu-one-li');
    for(var j = 0 ; j < menuOneLiNodes.length ; j++){
        if($(menuOneLiNodes[j]).hasClass('active')){
            break;
        }
        menuOneLeft += menuOneNowWidth[parseInt($(menuOneLiNodes[j]).attr('id').replace(menuOneLiIdBefore,''))];
    }
    //右对齐
    var menuTwoRightSame = parseInt(menuTwoWidth - menuOneLi.width() - menuOnePadding - 2 * menuTwoArrowWidth);
    var leftDistance = 0;
    //如果右对齐超出左边设定第一个二级菜单margin-left90的标准  以90显示  否则右对齐
    if (menuTwoRightSame > (menuOneLeft + 43 )) {
        leftDistance = menuOneLeft + 43;
    } else {
        leftDistance = menuTwoRightSame;
    }
    menuOneLi.find('.menu-two').css('margin-left', (-leftDistance) + 'px');
    menuOneLi.addClass('hasWidth');
}

//一级菜单点击右边按钮向左移动
function moveMenuOneRight(){
    //获得初始化的一级菜单li
    var menuOneUl = init.menu_one;
    var moveBeginX = 0;
    //var activeID = parseInt(menuOneUl.find('.menu-one-ul>.active').attr('id').replace(menuOneLiIdBefore,''));

    var menuOneLiNodes = $('.menu-one-li');
    var newFirst = $(menuOneLiNodes[0]).clone(true);
    newFirst.find('.menu-two').addClass('hide');
    newFirst.insertAfter($(menuOneLiNodes[menuOneLiNodes.length - 1]));
    var timer = setInterval(function () {
        moveBeginX += 2;
        if (moveBeginX > (menuOneNowWidth[menuOneMoveIndex])) {

            $(menuOneLiNodes[0]).remove();
            menuOneLiNodes = $('.menu-one-li');
            moveBeginX = 0;
            menuOneMoveIndex = parseInt($(menuOneLiNodes[0]).attr('id').replace(menuOneLiIdBefore,''));

            var activeWidth = 0;
            for(var i = 0 ; i < menuOneLiNodes.length ; i++){
                if($(menuOneLiNodes[i]).hasClass('active')){
                    break;
                }
                activeWidth += menuOneNowWidth[parseInt($(menuOneLiNodes[i]).attr('id').replace(menuOneLiIdBefore,''))];
            }
            if((activeWidth + 20) < menuOneUlViewMaxWidth){
                menuOneUl.find('.menu-one-ul>.active .menu-two').removeClass('hide');
                twoMenuPositon(menuOneChooseIndex);
            }else{
                menuOneUl.find('.menu-one-ul>.active .menu-two').addClass('hide');
            }
            window.clearInterval(timer);
        }
        menuOneUl.find('.menu-one-ul').css('margin-left', (-moveBeginX) + 'px');
    }, 2);
}

//一级菜单点击左边按钮向右移动
function moveMenuOneLeft(){
    var menuOneUl = init.menu_one;
    var menuOneLiNodes = $('.menu-one-li');
    var lastNode = $(menuOneLiNodes[menuOneLiNodes.length - 1]);
    var lastNodeIndex = parseInt(lastNode.attr('id').replace(menuOneLiIdBefore,''));//获得一级菜单最后一个节点li的下标
    lastNode.find('.menu-two').addClass('hide');
    lastNode.clone(true).insertBefore($(menuOneLiNodes[0]));
    var moveBeginX = -menuOneNowWidth[lastNodeIndex];
    menuOneUl.find('.menu-one-ul').css('margin-left', (-menuOneNowWidth[lastNodeIndex]) + 'px');
    var timer = setInterval(function () {
        moveBeginX += 2;
        if (moveBeginX > 0) {
            $(menuOneLiNodes[menuOneLiNodes.length - 1]).remove();
            menuOneLiNodes = $('.menu-one-li');
            moveBeginX = 0;
            var activeWidth = 0;
            for(var i = 0 ; i < menuOneLiNodes.length ; i++){
                if($(menuOneLiNodes[i]).hasClass('active')){
                    break;
                }
                activeWidth += menuOneNowWidth[parseInt($(menuOneLiNodes[i]).attr('id').replace(menuOneLiIdBefore,''))];
            }
            if((activeWidth + 20) < menuOneUlViewMaxWidth){
                menuOneUl.find('.menu-one-ul>.active .menu-two').removeClass('hide');
                twoMenuPositon(menuOneChooseIndex);
            }else{
                menuOneUl.find('.menu-one-ul>.active .menu-two').addClass('hide');
            }
            window.clearInterval(timer);
        }
        menuOneUl.find('.menu-one-ul').css('margin-left', (moveBeginX) + 'px');
    }, 2);
}

//二级菜单点击右边的按钮向左移动
function moveMenuTwoRight() {
    //获得初始化的一级菜单li
    var menuTwoUl = $('#' + menuOneLiIdBefore + menuOneChooseIndex).find('.menu-two-area');
    var moveBeginX = 0;
    var menuTwoLiNodes = menuTwoUl.find('.menu-two-li');
    var newFirst = $(menuTwoLiNodes[0]).clone(true);
    newFirst.insertAfter($(menuTwoLiNodes[menuTwoLiNodes.length - 1]));
    var timer = setInterval(function () {
        moveBeginX += 2;
        if (moveBeginX > (menuTwoNowWidth[menuTwoMoveIndex])) {
            $(menuTwoLiNodes[0]).remove();
            menuTwoLiNodes = menuTwoUl.find('.menu-two-li');
            moveBeginX = 0;
            menuTwoMoveIndex = parseInt($(menuTwoLiNodes[0]).attr('name').replace(menuTwoLiBefore,''));
            window.clearInterval(timer);
        }
        menuTwoUl.find('.menu-two-ul').css('margin-left', (-moveBeginX) + 'px');
    }, 5);
}

//二级菜单点击左边的按钮向右移动
function moveMenuTwoLeft() {
    var menuTwoUl = $('#' + menuOneLiIdBefore + menuOneChooseIndex).find('.menu-two-area');
    var menuTwoLiNodes = menuTwoUl.find('.menu-two-li');
    var lastNode = $(menuTwoLiNodes[menuTwoLiNodes.length - 1]);
    var lastNodeIndex = parseInt(lastNode.attr('name').replace(menuTwoLiBefore,''));//获得一级菜单最后一个节点li的下标
    lastNode.clone(true).insertBefore($(menuTwoLiNodes[0]));
    var moveBeginX = -menuTwoNowWidth[lastNodeIndex];
    menuTwoUl.find('.menu-two-ul').css('margin-left', (-menuTwoNowWidth[lastNodeIndex]) + 'px');
    var timer = setInterval(function () {
        moveBeginX += 2;
        if (moveBeginX > 0) {
            $(menuTwoLiNodes[menuTwoLiNodes.length - 1]).remove();
            menuTwoLiNodes = $('.menu-two-li');
            moveBeginX = 0;
            window.clearInterval(timer);
        }
        menuTwoUl.find('.menu-two-ul').css('margin-left', (moveBeginX) + 'px');
    }, 5);
}

//右侧树
/*
o:初始化树的节点  如$("#tree_ul1"),url:数据的链接地址  可换成data:data
 */
function getTree(o,url){
    o.tree({
        url: url,
        lines: false,
        checkbox: false,
        onClick: function(node){
            $('.tree-node-selected').removeClass('tree-node-selected');
            // 点击中间结点自动展开与折叠当前结点
            var $this = $(this);
            setTimeout(function(){
                if(isSingleClick && node.children){
                    if (node.state == 'closed') {
                        $this.tree('expand', node.target);
                    }else{
                        $this.tree('collapse', node.target);
                    }
                }
                setTimeout(function(){
                    isSingleClick = true;
                },400);

            },300);

        },
        onDblClick: function(node){
            //todo 双击树节点是的操作
            isSingleClick = false;
            var getText = getLocateText($(this),node);
            init.locate_tree.text(getText);

        }
    });
}

//获取选中节点的父节点的text
function getLocateText(treeObj,node){
    var nodeText = node.text;
    var parentNode = treeObj.tree('getParent',node.target);
    if(parentNode){
        var getText = getLocateText(treeObj,parentNode);
        if(getText != ""){
            nodeText = getText + '/' + nodeText;
        }
    }
    return nodeText;
}

//右下角提示
/*
mgs: 提示内容  title: 提示框title
 */
function messageTs(msg,title){
    $.messager.show({
        title: title || "消息提示",
        msg: msg
    });
}

var dlg_div = "";
function openUrlForm(options,btn_diy){

    //参数使用说明(子页面能够调用父页面的事件函数)
    /*openUrlForm({
     id: 'dlg_id', //自定义ID,防止重复添加DOM
     url: '2.html', //需要放入弹框的页面URL,此页面中设置好form属性,自动提交第一个form
     title: '表单提交', //模态框标题
     width: 800,        //模态框宽度
     height: 600,        //模态框高度
     }, []);*/


    //只创建一次DIV
    if($('#'+options.id).length == 0){
        dlg_div = $('<div id="'+options.id+'"></div>').css({
            overflow : 'hidden'
        });
        var iframe = $('<iframe id="'+options.id+'_iframe" name="'+options.id+'_iframe"  frameborder="0"></iframe>').css({
            width : '100%',
            height : '100%'
        });
        $('body').append(dlg_div);
        dlg_div.append(iframe);
    }else{
        dlg_div = $('#'+options.id);
    }
    var default_btn = [{
        text:'保存',
        handler:function(){
            var form = $(window.frames[options.id+'_iframe'].document).find('form');
            if(form.length > 0){
                $(form[0]).form('submit', {
                    onSubmit: function(){
                        var isValid = $(form[0]).form('validate');
                        return isValid;
                    },
                    success: function(data){
                    },
                    error : function(){
                    }
                });
            }else{
                $.messager.alert('提示','未获取表单信息','warning');
            }
        }
    },{
        text:'重置',
        handler:function(){
            var form = $(window.frames[options.id+'_iframe'].document).find('form');
            if(form.length > 0){
                $(form[0]).form('reset');
            }else{
                $.messager.alert('提示','未获取表单信息','warning');
            }
        }
    },{
        text:'关闭',
        handler:function(){
            dlg_div.dialog('close');
        }
    }];

    var _buttons = btn_diy || default_btn;
    var _width = options.width || '90%';
    var _title = options.title || '弹框标题';
    var _height =  options.height || 'auto';
    var blank_height = _height;
    if (blank_height == 'auto') {
        blank_height = dlg_div.height();
        if(blank_height > 0){
            setCookie(dlg_id + 'dialog_height',blank_height);
        }else{
            blank_height = parseInt(getCookie(dlg_id + 'dialog_height'));
        }
        blank_height = blank_height + 200;
    }
    var surplus_height_ = window.innerHeight - _height;
    var self_top = 0;
    if(surplus_height_ >0){
        self_top = parseInt(surplus_height_/2);
    }
    //var _top = options.top || self_top;   //如果需要强行定制高度,使用此项设置
    var _top = self_top; //自适应高度
    dlg_div.dialog({
        modal :true,
        title : _title,
        width : _width,
        height : _height,
        top: _top,
        //buttons: _buttons,   //打开url的弹框暂时不使用面板按钮
        onBeforeOpen : function(){
            $('#'+options.id+'_iframe').prop('src',options.url);
        }
    });
    //弹框高度自适应
    dlg_div.dialog('move',{top:$(document).scrollTop() + _top});
    dlg_div.dialog('open');
}