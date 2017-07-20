
/*---------------------------------- 丰胸案例 ：点击切换 --------------------------------------*/
var Effect = (function() {
    
    var Slider = function(o) {
        this.setting      = typeof o === 'object' ? o : {};
        if(!this.setting.target)this.setting.target='slider';
        if(!this.setting.showMarkers )this.setting.showMarkers =false;

        if(!this.setting.showMarkersStyle )this.setting.showMarkersStyle =0;

        if(!this.setting.showControls )this.setting.showControls =false;
        if(!this.setting.autoMs )this.setting.autoMs =3000;
        if(!this.setting.hideMarkersNum )this.setting.hideMarkersNum =false;
        if(!this.setting.showMarkersClass )this.setting.showMarkersClass ='active2';
        
        
        this.target = this.setting.target;
        this.showMarkers_target = this.setting.showMarkers_target;
        this.showMarkers  = this.setting.showMarkers;
        this.showMarkersStyle  = this.setting.showMarkersStyle;
        this.showControls = this.setting.showControls;
        this.hideMarkersNum = this.setting.hideMarkersNum;
        this.showMarkersClass=this.setting.showMarkersClass;
        this.timer        = null;
        this.currentTime  = null;
        this.ms           = 35;
        this.autoMs       = this.setting.autoMs;
        this.iTarget      = 0;
        this.nextTarget   = 0;
        this.speed        = 0;
        this.init();
        this.handleEvent();
    };
    
    Slider.prototype = {
        init: function() {
            this.obj      = document.getElementById(this.target);
            this.oUl      = this.obj.getElementsByTagName('ul')[0];
            this.aUlLis   = this.oUl.getElementsByTagName('li');
            this.width    = this.aUlLis[0].offsetWidth;
            this.number   = this.aUlLis.length;
//            this.oUl.style.width = this.obj.style.width * this.number + 'px';
            this.oUl.style.width = window.screen.availWidth * this.number + 'px';
            if(this.showMarkers) {
                var oDiv = document.createElement('div');
                var aLis = [];
                for(var i = 0; i < this.number; i++) {
                    if(!this.hideMarkersNum){
                        aLis.push('<li class="'+'no'+this.showMarkersClass+'">'+ (i+1) +'<\/li>');
                    }else{
                        aLis.push('<li class="'+'no'+this.showMarkersClass+'"> <\/li>');
                    }

                };
                oDiv.innerHTML = '<ol class="lejj-ol-slide-' + this.showMarkersStyle + '">' + aLis.join('') + '<\/ol>';
                if (this.showMarkers_target && this.showMarkers_target != '') {
                    document.getElementById(this.showMarkers_target).appendChild(oDiv.firstChild);
                    var showMarkers_target = document.getElementById(this.showMarkers_target);
                }
                else {
                    this.obj.appendChild(oDiv.firstChild);
                    var showMarkers_target = this.obj;
                }


               // this.aLis = this.obj.getElementsByTagName('ol')[0].getElementsByTagName('li');
                this.aLis = showMarkers_target.getElementsByTagName('ol')[0].getElementsByTagName('li');
                if(this.showMarkersStyle == 2)
                this.obj.getElementsByTagName('ol')[0].getElementsByTagName('li')[0].style.marginLeft = "415px";

                this.aLis[0].className = this.showMarkersClass;
                oDiv = null;
            }
            
            if(this.showControls) {
                this.oPrev = document.createElement('p');
                this.oNext = document.createElement('p');
                this.oPrev.className = 'prev'+this.showMarkersStyle;
                if(this.showMarkersStyle == 8){
                    this.oPrev.innerHTML = '&lt;';
                    this.oNext.innerHTML = '&gt;';
                }else{
                    this.oPrev.innerHTML = '';
                    this.oNext.innerHTML = '';
                }
                this.oNext.className = 'next'+this.showMarkersStyle;
//                this.oNext.innerHTML = '<';
                this.obj.appendChild(this.oPrev);
                this.obj.appendChild(this.oNext);

            };
            
        },
        
        handleEvent: function() {
            var that = this;
            if (this.showMarkers_target && this.showMarkers_target != '') {
                var showMarkers_target=document.getElementById(this.showMarkers_target);
            }
            else {
                var showMarkers_target = this.obj;
            }


            this.currentTime = setInterval(function() {
                that.autoPlay();
            }, this.autoMs);
            
            this.addEvent(showMarkers_target, 'mouseover', function () {
                clearInterval(that.currentTime);
            });
            
            this.addEvent(showMarkers_target, 'mouseout', function () {
                that.currentTime = setInterval(function() {
                    that.autoPlay();
                }, that.autoMs);
            });
            
            if(this.showMarkers) {
                for(var i = 0; i < this.number; i++) {
                    var el = this.aLis[i];
                    (function(index) {
                        that.addEvent(el, 'mouseover', function() {
                            that.goTime(index);
                        });
                    })(i);
                };
            };
            
            if(this.showControls) {
                this.addEvent(this.oPrev, 'click', function() {
                    that.fnPrev();
                });
                this.addEvent(this.oNext, 'click', function() {
                    that.autoPlay();
                });
            };
            
        },
        
        addEvent: function(el, type, fn) {
            if(window.addEventListener) {
                el.addEventListener(type, fn, false);
            }
            else if(window.attachEvent) {
                el.attachEvent('on' + type, fn);
            };
        },
        fnPrev: function() {
            this.nextTarget--;
            if(this.nextTarget < 0) {
                this.nextTarget = this.number - 1;
            };
            this.goTime(this.nextTarget);
        },
        
        autoPlay: function() {
            this.nextTarget++;
            if(this.nextTarget >= this.number) {
                this.nextTarget = 0;
            };
            this.goTime(this.nextTarget);
        },
        
        goTime: function(index) {
            var that = this;
            if(this.showMarkers) {
                for(var i = 0; i < this.number; i++) {
                	if(i==index){
                		 this.aLis[i].className = this.showMarkersClass;
                	}else{
                		 this.aLis[i].className = 'no'+this.showMarkersClass;
                	}
                }
            }
            
            this.iTarget = -index * this.width;
            if(this.timer) {
                clearInterval(this.timer);
            };
            this.timer = setInterval(function() {
                that.doMove(that.iTarget);
            }, this.ms);
        },
        
        doMove: function(target) {
            this.oUl.style.left = this.speed + 'px';
            this.speed += (target - this.oUl.offsetLeft) / 3;
            if(Math.abs(target - this.oUl.offsetLeft) === 0) {
                this.oUl.style.left = target + 'px';
                clearInterval(this.timer);
                this.timer = null;
            };
        }

    };
    
    return {
        
        slider: function(o) {
            var tt = new Slider(o);
        }
    };
})();

