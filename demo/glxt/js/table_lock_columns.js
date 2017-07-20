// JavaScript Document

//验证跳转页的输入格式
function check_go_page(obj){
    if (isNaN(obj.value)){
        alert("输入错误，请重新输入！");
        obj.value="";
    }
}

//全选与取消全选的实现
function check_select(obj){
    var flag = false;
    if(obj.checked == true){
        flag = true;
    }
    var checkboxs = document.getElementsByName("item");
    for(var i=0;i<checkboxs.length;i++){
        checkboxs[i].checked = flag;
    }
}

//console.log(table_full);

//=========create by jessie======
    var init = {
        table_title_left: $("#table_title_left"),
        table_title_right: $("#table_title_right"),
        table_content_left: $("#table_content_left"),
        table_content_right: $("#table_content_right"),
        table_title: $("#table_title"),
        table_content: $("#table_content"),

        table_area: $('#table_area'),
        search_area: $("#search_area"),
        //更多搜索条件
        search_input: $("#search_input"),
        more_search_btn: $("#more_search_btn")
    };
var allWidthRight = 1;
var allWidthLeft = 0;
    pageInit();
    pageClick();
    var listSearch = [{id:'1',type:'textbox',text:'名称',name:'name'},{id:'2',type:'datetimebox',text:'时间',name:'time'},
        {id:'3',type:'combobox',text:'性别',name:'sex',url:'xb.json'}];
    var checkedSearch = [];

    function pageClick(){
        //点击更多搜索条件
        init.more_search_btn.on('click',moreSearch);

        //点击列表头
        init.table_title.find('table td').on('click',function(){
            var statusTitle = $(this).find('.title-status');
            var statusTag = 0;//0向下箭头  1向上箭头
            if(statusTitle.hasClass('arrow-up') || statusTitle.hasClass('arrow-both')){
                statusTag = 0;
            }else{
                statusTag = 1;
            }
            $('.title-status').removeClass('arrow-up').removeClass('arrow-down').addClass('arrow-both');
            if(statusTag){
                statusTitle.addClass('arrow-up').removeClass('arrow-both');
            }else{
                statusTitle.addClass('arrow-down').removeClass('arrow-both');
            }
        });
    }
    function pageInit(){
        listChangeWidth();
        $(init.table_area).scroll(function (){
            init.table_content_left.css('margin-left',(init.table_area.scrollLeft())+'px');
            init.table_title_right.css('margin-left',(allWidthLeft-init.table_area.scrollLeft())+'px');
        });
    }

    //页面大小变化
    function listChangeWidth(){
        allWidthRight = 1;
        allWidthLeft = 0;
        //获取列表初始化宽度
        var titlesRight = init.table_title_right.find('td');
        for(var i = 0 ; i < titlesRight.length ; i++){
            allWidthRight += parseInt(titlesRight[i].style.width.replace('px','')) + 1;
        }
        //左边title宽度
        var titlesLeft = init.table_title_left.find('td');

        for(var j = 0 ; j < titlesLeft.length ; j++){
            allWidthLeft += parseInt(titlesLeft[j].style.width.replace('px',''))+1;
        }

        if(init.table_title_right.css('margin-left')=='0px'){
            init.table_title_right.css({'margin-left':allWidthLeft+'px'});
        }

        init.table_content_left.css('width',allWidthLeft+'px');
        init.table_content.css('padding-left',allWidthLeft+'px');
        //列表区域宽度
        var panelWidth = parseInt(init.search_area.width());
        if(panelWidth - allWidthLeft > allWidthRight){
            init.table_title_right.css('width',(panelWidth-20-allWidthLeft)+'px');
            init.table_content.css('width',(panelWidth-20-allWidthLeft)+'px');
            init.table_area.css('overflow-x','hidden');

        }else{
            init.table_title_right.css('width',(allWidthRight)+'px');
            init.table_content.css('width',(allWidthRight)+'px');
            init.table_area.css('overflow-x','auto');
        }

        init.table_content_left.css('margin-left',(init.table_area.scrollLeft())+'px');
        init.table_title_right.css('margin-left',(allWidthLeft-init.table_area.scrollLeft())+'px');
    }

    //清除更多搜索条件
    function cleanSearch(){
        init.more_search_btn.text('添加更多条件').off('click',cleanSearch).on('click',moreSearch);
        $('.can-clean').remove();
        checkedSearch = [];
    }

    //listSearch：一个包含在更多搜索条件的数组对象[{id:'1',text:'性别',type:'textbox',name:'',url:''}]
    //type：datetimebox,textbox,combobox
    function moreSearch(){
        var target = window.parent.$("#more_search_panel");
        var html = '';
        for(var i = 0 ; i < listSearch.length ; i++){
            var isEqual = true;
            for(var j = 0 ; j <checkedSearch.length ; j ++){
                if(listSearch[i].id == checkedSearch[j].id){
                    isEqual = false;
                    break;
                }
            }
            if(isEqual)
                html += '<label class="search-label"><input class="search-checkbox" id="'+listSearch[i].id+'" type="checkbox"/>'+listSearch[i].text+'</label>';
        }
        target.empty().append(html);
        target.dialog({
            title: '更多条件',
            top:150,
            width: 400,
            height: 200,
            closed: false,
            cache: false,
            modal: true,
            buttons:[{
                text:'确定',
                handler:function(){
                    var checkedNodes = target.find('input:checkbox:checked');
                    if(checkedNodes.length == 0){
                        window.parent.messageTs('未选择任何选项！');
                        return;
                    }
                    var newCheckedSearch = [];
                    for(var q = 0 ; q < checkedNodes.length ; q++){
                        for(var k = 0 ; k < listSearch.length; k ++){
                            if($(checkedNodes[q]).attr('id')==listSearch[k].id){
                                checkedSearch.push(listSearch[k]);
                                newCheckedSearch.push(listSearch[k]);
                            }
                        }
                    }

                    if(checkedSearch.length == listSearch.length){
                        init.more_search_btn.text('清除更多条件').off('click',moreSearch).on('click',cleanSearch);
                    }

                    for(var g = 0 ; g < newCheckedSearch.length;g++){
                        var search_html = '';
                        var id = newCheckedSearch[g].id;
                        var type = newCheckedSearch[g].type;
                        search_html = '<div class="condition can-clean"><label>'+newCheckedSearch[g].text+'</label><input id="'+id+'" class="val easyui-'+type+'" name="end-time" ' +
                            'data-options="required:false" value=""></div>'
                        var conditionNodes = $('.condition');
                        $(search_html).insertAfter($(conditionNodes[conditionNodes.length-1]));
                        if(type ==  'combobox'){
                            $('#'+id).combobox({
                                url:newCheckedSearch[g].url,
                                valueField:'id',
                                textField:'text',
                                panelHeight: 'auto'
                            });
                        }else if(type == 'datetimebox'){
                            $('#'+id).datetimebox({});
                        }else if(type == 'textbox'){
                            $('#'+id).textbox({});
                        }
                    }
                    window.parent.initListPageSize(window.parent.nowTabId);
                    target.dialog('close');
                }
            },{
                text:'取消',
                handler:function(){
                    target.dialog('close');
                }
            }]
        });
        target.show();
    }