$(function(){
    var init = {
        add_save: $("#add_save"),
        add_cancel: $("#add_cancel")
    };
    pageClick();
    function pageClick(){
        //点击保存
        init.add_save.on('click',function(){

        });
        //点击取消
        init.add_cancel.on('click',function(){
            var addId = window.name;
            var tabsId = window.parent.tabsId;
            for(var i = 0 ; i < tabsId.length ; i++){
                if(tabsId[i] == addId){
                    window.parent.init.tabs_list.tabs('close', i);
                    break;
                }

            }
        });
    }
});

function listChangeWidth(){}