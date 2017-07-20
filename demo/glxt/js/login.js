$(function(){
    var init = {
        login_btn: $("#login_btn"),
        login_top: $("#login_top")
    };

    pageClick();
    pageInit();

    function pageInit(){
        resizeWindow();
        $(window).resize(resizeWindow);
        function resizeWindow(){
            var getTop = 0;
            var screenHeight = parseInt($(window).height());
            if(screenHeight < 400){
                getTop = 20;
            }else{
                getTop = (screenHeight - 350)/2;
            }
            init.login_top.css('margin-top',getTop+'px')
        }

    }
    function pageClick(){
        //点击登录按钮
        init.login_btn.on('click',function(){
            window.location.href = 'html/index.html';
        });
    }
});