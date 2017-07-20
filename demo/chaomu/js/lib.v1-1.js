/^u/.test(typeof define_x)&&function(a){var b=this.require=function(b){return a[b]};this.define_x=function(c,d){a[c]=a[c]||d(b)}}({}),define_x("minified",function(){function w(a){return a!=g?""+a:""}function y(a){return/^str/.test(typeof a)}function s(a){return a&&a.nodeType}function L(a){return a}function G(a,b){k(a,function(a){a(b)})}function u(a,b){for(var c in a)b(c,a[c])}function E(a,b){var c=[];return k(a,function(d,e){b.call(a,d,e)&&c.push(d)}),c}function t(a,b,c){var d=[];return a(b,function(a,e){k(c.call(b,a,e),function(a){d.push(a)})}),d}function n(a,b,c){return w(a).replace(b,c||"")}function k(a,b){if(C(a))for(var c=0;c<a.length;c++)b.call(a,a[c],c);else a!=g&&b(a,0);return a}function T(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function p(a){return"function"==typeof a&&!a.item}function C(a){return a&&a.length!=g&&!y(a)&&!s(a)&&!p(a)&&a!==r}function U(a,b){for(var c=0;a&&c<a.length;c++)a[c]===b&&a.splice(c--,1)}function H(a){return parseFloat(n(a,/^[^\d-]+/))}function I(a){return a.Nia=a.Nia||++V}function M(a,b){var c,d=[],e={};return k(a,function(a){k(b(a),function(a){e[c=I(a)]||(d.push(a),e[c]=!0)})}),d}function W(a,b){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:g},d=a.get(c),c=a.set(c).get("clientHeight");return a.set(d),c*b+"px"}function ba(a,b,c,d,e,f){return function(g,h){var i,j=g||r.event,k=!f,l=h||j.target||j.srcElement;if(f)for(;l&&l!=b&&!(k=f(l));)l=l.parentNode;return k&&(i=(!a.apply(q(f?l:b),c||[j,d])||""==e)&&"|"!=e)&&!h&&(j.preventDefault&&(j.preventDefault(),j.stopPropagation()),j.cancelBubble=!0),!i}}function N(a,b){k(b,function(a){a.element.detachEvent("on"+a.a,a.b)})}function Y(a){F?F.push(a):setTimeout(a,0)}function O(a){return t(k,a,function(a){return C(a)?O(a):(s(a)&&(a=a.cloneNode(!0),a.removeAttribute&&a.removeAttribute("id")),a)})}function q(a,b,c){return p(a)?Y(a):new x(z(a,b,c))}function z(a,b,c){function d(a){return a=t(k,a,function b(a){return C(a)?t(k,a,b):a}),f?E(a,function(a){for(;a=a.parentNode;)if(a==f||c)return a==f}):a}function e(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var f,g,h,i;return b&&1!=(b=z(b)).length?M(b,function(b){return z(a,b,c)}):(f=b&&b[0],y(a)?f&&1!=s(f)?[]:1<(b=a.split(/\s*,\s*/)).length?M(b,function(a){return z(a,f,c)}):(b=/(\S+)\s+(.+)$/.exec(a))?z(b[2],z(b[1],f),c):a!=(b=n(a,/^#/))?d(document.getElementById(b)):(g=(b=/([\w-]*)\.?([\w-]*)/.exec(a))[1],i=b[2],b=(h=document.getElementsByClassName&&i)?(f||document).getElementsByClassName(i):(f||document).getElementsByTagName(g||"*"),(g=h?g:i)&&(b=E(b,e(g,h?"tagName":"className"))),c?d(b):b):d(a))}function J(a,b){function c(a,b){var c=RegExp("(^|\\s+)"+a+"(?=$|\\s)","i");return function(d){return a?c.test(d[b]):!0}}var d,e,f={},h=f;return p(a)?a:/^num/.test(typeof a)?function(b,c){return c==a}:!a||"*"==a||y(a)&&(h=/^([\w-]*)\.?([\w-]*)$/.exec(a))?(d=c(h[1],"tagName"),e=c(h[2],"className"),function(a){return 1==s(a)&&d(a)&&e(a)}):b?function(c){return q(a,b).find(c)!=g}:(q(a).each(function(a){f[I(a)]=!0}),function(a){return f[I(a)]})}function Z(a){var b=J(a);return function(a){return b(a)?g:!0}}function P(){function a(a,e){b==g&&(b=a,c=e,setTimeout(function(){G(d)},0))}var b,c,d=[],e=a.then=function(a,e){function f(){var d,f;try{d=b?a:e,p(d)?(f=d.apply($,c),f&&f.then?f.then(function(a){h(!0,[a])},function(a){h(!1,[a])}):h(!0,[f])):h(b,c)}catch(g){h(!1,[g])}}var h=P();return b==g?d.push(f):setTimeout(f,0),h};return a.error=function(a){return e(0,a)},a}function x(a){for(var b=this.length=a.length,c=0;b>c;c++)this[c]=a[c]}var $,aa,g=null,r=this,Q={},R={},V=1,A={},F=/^[ic]/.test(document.readyState)?g:[],K={},S=0,v=!!document.all&&!document.addEventListener;return u({each:function(a){return k(this,a)},filter:function(a){return new x(E(this,a))},collect:function(a){return new x(t(k,this,a))},sub:function(a,b){var c=0>a?this.length+a:a,d=b>=0?b:this.length+(b||0);return new x(E(this,function(a,b){return b>=c&&d>b}))},find:function(a,b){for(var c,d=p(a)?a:function(b,c){return a===b?c:void 0},e=b||0;e<this.length;e++)if((c=d.call(this,this[e],e))!=g)return c},remove:function(){k(this,function(a){v&&1==s(a)&&(k(z("*",a),function(a){N(0,A[a.Nia]),delete A[a.Nia]}),N(0,A[a.Nia]),delete A[a.Nia]),a.parentNode.removeChild(a)})},text:function(){function a(b){var c=s(b);return 1==c?t(k,b.childNodes,a):5>c?b.data:g}return t(k,this,a).join("")},trav:function(a,b,c){var d=/^num/.test(typeof b),e=J(d?g:b),f=d?b:c;return new x(M(this,function(b){for(var c=[];(b=b[a])&&c.length!=f;)e(b)&&c.push(b);return c}))},next:function(a,b){return this.trav("nextSibling",a,b||1)},up:function(a,b){return this.trav("parentNode",a,b||1)},select:function(a,b){return q(a,this,b)},is:function(a){return!this.find(Z(a))},only:function(a){return new x(E(this,J(a)))},not:function(a){return new x(E(this,Z(a)))},get:function(a,b){var c,d,e,f=this,h=f[0];return h?y(a)?(c=/^(\W*)(.*)/.exec(n(a,/^%/,"@data-")),d=c[1],h=R[d]?R[d](this,c[2]):"$"==a?f.get("className"):"$$"==a?v?h.style.cssText:f.get("@style"):"$$slide"==a?f.get("$height"):"$$fade"==a||"$$show"==a?"hidden"==f.get("$visibility")||"none"==f.get("$display")?0:"$$fade"==a?v?isNaN(f.get("$filter",!0))?1:f.get("$filter",!0)/100:isNaN(f.get("$opacity",!0))?1:f.get("$opacity",!0):1:"$$scrollX"==a?r.pageXOffset!=g?r.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft:"$$scrollY"==a?r.pageXOffset!=g?r.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop:"$"==d?r.getComputedStyle?r.getComputedStyle(h,g).getPropertyValue(n(c[2],/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(h.currentStyle||h.style)[n(c[2],/^float$/,"cssFloat")]:"@"==d?h.getAttribute(c[2]):h[c[2]],b?H(h):h):(e={},(C(a)?k:u)(a,function(a){e[a]=f.get(a,b)}),e):void 0},set:function(a,b){var c,d,e=this;return b!==$?(c=/^(\W*)(.*)/.exec(n(n(a,/^\$float$/,"cssFloat"),/^%/,"@data-")),d=c[1],Q[d]?Q[d](this,c[2],b):"$$fade"==a?e.set({$visibility:b?"visible":"hidden"}).set(v?1>b?{$filter:"alpha(opacity = "+100*b+")",$zoom:1}:{$filter:""}:{$opacity:b}):"$$slide"==a?e.set({$visibility:b?"visible":"hidden",$overflow:"hidden",$height:/px/.test(b)?b:function(a,c,d){return W(q(d),b)}}):"$$show"==a?b?e.set({$visibility:b?"visible":"hidden",$display:""}).set({$display:function(a){return"none"==a?"block":a}}):e.set({$display:"none"}):"$$"==a?v?e.set("$cssText",b):e.set("@style",b):k(this,function(e,f){var h=p(b)?b(q(e).get(a),f,e):b;"$"==d?c[2]?e.style[c[2]]=h:k(h&&h.split(/\s+/),function(a){var b=n(a,/^[+-]/),c=e.className||"",d=n(c,RegExp("(^|\\s+)"+b+"(?=$|\\s)"));(/^\+/.test(a)||b==a&&c==d)&&(d+=" "+b),e.className=n(d,/^\s+/g)}):"$$scrollX"==a?e.scroll(h,q(e).get("$$scrollY")):"$$scrollY"==a?e.scroll(q(e).get("$$scrollX"),h):"@"==d?h==g?e.removeAttribute(c[2]):e.setAttribute(c[2],h):e[c[2]]=h})):y(a)||p(a)?e.set("$",a):u(a,function(a,b){e.set(a,b)}),e},show:function(){return this.set("$$show",1)},hide:function(){return this.set("$$show",0)},add:function(a,b){return this.each(function(c,d){function e(a){C(a)?k(a,e):p(a)?e(a(c,d)):a!=g&&(a=s(a)?a:document.createTextNode(a),f?f.parentNode.insertBefore(a,f.nextSibling):b?b(a,c,c.parentNode):c.appendChild(a),f=a)}var f;e(d&&!p(a)?O(a):a)})},fill:function(a){return this.each(function(a){q(a.childNodes).remove()}).add(a)},addAfter:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b.nextSibling)})},addBefore:function(a){return this.add(a,function(a,b,c){c.insertBefore(a,b)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,c){c.replaceChild(a,b)})},clone:function(){return new x(O(this))},animate:function(a,b,c){var d,e=P(),f=this,g=t(k,this,function(b,d){var e,f=q(b),g={};return u(e=f.get(a),function(c,e){var h=a[c];g[c]=p(h)?h(e,d,b):"$$slide"==c?W(f,h):h}),f.dial(e,g,c)}),h=b||500;return e.stop=function(){return e(!1),d()},d=q.loop(function(a){G(g,a/h),a>=h&&(d(),e(!0,[f]))}),e},dial:function(a,b,c){function d(a,b){return/^#/.test(a)?parseInt(6<a.length?a.substr(2*b+1,2):(a=a.charAt(b+1))+a,16):H(a.split(",")[b])}var e=this,f=c||0,g=p(f)?f:function(a,b,c){return c*(b-a)*(f+(1-f)*c*(3-2*c))+a};return function(c){u(a,function(a,f){var h=b[a],i=0;e.set(a,0>=c?f:c>=1?h:/^#|rgb\(/.test(h)?"rgb("+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+","+Math.round(g(d(f,i),d(h,i++),c))+")":n(h,/-?[\d.]+/,w(g(H(f),H(h),c))))})}},toggle:function(a,b,c,d){var e,f,h=this,i=!1;return b?(h.set(a),function(j){j!==i&&(f=(i=!0===j||!1===j?j:!i)?b:a,c?(e=h.animate(f,e?e.stop():c,d)).then(function(){e=g}):h.set(f))}):h.toggle(n(a,/\b(?=\w)/g,"-"),n(a,/\b(?=\w)/g,"+"))},values:function(a){var b=a||{};return this.each(function(a){var c=a.name||a.id,d=w(a.value);if(/form/i.test(a.tagName))for(c=0;c<a.elements.length;c++)q(a.elements[c]).values(b);else!c||/ox|io/i.test(a.type)&&!a.checked||(b[c]=b[c]==g?d:t(k,[b[c],d],L))}),b},offset:function(){for(var a=this[0],b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b},on:function(a,b,c,d,e){return p(b)?this.on(g,a,b,c,e):y(d)?this.on(a,b,c,g,d):this.each(function(f,g){k(a?z(a,f):f,function(a){k(w(b).split(/\s/),function(b){var f=n(b,/[?|]/),h=!!e&&("blur"==f||"focus"==f),i=ba(c,a,d,g,n(b,/[^?|]/g),e&&J(e,a));b={element:a,b:i,a:f,capture:h},(c.M=c.M||[]).push(b),v?(a.attachEvent("on"+b.a+(h?"in":""),i),f=I(a),(A[f]=A[f]||[]).push(b)):(a.addEventListener(f,i,h),(a.M=a.M||[]).push(b))})})})},onOver:function(a,b){var c=this,d=[];return p(b)?this.on(a,"|mouseover |mouseout",function(a,e){var f=a.relatedTarget||a.toElement,g="mouseout"!=a.type;d[e]===g||!g&&f&&(f==c[e]||q(f).up(c[e]).length)||(d[e]=g,b.call(this,g,a))}):this.onOver(g,a)},onFocus:function(a,b,c){return p(b)?this.on(a,"|blur",b,[!1],c).on(a,"|focus",b,[!0],c):this.onFocus(g,a,b)},onChange:function(a,b,c){return p(b)?this.on(a,v?"|propertychange |change |keyup |clicked":"|input |change |clicked",function(a,c){var d,e=this[0];d=v&&/select/i.test(e.tagName)?e.options[e.selectedIndex].text:/ox|io/i.test(e.type)?e.checked:e.value,d!=e.NiaP&&b.call(this,e.NiaP=d,c)},c):this.onChange(g,a,b)},onClick:function(a,b,c,d){return p(b)?this.on(a,"click",b,c,d):this.onClick(g,a,b,c)},trigger:function(a,b){return this.each(function(c){for(var d,e=c;e&&!d;)k(v?A[e.Nia]:e.M,function(e){e.a==a&&(d=d||!e.b(b,c))}),e=e.parentNode})}},function(a,b){x.prototype[a]=b}),u({request:function(a,b,c,d){d=d||{};var e,f=0,h=P(),i=c&&c.constructor==d.constructor;try{h.xhr=e=r.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),h.stop=function(){e.abort()},i&&(c=t(u,c,function(a,b){return t(k,b,function(b){return encodeURIComponent(a)+(b!=g?"="+encodeURIComponent(b):"")})}).join("&")),c==g||/post/i.test(a)||(b+="?"+c,c=g),e.open(a,b,!0,d.user,d.pass),i&&/post/i.test(a)&&e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u(d.headers,function(a,b){e.setRequestHeader(a,b)}),u(d.xhr,function(a,b){e[a]=b}),e.onreadystatechange=function(){4!=e.readyState||f++||(200==e.status?h(!0,[e.responseText,e]):h(!1,[e.status,e.responseText,e]))},e.send(c)}catch(j){f||h(!1,[0,g,w(j)])}return h},toJSON:function a(b){return b==g?""+b:y(b=b.valueOf())?'"'+n(b,/[\\\"\x00-\x1f\u2028\u2029]/g,T)+'"':C(b)?"["+t(k,b,a).join()+"]":/^ob/.test(typeof b)?"{"+t(u,b,function(b,c){return a(b)+":"+a(c)}).join()+"}":w(b)},parseJSON:r.JSON?r.JSON.parse:function(c){return c=n(c,/[\x00\xad\u0600-\uffff]/g,T),/^[[\],:{}\s]*$/.test(n(n(c,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g))?eval("("+c+")"):void 0},ready:Y,loop:function(a){function b(a){u(K,function(b,c){c(a)}),S&&g(b)}function c(){return K[f]&&(delete K[f],S--),e}var d,e=0,f=V++,g=r.requestAnimationFrame||function(a){setTimeout(function(){a(+new Date)},33)};return K[f]=function(b){d=d||b,a(e=b-d,c)},S++||g(b),c},off:function(a){k(a.M,function(a){v?(a.element.detachEvent("on"+a.a+(a.capture?"in":""),a.b),U(A[a.element.Nia],a)):(a.element.removeEventListener(a.a,a.b,a.capture),U(a.element.M,a))}),a.M=g}},function(a,b){q[a]=b}),v?(aa=function(){G(F),F=g},document.attachEvent("onreadystatechange",function(){/^[ic]/.test(document.readyState)&&aa()}),r.attachEvent("onload",aa)):document.addEventListener("DOMContentLoaded",function(){G(F),F=g},!1),r.c=function(){k(A,N)},{$:q,$$:function(a,b,c){return z(a,b,c)[0]},EE:function(a,b,c){return a=q(document.createElement(a)),C(b)||!/^ob/.test(typeof b)?a.add(b):a.set(b).add(c)},M:x,getter:R,setter:Q}});
var MINI = require('minified'), $ = MINI.$, $$ = MINI.$$, EE = MINI.EE;

var IMG_ADR = "http://192.168.1.183:8989/";
var IP_ADR="http://www.lejj.com/";
var SERVICE_URL = "/interface";

var $id=function(id){
	return document.getElementById(id);
}
function binddb(id,temp,data){//传进来的参数（id是容器，temp是模板id）
    var mytemp=template(temp,data)
    $id(id).innerHTML=$id(id).innerHTML+mytemp;
}

function binddb2(js_id,data){//传进来的参数（id是容器，temp是模板id）
    data.IMG_ADR=IMG_ADR;
//    data.urlParam=urlParam;
    data.IP_ADR=IP_ADR;
    var mytemp=template(js_id,data)
   return mytemp;
}


var ajaxObject=function (){ 
	try {
        return new XMLHttpRequest();
    } catch (e) {
    }
    try {
        return new ActiveXobject('Microsoft.XMLHTTP');
    } catch (e) {
    }
}

String.prototype.replaceAll=function(sptr, sptr1){
	var str = this.replace(sptr, sptr1);
	while (str.indexOf(sptr) >= 0){
		str = str.replace(sptr, sptr1);
	}
    return str;
}

var screen_loading={};
var is_live = 1;
/**
 * 获取数据
 * @param url
 * @param data
 * @param call
 * @param fsc
 * @param asyn
 */
function ajax_post(url, data, call, fsc, asyn){
	var method='GET';
	if(typeof(asyn) == "undefined" || asyn == null){
    	asyn = true;
    }
	if(!call){
		call=data;
		data=url;
		data = '{"action":"getAction","method":"get","param":' + data + "}";
		data = encodeURIComponent(data);
		url = SERVICE_URL;
		fsc=1;
	}else{
		if(typeof call =='number' && !fsc){
			fsc=call;
			call=data;
			data=url;
			url = SERVICE_URL;
		}
	}
	
	if(is_live=='1' && (typeof data=='string')){
		try{
			var tk=data.replaceAll('{','').replaceAll('}', '').replaceAll('\'', '*').replaceAll('"', '-').replaceAll(':', '_').replaceAll('\\', '|').replaceAll(' ', '_').replaceAll(',', '-');
			if(jsonData && jsonData[tk]){
				call(jsonData[tk]);
				return ;
			}
		}catch(e){
//			console.log(tk,e);
		}
	}
	if(fsc<=1){
		var txmlhttprequest;
		var xmlhttprequest=ajaxObject();
		if(xmlhttprequest){  
			if(method=='GET'){
				if(url.indexOf('?')>0){
					url+='&'+data;
				}else{
					url+='?'+data;
				}
				xmlhttprequest.open(method, url, asyn);  
			}else{
				xmlhttprequest.open(method, url, asyn);  
			}
			
			xmlhttprequest.onreadystatechange = function () {  
				if (xmlhttprequest.readyState == 4 && xmlhttprequest.status == 200) {  
					if(!!call){
	            		call(xmlhttprequest.responseText);
	            	}
				}  
			};  
			if(method=='POST'){
				xmlhttprequest.send(data);
			}else{
				xmlhttprequest.send('');
			}
		}
	}else{
		if(!screen_loading[fsc])screen_loading[fsc]=[];
		 var sy=100;
		    var s=window.screen.availHeight;
		    var x=Math.ceil(sy/s);
		    if(x>1 && fsc==x){
		    	screen_loading[fsc].push({ed:true});
 			ajax_post(url,data,call,1);
 			return;
		    }
		
		var oj={url:url,data:data,call:call,fsc:fsc,t:10000*(fsc-1)};
		screen_loading[fsc].push(oj);
		setTimeout(function(){
			if(!oj.ed){
				oj.ed=true;
				ajax_post(oj.url,oj.data,oj.call,1);
			}
		},oj.t);
		
	}	
}

function ajax_post2(url,data,call,method, asyn){
    method = method || "POST";
    if(typeof(asyn) == "undefined" || asyn == null){
    	asyn = true;
    }
        var txmlhttprequest;
        var xmlhttprequest=ajaxObject();
        if(xmlhttprequest){
            if(method=='GET'){
                if(url.indexOf('?')>0){
                    url+='&'+data;
                }else{
                    url+='?'+data;
                }
                xmlhttprequest.open(method, url, asyn);
            }else{
                xmlhttprequest.open(method, url, asyn);
            }

            xmlhttprequest.onreadystatechange = function () {
                if (xmlhttprequest.readyState == 4 && xmlhttprequest.status == 200) {
                	if(!!call){
                		call(xmlhttprequest.responseText);
                	}
                }
            };
            if(method=='POST'){
                xmlhttprequest.send(data);
            }else{
                xmlhttprequest.send('');
            }
        }

}

/**
 * 简单增删改数据
 * example：setDataSimple("U", "zx_new1023_ecs_pictures", "id=12,pid=3", {"id":12},function(responseText){});
 * @param type
 * @param serviceName
 * @param key
 * @param params
 * @param callback
 */
function setDataSimple(type, serviceName, key, params, callback){
	var serviceParam = {"action": "setAction", "method": "set"};
	var paramSet = {"servicename": "MUSH_Offer"};
	var actions = [];
	var action = {};
	action.type = type;
	action.serviceName = serviceName;
	if(!!key){
		action.key = key;
	}
	if(!!params){
		action.set = params;
	}
	actions.push(action);
	paramSet.actions = actions;
	serviceParam.param = paramSet;
	ajax_post2(SERVICE_URL, encodeURIComponent(JSON.stringify(serviceParam)), callback);
}

/**
 * 简单批量增删改数据
 * @param data 二维数组[["U", "zx_new1023_ecs_pictures", "id=12,pid=3", {"mic":12}],["C", "zx_new1023_ecs_pictures", null, {"mic2":12}]]
 * @param callback 回调函数
 */
function setDataSimpleBatch(data, callback){
	var serviceParam = {"action": "setAction", "method": "set"};
	var paramSet = {"servicename": "MUSH_Offer"};
	var actions = [];
	for(var i = 0, len = data.length; i < len; i++){
		var action = {};
		action.type = data[i][0];
		action.serviceName = data[i][1];
		if(!!data[i][2]){
			action.key = data[i][2];
		}
		if(!!data[i][3]){
			action.set = data[i][3];
		}
		actions.push(action);
	}
	paramSet.actions = actions;
	serviceParam.param = paramSet;
	console.log(JSON.stringify(serviceParam));
	ajax_post2(SERVICE_URL, encodeURIComponent(JSON.stringify(serviceParam)), callback);
}
/*{"action":"codeAction","method":"sendSms","param":{"phone":"13981817246","codeType":"8","msg":"123"}}*/
function setDataSMS(phone,msg,callback){
    ajax_post2("/interface",'{"action":"codeAction","method":"sendSms","param":{"phone":"'+phone+'","codeType":"8","msg":"'+msg+'"}}',callback);
}

function binddb3(tid,data){//传进来的参数（id是容器，temp是模板id）
    data.IP_ADR=IP_ADR;
    var mytemp=template(tid,data)
    return mytemp;
}

function preloadimages(arr){
    var newimages=[]
    var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
    for (var i=0; i<arr.length; i++){
        newimages[i]=new Image()
        newimages[i].src=arr[i]
    }
    //console.log(newimages);
}




function citybd(id,temp,data){
    var mytemp=template(temp,data)
    $id(id).innerHTML=mytemp;
}
function changeimg(prefix){
    var firstpic=document.getElementsByTagName("img");
    var ol=[];
    var olx=[];
    if(!prefix)prefix='/zximages/';
    else prefix=prefix+'/';
    for(var i=0;i<firstpic.length;i++){
    	var srcold=firstpic[i].getAttribute("srcold");
    	
    	if(srcold!=null && srcold!='' && srcold && srcold.indexOf('http://')>-1){
    		if(srcold.indexOf('image.meilele.com')){
    			var nstr=srcold.replace('image.meilele.com',R_IMG);
    		}else{
    			var nstr=srcold;
    		}
    	}else if(srcold!=null && srcold!='' && srcold){
    		nstr=prefix+srcold;
    	}
    	
    	var src=firstpic[i].src;
    	if(src!='' && src.indexOf('http://')){
    		var ikj=src.indexOf('.com/')+5;
    		var n2str=src.substr(ikj);
    	}else{
    		n2str=src;
    	}
        if(nstr && nstr!='' && srcold!=null &&  n2str!=nstr){
        	
        	var wh=firstpic[i].getAttribute("wh");
        	if(wh){
        		var ii=nstr.lastIndexOf('/');
        		nstr=nstr.substr(0,ii)+'/'+wh+nstr.substr(ii);
        	}
        	//console.log(wh,nstr);
        	 if(nstr.indexOf('http://')>-1){
        		 ol.push({o:firstpic[i],src:nstr});
             	 olx.push(nstr);
        	 }else{
        		 ol.push({o:firstpic[i],src:R_IMG+nstr});
             	 olx.push(R_IMG+nstr);
        	 }
        	 
        	
        }
    }
    
    preloadimages(olx);
    for(var i=0;i<ol.length;i++){
    	ol[i].o.src=ol[i].src;
    }
}

var glogin=function(){
    window.location.href='/login.html#'+window.location.href;
}
var register=function(){
    window.location.href='/register.html#'+window.location.href;
}
//获取登录前url
var href_now = window.location.href;
function getUrl(obj){
    obj.onclick = function(){
        var href = this.href;
        if(/&/.test(href_now)){
            this.href = href + 'url='+ encodeURIComponent(href_now);
        }else{
            this.href = href + '#url='+encodeURIComponent(href_now);
        }
    }
}

var gload = function(call, time){
	time = time || 100;
	setTimeout(function(){
		call();
	}, time);
}

var rp_url=function(url){
	try{
		return url.replace('http://zx.meilele.com/',IP_ADR);
	}catch(e){
		return url;
	}
}

var cache_img=false;
var arr_all_img=[];
var url_key='';
if(!cache_img){
	//ajax_post('/api_sr/img/cache/',"data="+arr_all_img.join(',')+'&url_key='+url_key,function(){
		
	//},1);	
}else{
	//preloadimages(arr_all_img);
}

/**
 * 根据属性key 获取去重数据
 * @param data
 * [{ar_40:"中式"},{ar_40:"中式"},{ar_40:"古典"}]
 * @param key 
 * (ar_40)
 * @return ["中式","古典"]
 */
function getUniqueData(data, key){
	if(data == null || data.length == 0){
		return null;
	}
	var result = [];
	var json = {};
	for (var i = 0, len = data.length; i < len; i++) {
		if(!json[data[i][key]]){
			result.push(data[i][key]);
			json[data[i][key]] = true;
	    }
	}
	return result;
}

//省市联动
//window.onload = function(){
//    function province(){
//        ajax_post('{"serviceName":"HMJ_BUV1_goodslistregion","param":{"regionid":"' + val + '"},"needAll":1}', function (data) {
//            var arr  = JSON.parse(data).rows;
//
//        });
//    }
//};

function getUniqueDataEle(data, key) {
    if (data == null || data.length == 0) {
        return null;
    }
    var result = {};
    for (var i = 0, len = data.length; i < len; i++) {
        if (!result[data[i][key]]) { result[data[i][key]] = []; }
        result[data[i][key]].push(data[i]);
    }
    return result;
}

/**添加设置cookie**/
function addCookie(name,value,days,path){  
    var name = escape(name);  
    var value = escape(value);  
    var expires = new Date();  
    expires.setTime(expires.getTime() + days * 3600000 * 24);  
    //path=/，表示cookie能在整个网站下使用，path=/temp，表示cookie只能在temp目录下使用  
    path = path == "" ? ";path=/" : ";path=" + path;  
    //GMT(Greenwich Mean Time)是格林尼治平时，现在的标准时间，协调世界时是UTC  
    var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();  
    document.cookie = name + "=" + value + _expires + path;  
}

/**获取cookie的值，根据cookie的键获取值**/  
function getCookieValue(name){
    var name = escape(name);  
    var allcookies = document.cookie;         
    name += "=";  
    var pos = allcookies.indexOf(name);      
    //如果找到了具有该名字的cookie，那么提取并使用它的值  
    if (pos != -1){  
        var start = pos + name.length;
        var end = allcookies.indexOf(";",start);
        if (end == -1) end = allcookies.length;
        var value = allcookies.substring(start,end);
        return (value);
    }else{  //搜索失败，返回空字符串  
        return "";  
    }  
}

/**根据cookie的键，删除cookie，其实就是设置其失效**/  
function deleteCookie(name,path){  
    var name = escape(name);  
    var expires = new Date(0);  
    path = path == "" ? "/" : ";path=" + path;  
    document.cookie = name + "="+ ";expires=" + expires.toUTCString() + path;  
}

/**
 * 判断字符串是否是数字
 */
function isNum(str){
	if(typeof(str) == "undefined" || str == null || str == ""){
		return false;
	}
	var reg = new RegExp("[0-9]+$");
	return reg.test(str);
}

/**
 * 添加页面加载完成要执行的方法
 * example:
 * function testOnload(){}
 * addLoadEvent(testOnload);
 * @param func
 */
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = function(){
			func();
		};
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}


/**
 * 截取字符串 包含中文处理
 * @param str 字符串
 * @param len 长度
 * @param hasDot 是否增加...
 * @returns {String}
 */
function makeLen(str, len, hasDot){  
    var newLength = 0;  
    var newStr = "";  
    var chineseRegex = /[^\x00-\xff]/g;
    var singleChar = "";  
    var strLength = str.replace(chineseRegex,"**").length;  
    for(var i = 0;i < strLength; i++){  
        singleChar = str.charAt(i).toString();  
        if(singleChar.match(chineseRegex) != null){  
            newLength += 2;  
        }else{  
            newLength++;  
        }  
        if(newLength > len){  
            break;  
        }  
        newStr += singleChar;  
    } 

    if(hasDot && strLength > len){  
        newStr += "...";  
    }  
    return newStr;  
}
function judgeUserLogin(){
	var user_id=null;
	var userName=null;
	var session_Id=getCookieValue('JSESSIONID');
	if(urlParam.userid){
		user_id=urlParam.userid;
		userName=urlParam.userName;
	}else{
		user_id='';
		userName='';
	}
	var result=[];
	result[0]=user_id;
	result[1]=session_Id;
	result[2]=userName;
	return result;
}
/*发送短信验证码
参数解释:
	phone:手机号码，必选参数
	codeType:必选参数,传入0-9，短信验证登陆，传入9，注册验证手机号码传入0
	callback:为一个function，回调函数
*/
function sendSMSCode(phone,codeType,callback){
    ajax_post2("/interface",'{"action":"smsAction","method":"send","param":{"serviceName":" SMS_Send","param": {"phoneNumber":"'+phone+'","auth_key":"5961A30CADB586921AE2364D90A69DFB","templateId":"78" ,"webSite":"1" ,"smsType":"'+codeType+'"}}}',callback)
//	ajax_post2("/interface",'{"action":"codeAction","method":"getCode","param":{"phone":"'+phone+'","codeType":"'+codeType+'"}}',callback);
}
/*加入收藏,加入关注,删除收藏，删除关注
参数解释：
	id:商品的id,店铺id,品牌id
	type:控制商品，品牌，店铺的写入层
	action:控制取消或关注（收藏），如果为关注（收藏）时，此参数不传
--------------------------------
商品
	id=goods_id
	type='goods'
	action(收藏不传，删除传action='delete')
店铺
	id=shop_id
	type='shop'
	action(收藏不传，删除传action='delete')
品牌
	id=brand_id
	type='brand'
	action(关注不传，删除传action='delete')
--------------------------------*/
function collectShop(id,type,action){
	var rec_id=null;
	var user_info=judgeUserLogin();
	var user_id=user_info[0];
	if(!user_id){
        alert('你还没有登录，请登录过后在操作！');
		return;
	}
	var actionType="C";
	var whereKey="";
	goods_id=parseInt(id);
	var service="test_ecshop_ecs_collect_goods";//"ecs_collect_shop"
	var flag=false;
	if(action&&action=="delete"){
		actionType="D"
		if(type&&type=='shop'){
			whereKey='user_id='+user_id+',shop_id='+goods_id;
		}
		if(type&&type=='goods'){
			whereKey='user_id='+user_id+',goods_id='+goods_id;
		}
		if(type&&type=='brand'){
			whereKey='user_id='+user_id+',brand_id='+goods_id;
		}
		flag=true;
	}
	var add_time=new Date().getTime();
	var insert={};
	
	insert.user_id=user_id;
	if(!!type&&(type=='shop'||type=='goods'||type=='brand')){
		if(type&&type=='shop'){
		service="test_ecshop_ecs_collect_shop";
		insert.shop_id=goods_id;
		insert.is_attention=1
		}
		if(type&&type=='goods'){
			service="test_ecshop_ecs_collect_goods";
			insert.is_attention=1;
			insert.goods_id=goods_id;
		}
		if(type&&type=='brand'){
			service="test_ecshop_ecs_collect_brand";
			insert.is_attention=1;
			insert.brand_id=goods_id;
		}
	}else{
		alert('你输入的type参数出错！');
		return;
	}
	
	add_time=parseInt(add_time/1000);
	insert.add_time=add_time;
	if(flag){
		insert='';
	}
	judgeIsScang(id,type,function(data){
		data=JSON.parse(data);
		if(action&&action=='delete'){
			setDataSimple(actionType,service,whereKey,insert,function(data){
				data=JSON.parse(data);
				if(data.results[0].description=="Succeed"){
					if(flag){
							noneCancelScang();
							window.location.reload();
						//type&&type==true?window.location.reload():noneCancelScang();
					}else{
						if(type=='goods'||type=='shop'){
							alert("加入收藏夹成功！");
						}
						if(type=='brand'){
							alert("关注成功！");
						}
					}
				}else{
					alert("操作失败");
				}
			});
		}else{
			if(data.rows.length!=0){
				alert('你已经收藏过该商品了！');
			}else{
				setDataSimple(actionType,service,whereKey,insert,function(data){
					data=JSON.parse(data);
					if(data.results[0].description=="Succeed"){
						if(flag){
							if(type&&type==true){
								window.location.reload();
							}else{
								noneCancelScang();
								window.location.reload();
							}
							//type&&type==true?window.location.reload():noneCancelScang();
						}else{
							if(type=='goods'||type=='shop'){
								alert("加入收藏夹成功！");
							}
							if(type=='brand'){
								alert("关注成功！");
							}
						}
					}else{
						alert("操作失败");
					}
				});
			}
		}
	});
}
function judgeIsScang(id,type,fn){
	var serviceName='HMJ_HSV1_MyCollect';
	var insert={};
	var user_info=judgeUserLogin();
	var user_id=user_info[0];
	if(!user_id){
		alert('只有登录过后才能使用收藏功能！');
		return;
	}
	insert.user_id=user_id;
	if(type&&type=='goods'){
		serviceName='HMJ_HSV1_MyCollect';
		insert.goods_id=id;
	}
	if(type&&type=='shop'){
		serviceName='HMJ_HSV1_ShopCollect';
		insert.shop_id=id;
	}
	if(type&&type=='brand'){
		serviceName='HMJ_HSV1_BrandCollect';
		insert.brand_id=id;
	}
	ajax_post('{"serviceName":"'+serviceName+'","param":'+JSON.stringify(insert)+',"return":"collect_head","needAll":1}',fn);
}
/*取消所有收藏*/
function allCancel(dataId,types){
	var userinfo=judgeUserLogin();
	var user_id=userinfo[0];
	if(!user_id){
		alert('你还没有登录，请登录');
		return;
	}
	var type='D';
	var service='test_ecshop_ecs_collect_goods';
	var key='user_id='+user_id+',goods_id=';
	if(types){
		if(types=='goods'){
			service='test_ecshop_ecs_collect_goods';
			key='user_id='+user_id+',goods_id=';
		}
		if(types=='shop'){
			service='test_ecshop_ecs_collect_shop';
			key='user_id='+user_id+',shop_id=';
		}
		if(types=='brand'){
			service='test_ecshop_ecs_collect_brand';
			key='user_id='+user_id+',brand_id=';
		}
	}
	
	var insert='';
	var endData=[];
	var k=0;
	for(var i=0; i<dataId.length; i++){
		endData[k]=[];
		endData[k].push(type);
		endData[k].push(service);
		endData[k].push(key+dataId[i]);
		endData[k++].push(insert);
	}
	if(endData.length==0){
		zsOneShopping();
		return;
	}
	setDataSimpleBatch(endData,function(data){
		data=JSON.parse(data);
		window.location.reload();
	});
}
/*购物车加入所有*/
function allAddShoppingcar(dataId,flag){
	var userinfo=judgeUserLogin();
	var user_id=userinfo[0];
	if(!user_id){
		alert('你还没有登录，请登录');
		return;
	}
	var type='C';
	var service='ecs_cart';
	var key='';
	var insert={};
	var endData=[];
	var k=0;
	for(var i=0; i<dataId.length; i++){
		insert={};
		endData[k]=[];
		endData[k].push(type);
		endData[k].push(service);
		endData[k].push(key);
		insert.user_id=user_id;
		insert.goods_id=dataId[i];
		endData[k++].push(insert);
	}
	if(endData.length==0){
		zsOneShopping();
		return;
	}
	setDataSimpleBatch(endData,function(data){
		data=JSON.parse(data);		
        if(flag){
            if(flag==true)
            return;
        }else{
			fun();
        }
	});
	
}
/*设置默认地址
参数解释：
	address_id:收货人地址的唯一标识address_id
*/
function set_Default(address_id){
	var rec_id=null;
	var user_info=judgeUserLogin();
	var user_id=user_info[0];
	if(!user_id){
		alert('请登录过后在使用此功能！');
		return;
	}
	var endData=[];
	var k=0;
	ajax_post('{"serviceName":"HMJ_HSV1_ShopCartAddress","param":{"user_id":"'+user_id+'"},"needAll":1}',function(data){
		data=JSON.parse(data).rows;
		for(var i=0; i<data.length; i++){
			if(data[i].is_default==1){
				endData[k]=[];
				endData[k].push('U');
				endData[k].push('test_ecshop_ecs_user_address');
				endData[k].push("address_id="+data[i].address_id);
				endData[k++].push({"is_default":"0"});
			}
		}
		endData[k]=[];
		endData[k].push('U');
		endData[k].push('test_ecshop_ecs_user_address');
		endData[k].push("address_id="+address_id);
		endData[k++].push({"is_default":"1"});
		setDataSimpleBatch(endData,function(data){
			data=JSON.parse(data);
			if(data.results[0].description=="Succeed"){
				alert('设置成功');
				window.location.reload();
			}
		});
	});
	
	//setDataSimple("U","test_ecshop_ecs_user_address","address_id="+address_id,{"is_default":"1"});
}
/*删除地址
参数解释：
	address_id:用户收件地址唯一标识address_id
*/
function delete_Address(address_id,fn){
	setDataSimple("D","test_ecshop_ecs_user_address","address_id="+address_id,"",fn);
}
/*取消订单
参数解释：
	order_id:订单的order_id（订单的唯一标识）
	reason:取消的原因
*/
function removeBalance(order_id,reason){
	if(!order_id){
		alert('order_id:为空!');
		return;
	}
	var userinfo=judgeUserLogin();
	var user_id=userinfo[0];
	if(!user_id){
		alert('你没有登录，请登录！');
		return;
	}
	var endData=[];
	endData[0]=[];
	var insert0={};
	endData[0].push('U');
	endData[0].push('ecs_order_info_app');
	endData[0].push('order_id='+order_id);
	insert0.is_del=1;
	insert0.order_status=2
	endData[0].push(insert0);
	
	endData[1]=[];
	endData[1].push('U');
	endData[1].push('test_ecshop_ecs_order_action');
	endData[1].push('order_id='+order_id);
	var insert1={};
	insert1.action_note='已取消';
	var log_time=new Date().getTime();
	log_time=parseInt(log_time/1000);
	insert1.log_time=log_time;
	insert1.order_status=2;
	endData[1].push(insert1);
	
	endData[2]=[];
	endData[2].push('C');
	endData[2].push('test_ecshop_ecs_order_cancellation');
	endData[2].push('');
	var insert2={};
	insert2.order_id=order_id;
	insert2.reason=reason;
	var time=new Date().getTime();
	time=parseInt(time/1000);
	insert2.time=time;
	endData[2].push(insert2);
	
	
	
	setDataSimpleBatch(endData,function(data){
		data=JSON.parse(data);
		
	});
	
}
/*移入购物侧
参数解释：
	id:商品的id
	goodsNumber:本次加入购物车的商品数量（可选参数，不传每次默认加入1）
*/
function addShoppingCar(id,goodsNumber,flag,is){
	var user_info=judgeUserLogin();//获取的用户登录信息，如果用户没有登录user_id='';否者是存下user_id;
	var goods_id=parseInt(id);
	var user_id=user_info[0];//传入的用户user_id
	var session_Id=user_info[1];//传入的JSESSIONID
	var goods_number=null;
	goodsNumber?goods_number=goodsNumber:goods_number=1;
	var rec_id=null;
	var uInsert={};
	var param1={};	
	param1.goods_id=goods_id;
	!!user_id?param1.user_id=user_id:param1.session_id=session_Id;
	param1=JSON.stringify(param1);
	ajax_post('{"serviceName":"HMJ_HSV1_ShopCart","param":'+param1+',"needAll":1,"random":'+Math.random()+'}',function(data){
		data=JSON.parse(data);
		if(data.rows.length>0){
			goods_number+=parseInt(data.rows[0].goods_number);
			rec_id=data.rows[0].rec_id;
			uInsert.goods_number=goods_number;
			setDataSimple("U","ecs_cart","rec_id="+rec_id,uInsert,function(data){
				data=JSON.parse(data);
				//console.log(data);
                if(flag) {
                    if(flag==true)
                    return;
                }else{
                   if(is){
						fun(true);
					}else{		
						fun();
					}
                }


				//alert('加入购物车成功！');
			});
		}else{
			var insert={};
			//{"serviceName":"HMJ_HSV1_LOOK","param":{"goods_id":"39"},"return":"see_more","needAll":1}
			/*ajax_post('{"serviceName":"HMJ_HSV1_DetailPage","param":{"goods_id":"' + goods_id + '"},"needAll":1}',function(data){
				var info=JSON.parse(data).rows;
				if(!info){
					alert("由于未知的原因，移入购物车失败，我们正在检查，请谅解！");
					return;
				}*/
				//info=info[0];
			insert.goods_id=goods_id;
			//insert.goods_sn=info.goods_sn;
			!!user_id?insert.user_id=user_id:insert.session_id=session_Id;
			//insert.user_id=user_id;
			insert.goods_number=goods_number;
			//insert.session_id=session_Id;
			//console.log(insert);
			setDataSimple("C","ecs_cart","",insert,function(data){
				data=JSON.parse(data);
				//console.log(data);
				if(flag) {
					if(flag==true)
						return;
				}else{
					if(is){
						fun(true);
					}else{		
						fun();
					}
				}
			});
		}
	});
}
function fun(flag){
	if(flag){
		var s='<span id="gwc_bottoma">继续购物</span>'
	}else{
		var s='<a href="/" target="_blank"><span id="gwc_bottoma">继续购物</span></a>'
	}
	var str='<div class="full" id="full"></div>'+
			'<div class="hmj_gwc" id="hmj_gwc">'+
				'<div class="gwc_top">'+
					'<span>商品成功放入购物车</span>'+
					'<a href="javascript:;" id="close_this" onclick="close_this()"></a>'+
				'</div>'+
				'<div class="gwc_mid">'+
					'<span class="gwc_img"></span><span>购物车共有<span class="gwc_spa"></span>件商品，商品总金额合计：<span class="gwc_spb"></span></span>'+
				'</div>'+
				'<div class="gwc_bottom">'+
					'<div class="gwc_bottoma" onclick="close_this()">'+s+
					'</div>'+
					'<div class="gwc_bottomb">'+
						'<a href="/flow/">查看购物车</a>'+
					'</div>'+
				'</div>'+
			'</div>';
    var parseDom = function(arg) {
        var objE = document.createElement("div");
        objE.innerHTML = arg;
        return objE.childNodes[0];
    };
	var o=document.getElementById('full');
	o==null?document.body.appendChild(parseDom("<div>" + str + "</div>")):o;
	var user_info=judgeUserLogin();
	var user_id=user_info[0];
	var session_Id=user_info[1];
	var param1={};
	!!user_id?param1.user_id=user_id:param1.session_id=session_Id;
	param1=JSON.stringify(param1);
	ajax_post('{"serviceName":"HMJ_HSV1_ShopCart","param":'+param1+',"needAll":1,"random":'+Math.random()+'}',function(data){
		data=JSON.parse(data);
		var count_price=parseInt(data.rows[0].goods_total_money);
		var count_num=parseInt(data.rows[0].total);
		document.getElementById('shoppingcar_header').innerHTML=''+count_num;
		var tchong=document.getElementsByClassName('gwc_spb')[0];
		tchong.innerHTML='￥'+count_price;
		var oSpan=document.getElementsByClassName('gwc_spa')[0];
		oSpan.innerHTML=count_num;
		if (window.innerHeight)
        winHeight = window.innerHeight;
		else if ((document.body) && (document.body.clientHeight))
			winHeight = document.body.clientHeight;
		$id("hmj_gwc").style.display = "block";
		var Width = document.documentElement.clientWidth;
		var height = winHeight;
		$id("full").style.display="block";
		$id("full").style.width = Width + "px";
		$id("full").style.height = height + "px";
		$id("hmj_gwc").style.left = (Width - 658) / 2 + "px";
		$id("hmj_gwc").style.top = (height - 218) / 2 + "px";
		var o=document.getElementById('full');
		o.timer=setTimeout(function(){
			close_this();
		},5000);
	});
}
function close_this(){
    $id("hmj_gwc").style.display = "none";
    $id("full").style.display = "none";
	var o=document.getElementById('full');
	clearTimeout(o.timer);
}

//删除收藏的弹框
function cancelScang(id,type,fn){
	var str='<div class="wcAdress_delete" id="wcAdress_delete">'+
				'<div class="address_delete" id="address_delete"></div>'+
				'<div class="outCoverT_delete">'+
					'<div class="cover_delete" id="outCoverT_delete">'+
						'<span class="cover_wrong" id="deleteId" onclick="noneCancelScang()">×</span>'+
						'<div class="deleteAddDiv"><span class="deleteAdd">取消收藏</span></div>'+
						'<div class="deleteIF"><span>确认取消收藏？</span></div>'+
						'<div class="hideDiv"><span class="allRight" >确认</span><span class="allWrong" onclick="noneCancelScang();">取消</span></div>'+
					'</div>'+
				'</div>'+
			'</div>';
	var o=document.getElementById('wcAdress_delete')
	o==null?document.body.innerHTML=str+document.body.innerHTML:o;
	var address_delete=document.getElementById('wcAdress_delete');
	address_delete.style.display='block';

	var allRight=document.getElementsByClassName('allRight')[0];
	allRight.onclick=function(){
		fn(id,type);
	};
	o.timer=setTimeout(function(){
		noneCancelScang()
	},5000);
}
function noneCancelScang(){
	var wcAdress_delete=document.getElementById('wcAdress_delete');
	wcAdress_delete.style.display="none";
	var o=document.getElementById('wcAdress_delete');
	clearTimeout(o.timer);
}
//至少选择一件商品的弹框
function zsOneShopping(){
	var str='<div class="chooseCover"></div>'+
			'<div class="chooseDiv">'+
				'<div class="DivInside">'+
					'<span class="close" onclick="noneZsOneShopping();">×</span>'+
					'<div class="insideText"><img src="/lejj-s/images/collection/warn.png" alt="#"/><span>请至少选择一件商品！</span></div>'+
				'</div>'+
			'</div>';
    var parseDom = function(arg) {
        var objE = document.createElement("div");
        objE.innerHTML = arg;
        return objE.childNodes[0];
    };
	var o=document.getElementsByClassName('chooseCover')[0];
//	o==null?document.body.innerHTML=document.body.innerHTML+str:o;
    o==null?document.body.appendChild(parseDom("<div>" + str + "</div>")):o;
	document.getElementsByClassName('chooseCover')[0].style.display='block';
	document.getElementsByClassName('chooseDiv')[0].style.display='block';
    setTimeout(function () {
        noneZsOneShopping();
    }, 5000);
}
function noneZsOneShopping(){
	document.getElementsByClassName('chooseCover')[0].style.display='none';
	document.getElementsByClassName('chooseDiv')[0].style.display='none';
}

//压缩图片
function zipPicture(url,w,h){
    var zip="";
    if(w||h){
        zip="zip@";
        if(w){
            zip+="w"+w;
        }
        if(h&&w){
            zip+="_h"+h;
        }
        if(h&&!w){
            zip+="h"+h
        }
    }
    var sp = url.split("/");
    var newUrl= R_IMG;
    for(var i=0;i<sp.length-1;i++){
        newUrl +=sp[i]+"/";
    }
    newUrl+= zip+"/"+sp[sp.length-1];
    return newUrl;
}

//手机发短信
var sendSMSTemp={
	sendSMSparam:['experience_hall_name','experience_hall_address','experience_hall_phone','navigation_link',
	'district','address','store_id'],
	//发送体验店地址信息到手机
	sendSMStyg:function(phone,Address,callback){
		var sendData={"action":"smsAction","method":"send","param":{"serviceName":" SMS_Send"} };
		var param={"auth_key":"5961A30CADB586921AE2364D90A69DFB","templateId":"110","webSite":"1","smsType":"23"};
		param.phoneNumber=phone;
		var paramQ={"experience_hall_name":"","experience_hall_address":"","experience_hall_phone":"",
					"navigation_link":"",
					"district":"","store_id":""}
		for(var attr in Address){
			paramQ[attr]=Address[attr];
		}
		param.param=paramQ;
		sendData.param.param=param;
		//console.log(JSON.stringify(sendData));
		ajax_post2("/interface",JSON.stringify(sendData),callback);
	},
	//将折扣码发送到手机
	sendSMSdiscount:function(phone,discount,callback){
		var sendData={"action":"smsAction","method":"send","param":{"serviceName":" SMS_Send"} };
		var param={"auth_key":"5961A30CADB586921AE2364D90A69DFB","templateId":"115","webSite":"1","smsType":"20"};
		param.phoneNumber=phone;
		var paramQ={"discount_code":""}
		paramQ.discount_code=discount;
		param.param=paramQ;
		sendData.param.param=param;
		//console.log(JSON.stringify(sendData));
		ajax_post2("/interface",JSON.stringify(sendData),callback);
	},
	//发送手机验证码到手机
	/*
	参数解释：
		type:控制发送短信的类型
			'register':注册时，手机发送的验证码
			'passwordBack':找回密码时，手机发送的验证码
			'modify_oldPhone':修改绑定手机时，旧手机发送的验证码
			'modify_newPhone':修改绑定手机时，新手机发送的验证码
			'phoneLogin':手机验证登陆时，发送的验证码
			*/
	sendSMSphoneCode:function(phone,type,callback){
		var sendData={"action":"smsAction","method":"send","param":{"serviceName":" SMS_Send"} };
		var param={"auth_key":"5961A30CADB586921AE2364D90A69DFB","templateId":"78","webSite":"1","smsType":""};
		param.phoneNumber=phone;
		switch(type){
			case 'register':
				param.smsType=0;
				break;
			case 'passwordBack':
				param.smsType=1;
				break;
			case 'modify_oldPhone':
				param.smsType=2;
				break;
			case 'modify_newPhone':
				param.smsType=3;
				break;
			case 'phoneLogin':
				param.smsType=4;
				break;
			default:
				alert("register--passwordBack--modify_oldPhone--modify_newPhone--phoneLogin");
				return;
				break;
		}
		sendData.param.param=param;
		//console.log(JSON.stringify(sendData));
		ajax_post2("/interface",JSON.stringify(sendData),callback);
	}
}
//验证手机发送码是否正确
var verifySendSMS={
	/*
	参数解释：
		type:控制发送短信的类型
			'register':注册时，手机发送的验证码
			'passwordBack':找回密码时，手机发送的验证码
			'modify_oldPhone':修改绑定手机时，旧手机发送的验证码
			'modify_newPhone':修改绑定手机时，新手机发送的验证码
			'phoneLogin':手机验证登陆时，发送的验证码
		*/
	verifyPhoneCode:function(phone,code_value,type,callback){
		var sendData={"action":"loginAction","method":"smsLogin","param":{}};
		var param={"receive_phone":"","code_value":"","template_id":"78","web_site":"1","type":""};
		param.receive_phone=phone;
		param.code_value=code_value;
		switch(type){
			case 'register':
				param.type=0;
				break;
			case 'passwordBack':
				param.type=1;
				break;
			case 'modify_oldPhone':
				param.type=2;
				break;
			case 'modify_newPhone':
				param.type=3;
				break;
			case 'phoneLogin':
				param.type=4;
				break;
			default:
				alert("register--passwordBack--modify_oldPhone--modify_newPhone--phoneLogin");
				return;
				break;
		}
		sendData.param.param=param;
		//console.log(JSON.stringify(sendData));
		ajax_post2("/interface",JSON.stringify(sendData),callback);
	}
	/*{"action":"loginAction","method":"smsLogin",

"param":{

       "param":{

      "receive_phone":"13631740849",

      "code_value":"7502",

      "template_id":"78",

      "web_site":"1",

      "type":"4"

      }

   }

}
*/
}
//input输入框，限制输入函数
var input={
	onlyInputNum:function(e,obj){
		var ev=e||event;
		if(window.event){
			var key=ev.keyCode;
		}else{
			var key=ev.which;
		}
		var i=48;
		var k=96;
		obj.first?obj.first=true:obj.first=false;
		if(!obj.first){
			i++;
			k++;
		}
		var str=!obj.value?1:obj.value;
		var reg;
		str.indexOf('.')!=-1?reg=/[0-9]+(\.\d?)$/g:reg=/[1-9]|[1-9][0-9]*/;
		if(((key>=i&&key<=57)||(key>=k&&key<=105)||key==110||key==190||key==8)&&reg.test(str)){
			return true
		}else{
			return false;
		}
	}
}
/**
 * 添加事件监听
 */
var addEvent = (function () {
	if (document.addEventListener) {
		return function (el, type, fn) {
			el.addEventListener(type, fn, false);
		};
	} else {
		return function (el, type, fn) {
			el.attachEvent('on' + type, function () {
				return fn.call(el, window.event);
			});
		}
	}
})();

/** 
* @description 事件移除，兼容各浏览器 
* @param target 事件触发对象 
* @param type 事件 
* @param func 事件处理函数 
*/ 
function removeEvents(target, type, func){
	if (target.removeEventListener){
		target.removeEventListener(type, func, false); 
	} else if (target.detachEvent){
		target.detachEvent("on" + type, func); 
	}else{
		target["on" + type] = null; 
	}
}; 

/**
 * 自定义全局事件绑定，html标签中属性以event_开头的都会绑定事件
 */
function globalEventBind(){
	var eventPrefix = "event_";
	var eles = document.getElementsByTagName("*");
	for(var i = 0, len = eles.length; i < len; i++){
		var attrs = eles[i].attributes;
		if(!attrs){
			continue;
		}
		for(var j = 0, alen = attrs.length; j < alen; j++){
			var attrName = attrs[j].name; 
			if(attrName.indexOf(eventPrefix) == 0){
				var eventFn = eval("(false||function(event){" + attrs[j].value + "})");
				var eventType = attrName.split("_")[1] ? attrName.split("_")[1].replace("on", "") : "";
				addEvent(eles[i], eventType, eventFn);
			}
		}
	}
}
/**
 * 图片加载
 * @param targetImg 目标图片对象
 * @param url 图片路径
 * @param callback 图片加载成功回调函数
 */
function loadImg(targetImg, url, callback){
	var browser = new Object();  
	browser.userAgent = window.navigator.userAgent.toLowerCase();  
	browser.ie = /msie/.test(browser.userAgent);  
	browser.moz = /gecko/.test(browser.userAgent);
	var imgObj = new Image();
	if(browser.ie){  
		imgObj.onreadystatechange = function(){  
            if(imgObj.readyState == "complete" || imgObj.readyState == "loaded"){
            	if(callback){
            		callback(targetImg, url);
            	}
            }
        }
    }else if(browser.moz){  
    	imgObj.onload=function(){  
            if(imgObj.complete == true){
            	if(callback){
            		callback(targetImg, url);
            	}
            }
        }
    }
	imgObj.onerror = function(){
		imgObj.onerror = null;
		if(callback){
    		callback(targetImg, url);
    	}
	};
	imgObj.src = url;
}
/**
 * 图片延迟加载
 */
var imgLazyLoad = {
	domList : {},
	waitList : [],
	downList : [],
	status : 0,
	loader : false,
	extend : function(t, s){
		for(var p in s){
			t[p] = s[p];
		};
		return t;
	},
	start : function(b, a) {
		if (this.status > 1) {
			return;
		}
		this.status = 1;
		this.type = b;
		this.setting = this.extend({
			scrollTimer : 100,
			defaultLimit : 30,
			attributeTag : "data-src",
			loaderNumber : 4,
			offset : 50,
			callback : null
		}, a);
		this.init();
	},
	init : function() {
		this.initDomList();
		if (!this.type || parseInt(this.type, 10) > 0) {
			this.setRealType();
		}
		if (this.type == "scroll" || this.type == "both") {
			this.initDomOffsetTop();
			this.initEvent();
			var a = this;
			setTimeout(function() {
				a.scrollResponse();
			}, 0);
		} else {
			this.prepend(this.domList);
		}
	},
	setRealType : function() {
		if (!this.type) {
			this.type = this.setting.defaultLimit;
		}
		if (parseInt(this.type, 10) > 0) {
			this.type = (this.domListLength >= this.type) ? "both" : "lazy";
		}
	},
	initDomList : function() {
		this.domListLength = 0;
		var f = document.images;
		var e;
		for (var a = 0, d = f.length; a < d; a++) {
			if (Object.prototype.toString.apply(this.setting.attributeTag) === "[object Array]") {
				loopin: for (var b = 0, c = this.setting.attributeTag.length; b < c; b++) {
					e = f[a].getAttribute(this.setting.attributeTag[b]);
					if (e) {
						break loopin;
					}
				}
			} else {
				e = f[a].getAttribute(this.setting.attributeTag);
			}
			if (f[a] && e) {
				this.domList["init_" + a] = {
					target : f[a],
					src : e
				};
				this.domListLength++;
			}
		}
	},
	offsetTop : function(obj) {
		var thisObj = obj;
		if (!obj) {
			return 0;
		}
		var objOffSetTop = 0;
		while (thisObj != null && thisObj != document.body) {
			objOffSetTop += thisObj.offsetTop;
			thisObj = thisObj.offsetParent;
		}
		return objOffSetTop;
	},
	initDomOffsetTop : function() {
		for ( var a in this.domList) {
			if (this.domList[a] && this.domList[a].target) {
				this.domList[a]._offsetTop = this.offsetTop(this.domList[a].target);
			}
		}
	},
	initEvent : function() {
		addEvent(window, "scroll", imgLazyLoad.scrollResponse);
		addEvent(window, "resize", imgLazyLoad.scrollResponse);
	},
	scrollResponse : function() {
		var a = imgLazyLoad;
		if (window.scrollTimer) {
			clearTimeout(window.scrollTimer);
		}
		window.scrollTimer = window.setTimeout(function() {
			var d = window.pageYOffset
					|| document.documentElement.scrollTop
					|| document.body.scrollTop || 0;
			var c = [];
			for ( var b in a.domList) {
				if (d + document.documentElement.clientHeight
						+ a.setting.offset > a.domList[b]._offsetTop
						&& d - a.setting.offset < a.domList[b]._offsetTop
								+ (a.domList[b].target.height || a.domList[b].target.cilentHeight)) {
					c.push(a.domList[b]);
					delete a.domList[b];
				}
			}
			a.prepend(c);
			c = null;
		}, a.setting.scrollTimer);
	},
	prepend : function(a) {
		if (this.status === "0") {
			this.start();
		}
		a = this.formatImglist(a);
		this.concatList(a, this.waitList);
	},
	append : function(a) {
		if (this.status === "0") {
			this.start();
		}
		a = this.formatImglist(a);
		this.concatList(this.waitList, a);
	},
	formatImglist : function(c) {
		c = c || [];
		var b = [];
		for ( var a in c) {
			if (typeof c[a] == "string") {
				c[a] = {
					src : c[a]
				};
			}
			b.push(c[a]);
		}
		return b;
	},
	concatList : function() {
		this.waitList = Array.prototype.concat.apply([], arguments);
		if (this.waitList.length > 0) {
			this.startLoad();
		}
	},
	initLoader : function() {
		this.loader = [];
		for (var a = 0; a < this.setting.loaderNumber; a++) {
			this.loader.push(new this.Loader(a));
		}
	},
	checkAllLoaderIsReset : function() {
		var b = true;
		for (var a = 0; a < this.loader.length; a++) {
			if (this.loader[a].status == "1") {
				return false;
			}
		}
		return b;
	},
	startLoad : function() {
		if (!this.loader) {
			this.initLoader();
			arguments.callee.apply(this);
			return;
		}
		for (var a = 0, b = this.loader.length; a < b; a++) {
			this.loader[a].run();
		}
	},
	Loader : function(a) {
		this.key = a;
		this.run();
	},
	loadPrototype : {
		run : function() {
			if (this.status == 1 || !imgLazyLoad.waitList[0]) {
				return;
			}
			this.job = imgLazyLoad.waitList.shift();
			if (this.job && this.job.src) {
				this.status = 1;
				this.img = new Image;
				this.img.loaderKey = this.key;
				this.img.onload = this.img.onerror = function() {
					var a = this.loaderKey;
					setTimeout(function() {
						imgLazyLoad.onloadResponse(a);
					}, 0);
					this.onload = this.onerror = null;
				};
				var p = this;
				setTimeout(function(){
//					if(p.job.target.attributes["data-src1"]){
//						p.img.src = zipPicture({url: p.job.src, q: 30});
//						imgLoaded(p.img, zipPicture({url: p.job.src, q: 30}), true);
//						console.log("data-src1:" + p.job.src + "\r\nzip:" + zipPicture({url: p.job.src, q: 30}));
//					}else if(p.job.target.attributes["data-src2"]){
//						console.log("data-src2:" + p.job.src);
//					}
					p.img.src = p.job.src;
//					imgLoaded(p.img, p.job.src);
				}, 1);
				
			} else {
				this.run();
			}
		}
	},
	onloadResponse : function(e) {
		var a = imgLazyLoad.loader[e];
		if (a.job.target && a.job.src) {
			a.job.target.setAttribute("src", a.job.src);
		}
		a.status = 2;
		var b = true;
		if (imgLazyLoad.type == "scroll" || imgLazyLoad.type == "both") {
			var d = [];
			loop: for ( var c in imgLazyLoad.domList) {
				if (imgLazyLoad.type == "both" && imgLazyLoad.waitList.length === 0) {
					d.push(imgLazyLoad.domList[c]);
					delete imgLazyLoad.domList[c];
				}
				b = false;
				break loop;
			}
			Array.prototype.unshift.apply(imgLazyLoad.waitList, d);
			d = null;
			if (b) {
				removeEvents(window, "scroll", imgLazyLoad.scrollResponse);
				removeEvents(window, "resize", imgLazyLoad.scrollResponse);
			}
		}
		if (b && typeof imgLazyLoad.setting.callback == "function"
				&& !imgLazyLoad.waitList[0] && !imgLazyLoad.called
				&& imgLazyLoad.checkAllLoaderIsReset()) {
			imgLazyLoad.setting.callback();
			imgLazyLoad.called = true;
		}
		a.run();
	}
};
imgLazyLoad.Loader.prototype = imgLazyLoad.loadPrototype;
/**
 * 加载js
 * @param srcs  js路径，单独的字符串或者数组
 * 单个写法：
 * loadScript("http://www.google-analytics.com/ga.js");
 * 多个写法：
 * loadScript(["http://www.google-analytics.com/ga.js","/lejj-s/js/json.js"]);
 */
function loadScript(srcs){
	var doLoad = function(){
		if (Object.prototype.toString.apply(srcs) === "[object Array]"){
			for(var i = 0, len = srcs.length; i < len; i++){
				createScriptObj(srcs[i]);
			}
		}else{
			createScriptObj(srcs);
		}
		
	};
	var createScriptObj = function(src){
		var scriptObj = document.createElement('script');
		scriptObj.type = 'text/javascript';
		scriptObj.src = src;
		document.body.appendChild(scriptObj);
	}
	gload(doLoad, 10);
}
/*sendSMSTemp.sendSMSdiscount('18228307261','dfefdfe',function(data){
	console.log(data)
	alert('a');	
});*/
//sendSMSTemp.sendSMSphoneCode('18228307261','phoneLogin');
//setDataSimple("D","ecs_cart","user_id=18,deviced_id=ee4594a82d1e897a5cca34c6eefafc01",'',function(data){});
//setDataSimple("D","ecs_cart","user_id=18,deviced_id=e973ff12243fd5c8f10beb08eedd4c68",'',function(data){});
/*sendSMSTemp.sendSMStyg('18228307261',{

               "experience_hall_name":"好来客",

               "experience_hall_address":"双流",

               "experience_hall_phone":"028111999",

               "navigation_link":"http://api.map.baidu.com/geocoder?location=30.598682,104.100116&coord_type=gcj02&output=html&src=yourCompanyName&CyourAppName&zoom=4",

               "district":"1",

               "address":"2",

               "store_id":"3"

                 },function(data){
				 	console.log(data);
				 });*/