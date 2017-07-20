$(function(){
    var init = {
        add_save: $("#add_save"),
        add_cancel: $("#add_cancel")
    };
    addPageClick();
    function addPageClick(){
        //点击保存
        init.add_save.on('click',function(){

        });
        //点击取消
        init.add_cancel.on('click',function(){
            window.parent.dlg_div.dialog('close');
        });
    }
});

function listChangeWidth(){}