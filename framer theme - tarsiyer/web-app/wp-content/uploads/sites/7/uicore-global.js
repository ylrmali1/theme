(function(modules){var parentJsonpFunction=window.uicoreJsonp;window.uicoreJsonp=function webpackJsonpCallback(chunkIds,moreModules,executeModules){var moduleId,chunkId,i=0,resolves=[],result;for(;i<chunkIds.length;i++){chunkId=chunkIds[i];if(installedChunks[chunkId]){resolves.push(installedChunks[chunkId][0])}
installedChunks[chunkId]=0}
for(moduleId in moreModules){if(Object.prototype.hasOwnProperty.call(moreModules,moduleId)){modules[moduleId]=moreModules[moduleId]}}
if(parentJsonpFunction)parentJsonpFunction(chunkIds,moreModules,executeModules);while(resolves.length){resolves.shift()()}
if(executeModules){for(i=0;i<executeModules.length;i++){result=__webpack_require__(__webpack_require__.s=executeModules[i])}}
return result};var installedModules={};var installedChunks={19:0};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}
var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=!0;return module.exports}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})}};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default']}:function getModuleExports(){return module};__webpack_require__.d(getter,'a',getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";__webpack_require__.oe=function(err){console.error(err);throw err}})([]);uicoreJsonp([5],{155:(function(module,exports,__webpack_require__){"use strict";__webpack_require__(156);__webpack_require__(157);__webpack_require__(158);__webpack_require__(159);__webpack_require__(160)}),156:(function(module,exports){}),157:(function(module,exports,__webpack_require__){"use strict";jQuery(function($){$('.uicore-cart-icon.uicore-link').click(function(){$('body').addClass('uicore-cart-active')});$('#cart-wrapper').click(function(){$('body').removeClass('uicore-cart-active')});$('#uicore-cart-close').click(function(){$('body').removeClass('uicore-cart-active')})})}),158:(function(module,exports,__webpack_require__){"use strict";jQuery(document).ready(function(){if(jQuery('.uicore-sticky').length||jQuery('.uicore-will-be-sticky').length){var uiCoreOnScroll=function uiCoreOnScroll(){var mq=window.matchMedia("(max-width: 1025px)");var isMobile=mq.matches;var winTop=jQuery(window).scrollTop();var h=jQuery('.uicore-top-bar').innerHeight();var defaultH=100;if(jQuery('.uicore-transparent .ui-header-row1').length){defaultH=10}else if(jQuery('.ui-header-row1').length){defaultH=400}
if(h==null)h=isMobile?25:defaultH;if(winTop>lastScrollTop&&lastScrollTop>0&&winTop>h-10/100*h){jQuery('.ui-smart-sticky').addClass('ui-hide')}else{jQuery('.ui-smart-sticky').removeClass('ui-hide')}
if(winTop+jQuery(window).height()>jQuery(document).height()-50){jQuery('.ui-smart-sticky').removeClass('ui-hide')}
lastScrollTop=winTop;if(winTop>h){jQuery('.uicore-navbar').addClass('uicore-scrolled')}else{jQuery('.uicore-navbar').removeClass('uicore-scrolled')}};uiCoreOnScroll();var lastScrollTop=0;jQuery(window).scroll(uiCoreOnScroll);jQuery(document.body).on('touchmove',uiCoreOnScroll)}});if(navigator.appVersion.indexOf('Win')!=-1){jQuery('body').addClass('win')}
jQuery(function($){$('.uicore-search-btn').click(function(){$('body').addClass('uicore-search-active');$('.uicore-search .search-field').focus()});$('.uicore-search .uicore-close').click(function(){$('body').removeClass('uicore-search-active')});$('.uicore-search-btn').click(function(){$('body').addClass('uicore-search-active');$('.uicore-search .search-field').focus()});$(document).keydown(function(e){if(e.keyCode===27){$('body').removeClass('uicore-search-active')}});$('.uicore-h-classic .menu-item-has-children:not(.menu-item-has-megamenu.custom-width)').on('mouseenter mouseleave',function(e){if($('ul',this).length){var elm=$('.sub-menu',this);var off=elm.offset();var l=off.left;var w=elm.width();var docW=$('body').width();if(l+w>docW){$(this).addClass('uicore-edge')}}});var btn=$('#uicore-back-to-top');jQuery(window).scroll(function(){if(jQuery(window).scrollTop()>300){btn.addClass('uicore-visible')}else{btn.removeClass('uicore-visible')}});btn.on('click',function(e){e.preventDefault();jQuery('html').animate({scrollTop:0},'300');jQuery('body').animate({scrollTop:0},'300')})});jQuery(function($){$(document).ready(function(){if(jQuery('.uicore-progress-bar').length){var getMax=function getMax(){var value=document.body.scrollHeight-window.innerHeight;var postContainer=jQuery('.uicore-post-content article');if(postContainer.length){value=postContainer.height()+postContainer.offset().top-window.innerHeight}
return value};var getValue=function getValue(){return jQuery(window).scrollTop()};var progressBar=jQuery('.uicore-progress-bar'),max=getMax(),value,width;var getWidth=function getWidth(){value=getValue();width=value/max*100;if(width>100){width=100}
width=width+'%';return width};var setWidth=function setWidth(){progressBar.css({width:getWidth()})};jQuery(window).scroll(setWidth);$(window).on('resize',function(){max=getMax();setWidth()})}})});jQuery(function($){$(document).ready(function(){var menuItems=$('.menu-item-has-megamenu.custom-width');menuItems.on('mouseenter mouseleave',function(e){setOffset($(this))});var setOffset=function setOffset(li){var mq=window.matchMedia("(max-width: 1025px)");var isMobile=mq.matches;var dropdown=li.find('ul.uicore-megamenu');dropdown.css({left:'auto'});if(!isMobile){dropdown.css({left:0});var dropdownWidth=dropdown.outerWidth(),dropdownOffset=dropdown.offset(),viewportWidth=$(window).width(),extraSpace=0;if(!dropdownWidth||!dropdownOffset)return;if(dropdownOffset.left+dropdownWidth>=viewportWidth){var toRight=dropdownOffset.left+dropdownWidth-viewportWidth;dropdown.css({left:-toRight-extraSpace})}}};menuItems.each(function(){setOffset($(this));$(this).addClass('with-offsets')})})})}),159:(function(module,exports,__webpack_require__){"use strict";jQuery(function($){$(document).ready(function(){var mq=window.matchMedia("(max-width: 1025px)");var isMobile=mq.matches;initMobileOrHam();window.onresize=initMobileOrHam;function initMobileOrHam(){$('.uicore-mobile-menu-wrapper .menu-item-has-children > a').unbind('click',mobileSubmenuOpen);$('.uicore-mobile-menu-wrapper .uicore-menu-container .sub-menu .back > a').unbind('click',mobileSubmenuClose);$('.uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)').unbind('click',mobileSubmenuExpand);$('.uicore-mobile-menu-wrapper li:not(.menu-item-has-children):not(.back) > a').unbind('click',menuToggle);$('.uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children').unbind('mouseenter',hamClassicSubmenuOpen);$('.uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children').unbind('mouseleave',hamClassicSubmenuClose);$('.uicore-mobile-menu-wrapper.uicore-ham-center .menu-item-has-children a, .uicore-mobile-menu-wrapper.uicore-ham-creative .menu-item-has-children a').unbind('click',hamSubmenuToggle);$(".uicore-menu-focus .uicore-menu li").unbind('mouseenter',menuFocusIn);$(".uicore-menu-focus .uicore-menu li").unbind('mouseleave',menuFocusOut);if(isMobile){if(document.body.classList.contains('ui-a-dsmm-slide')){addBackLink();$('.uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)').bind('click',mobileSubmenuOpen);$('.uicore-mobile-menu-wrapper .uicore-menu-container .sub-menu .back > a').bind('click',mobileSubmenuClose)}else{$('.uicore-mobile-menu-wrapper .menu-item-has-children > a:not(.ui-custom-tap)').bind('click',mobileSubmenuExpand)}
$('.uicore-mobile-menu-wrapper li:not(.menu-item-has-children):not(.back) > a').bind('click',menuToggle);addSubmenuParentClick()}else{$('.uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children').bind('mouseenter',hamClassicSubmenuOpen);$('.uicore-mobile-menu-wrapper.uicore-ham-classic .menu-item-has-children').bind('mouseleave',hamClassicSubmenuClose);$('.uicore-mobile-menu-wrapper.uicore-ham-center .menu-item-has-children a, .uicore-mobile-menu-wrapper.uicore-ham-creative .menu-item-has-children a').bind('click',hamSubmenuToggle);$(".uicore-menu-focus .uicore-menu li").bind('mouseenter',menuFocusIn);$(".uicore-menu-focus .uicore-menu li").bind('mouseleave',menuFocusOut)}}
$('.uicore-toggle').click(function(){menuToggle()});function addSubmenuParentClick(){if(!window.uicoreParent){window.uicoreParent=!0;$('.uicore-mobile-menu-wrapper .uicore-menu-container .menu-item-has-children').each(function(i,obj){var url=$(this).find(">a").attr('href');if(url!='#'){var a=$('<a>',{href:url,text:"",class:"ui-custom-tap",style:"min-height:"+$(this).height()+"px;transform:translate3d(0,-"+$(this).height()+"px,0)"});$(this).children('a').after(a)}})}}
function addBackLink(){if(!window.uicoreBackLinks){var hasChildren=jQuery('.menu-item-has-children');for(var i=0;i<hasChildren.length;i++){var element=hasChildren[i];var a=$('<a>',{href:'#',text:uicore_frontend.back?uicore_frontend.back:"Back"});var li=$('<li>',{class:'menu-item back'});li.append(a).prependTo(element.children[1])}
window.uicoreBackLinks=!0}}
function mobileSubmenuExpand(e){e.preventDefault();$(this).siblings('.sub-menu').slideToggle()}
function mobileSubmenuOpen(e){e.preventDefault();var leftMove='';$('.uicore-mobile-menu-wrapper .uicore-menu ').addClass('uicore-animating');$(this).siblings().addClass('uicore-active');var left=$('.uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu')[0].style.left;if(left=='0'||left=='0%'||left==''){leftMove='-100%'}else{left=left.replace('-','').replace('%','');leftMove='-'+left*2+'%'}
$('.uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu').delay(200).animate({left:leftMove},300,function(){fadeItem();$('.uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu ').removeClass('uicore-animating')})}
function mobileSubmenuClose(e){e.preventDefault();var leftMove='';$('.uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu').addClass('uicore-animating');var left=$('.uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu')[0].style.left;if(left=='-100%'||left=='0%'||left==''){leftMove='0%'}else{left=left.replace('-','').replace('%','');leftMove='-'+left/2+'%'}
var _this=this;setTimeout(function(){$(_this).parent().parent().removeClass('uicore-active')},400);$('.uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu').delay(200).animate({left:leftMove},300,function(){$('.uicore-mobile-menu-wrapper .uicore-menu .sub-menu:not(.uicore-active) li').removeClass('uicore-visible');fadeItem();$('.uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu ').removeClass('uicore-animating')})}
function hamClassicSubmenuOpen(e){$(this).find('.sub-menu:first').addClass('uicore-active');fadeItem()}
function hamClassicSubmenuClose(e){$(this).children('.sub-menu:last').removeClass('uicore-active');$(this).find('li').removeClass('uicore-visible')}
function hamSubmenuToggle(e){$(this).parent().find('.sub-menu:first').toggleClass('uicore-active');$(this).parent().find('.sub-menu:first').slideToggle();if($(this).parent().find('.sub-menu:first').hasClass('uicore-active')){fadeItem()}else{$(this).parent().find('li').removeClass('uicore-visible')}}
function menuFocusIn(){$(this).siblings('li').stop().fadeTo(300,0.4);$(this).parent().siblings('li').stop().fadeTo(300,0.3)}
function menuFocusOut(){$(this).siblings('li').stop().fadeTo(300,1);$(this).parent().siblings('li').stop().fadeTo(300,1)}
function menuToggle(){if(!window.uicoreAnimation){window.uicoreAnimation=!0;var rev=$('.uicore-ham-reveal');if(document.body.classList.contains('uicore-overflow-hidden')){$('.uicore-mobile-menu-overflow').removeClass('uicore-overflow-hidden');$('body').removeClass('uicore-overflow-hidden');$('body').removeClass('uicore-mobile-nav-show');if(isMobile){if($('.uicore-animate-fade').length>0){$('.uicore-navigation-wrapper').animate({opacity:0},400)}else{setTimeout(function(){$('.uicore-navigation-wrapper').animate({opacity:0},50)},500)}}else{$('.uicore-navigation-wrapper').animate({opacity:0},200)}
$('.uicore-mobile-menu-wrapper li').removeClass('uicore-visible');$('.uicore-ham-reveal').css('animation-name','none')}else{var time=0;if(rev.length){if(!isMobile){$('.uicore-ham-reveal').css('animation-name','uiCoreAnimationsHamReveal');time=400}
setTimeout(function(){$('.uicore-navigation-wrapper').css('opacity',1)},0+time)}else{$('.uicore-navigation-wrapper').animate({opacity:1},300)}
$('body').addClass('uicore-overflow-hidden');setTimeout(function(){$('body').addClass('uicore-mobile-nav-show');$('.uicore-mobile-menu-overflow').addClass('uicore-overflow-hidden');$('.uicore-mobile-menu-wrapper .uicore-menu-container').css('left','0%');fadeItem()},50+time)}
$(this).toggleClass('collapsed');$('.uicore-mobile-menu-wrapper .uicore-menu-container .uicore-menu').toggleClass('uicore-active');setTimeout(function(){window.uicoreAnimation=!1},700)}}
function fadeItem(){var menuItem=$('ul.uicore-active > li:not(.uicore-visible):first');if(menuItem.length>0){menuItem.addClass('uicore-visible');setTimeout(function(){fadeItem()},100)}}})})}),160:(function(module,exports,__webpack_require__){"use strict";jQuery(document).ready(function(){var shopItems=document.querySelectorAll(".elementor-widget-highlighted-text.ui-e-a-animate .ui-e--highlighted-text");[].forEach.call(shopItems,function(element,index){var lines=element.querySelectorAll('.uicore-svg-wrapper path');var extra_delay=element.getAttribute('data-delay');extra_delay=extra_delay?extra_delay:0;[].forEach.call(lines,function(line,index2){new Waypoint({element:line,handler:function handler(direction){var delay=index2*300+400+parseInt(extra_delay);console.log(delay);setTimeout(function(){line.style.animationPlayState="running"},delay)},offset:"90%"})})})});function setParallax(){"use strict";jQuery(".ui-fluid-gradient-pre").each(function(){try{var elem=jQuery(this).next(".has-ui-fluid-gradient")[0];jQuery(this).prependTo(elem)}catch(e){}
jQuery(this).removeClass('ui-fluid-gradient-pre');jQuery(this).addClass('ui-fluid-gradient-wrapper')})}
jQuery(document).ready(function($){setParallax()})})},[155]);/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function(){'use strict'
var keyCounter=0
var allWaypoints={}
function Waypoint(options){if(!options){throw new Error('No options passed to Waypoint constructor')}
if(!options.element){throw new Error('No element option passed to Waypoint constructor')}
if(!options.handler){throw new Error('No handler option passed to Waypoint constructor')}
this.key='waypoint-'+keyCounter
this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options)
this.element=this.options.element
this.adapter=new Waypoint.Adapter(this.element)
this.callback=options.handler
this.axis=this.options.horizontal?'horizontal':'vertical'
this.enabled=this.options.enabled
this.triggerPoint=null
this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis})
this.context=Waypoint.Context.findOrCreateByElement(this.options.context)
if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset]}
this.group.add(this)
this.context.add(this)
allWaypoints[this.key]=this
keyCounter+=1}
Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)}
Waypoint.prototype.trigger=function(args){if(!this.enabled){return}
if(this.callback){this.callback.apply(this,args)}}
Waypoint.prototype.destroy=function(){this.context.remove(this)
this.group.remove(this)
delete allWaypoints[this.key]}
Waypoint.prototype.disable=function(){this.enabled=!1
return this}
Waypoint.prototype.enable=function(){this.context.refresh()
this.enabled=!0
return this}
Waypoint.prototype.next=function(){return this.group.next(this)}
Waypoint.prototype.previous=function(){return this.group.previous(this)}
Waypoint.invokeAll=function(method){var allWaypointsArray=[]
for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey])}
for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]()}}
Waypoint.destroyAll=function(){Waypoint.invokeAll('destroy')}
Waypoint.disableAll=function(){Waypoint.invokeAll('disable')}
Waypoint.enableAll=function(){Waypoint.Context.refreshAll()
for(var waypointKey in allWaypoints){allWaypoints[waypointKey].enabled=!0}
return this}
Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()}
Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight}
Waypoint.viewportWidth=function(){return document.documentElement.clientWidth}
Waypoint.adapters=[]
Waypoint.defaults={context:window,continuous:!0,enabled:!0,group:'default',horizontal:!1,offset:0}
Waypoint.offsetAliases={'bottom-in-view':function(){return this.context.innerHeight()-this.adapter.outerHeight()},'right-in-view':function(){return this.context.innerWidth()-this.adapter.outerWidth()}}
window.Waypoint=Waypoint}());(function(){'use strict'
function requestAnimationFrameShim(callback){window.setTimeout(callback,1000/60)}
var keyCounter=0
var contexts={}
var Waypoint=window.Waypoint
var oldWindowLoad=window.onload
function Context(element){this.element=element
this.Adapter=Waypoint.Adapter
this.adapter=new this.Adapter(element)
this.key='waypoint-context-'+keyCounter
this.didScroll=!1
this.didResize=!1
this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()}
this.waypoints={vertical:{},horizontal:{}}
element.waypointContextKey=this.key
contexts[element.waypointContextKey]=this
keyCounter+=1
if(!Waypoint.windowContext){Waypoint.windowContext=!0
Waypoint.windowContext=new Context(window)}
this.createThrottledScrollHandler()
this.createThrottledResizeHandler()}
Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?'horizontal':'vertical'
this.waypoints[axis][waypoint.key]=waypoint
this.refresh()}
Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal)
var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical)
var isWindow=this.element==this.element.window
if(horizontalEmpty&&verticalEmpty&&!isWindow){this.adapter.off('.waypoints')
delete contexts[this.key]}}
Context.prototype.createThrottledResizeHandler=function(){var self=this
function resizeHandler(){self.handleResize()
self.didResize=!1}
this.adapter.on('resize.waypoints',function(){if(!self.didResize){self.didResize=!0
Waypoint.requestAnimationFrame(resizeHandler)}})}
Context.prototype.createThrottledScrollHandler=function(){var self=this
function scrollHandler(){self.handleScroll()
self.didScroll=!1}
this.adapter.on('scroll.waypoints',function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=!0
Waypoint.requestAnimationFrame(scrollHandler)}})}
Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()}
Context.prototype.handleScroll=function(){var triggeredGroups={}
var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}}
for(var axisKey in axes){var axis=axes[axisKey]
var isForward=axis.newScroll>axis.oldScroll
var direction=isForward?axis.forward:axis.backward
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
if(waypoint.triggerPoint===null){continue}
var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint
var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint
var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint
var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint
if(crossedForward||crossedBackward){waypoint.queueTrigger(direction)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}
this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}}
Context.prototype.innerHeight=function(){if(this.element==this.element.window){return Waypoint.viewportHeight()}
return this.adapter.innerHeight()}
Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key]
this.checkEmpty()}
Context.prototype.innerWidth=function(){if(this.element==this.element.window){return Waypoint.viewportWidth()}
return this.adapter.innerWidth()}
Context.prototype.destroy=function(){var allWaypoints=[]
for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey])}}
for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy()}}
Context.prototype.refresh=function(){var isWindow=this.element==this.element.window
var contextOffset=isWindow?undefined:this.adapter.offset()
var triggeredGroups={}
var axes
this.handleScroll()
axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}}
for(var axisKey in axes){var axis=axes[axisKey]
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var adjustment=waypoint.options.offset
var oldTriggerPoint=waypoint.triggerPoint
var elementOffset=0
var freshWaypoint=oldTriggerPoint==null
var contextModifier,wasBeforeScroll,nowAfterScroll
var triggeredBackward,triggeredForward
if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp]}
if(typeof adjustment==='function'){adjustment=adjustment.apply(waypoint)}else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment)
if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}
contextModifier=axis.contextScroll-axis.contextOffset
waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment)
wasBeforeScroll=oldTriggerPoint<axis.oldScroll
nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll
triggeredBackward=wasBeforeScroll&&nowAfterScroll
triggeredForward=!wasBeforeScroll&&!nowAfterScroll
if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward)
triggeredGroups[waypoint.group.id]=waypoint.group}else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}})
return this}
Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)}
Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh()}}
Context.findByElement=function(element){return contexts[element.waypointContextKey]}
window.onload=function(){if(oldWindowLoad){oldWindowLoad()}
Context.refreshAll()}
Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim
requestFn.call(window,callback)}
Waypoint.Context=Context}());(function(){'use strict'
function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}
function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}
var groups={vertical:{},horizontal:{}}
var Waypoint=window.Waypoint
function Group(options){this.name=options.name
this.axis=options.axis
this.id=this.name+'-'+this.axis
this.waypoints=[]
this.clearTriggerQueues()
groups[this.axis][this.name]=this}
Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)}
Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}}
Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction]
var reverse=direction==='up'||direction==='left'
waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint)
for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i]
if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction])}}}
this.clearTriggerQueues()}
Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
var isLast=index===this.waypoints.length-1
return isLast?null:this.waypoints[index+1]}
Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
return index?this.waypoints[index-1]:null}
Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)}
Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
if(index>-1){this.waypoints.splice(index,1)}}
Group.prototype.first=function(){return this.waypoints[0]}
Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]}
Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)}
Waypoint.Group=Group}());(function(){'use strict'
var $=window.jQuery
var Waypoint=window.Waypoint
function JQueryAdapter(element){this.$element=$(element)}
$.each(['innerHeight','innerWidth','off','offset','on','outerHeight','outerWidth','scrollLeft','scrollTop'],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments)
return this.$element[method].apply(this.$element,args)}})
$.each(['extend','inArray','isEmptyObject'],function(i,method){JQueryAdapter[method]=$[method]})
Waypoint.adapters.push({name:'jquery',Adapter:JQueryAdapter})
Waypoint.Adapter=JQueryAdapter}());(function(){'use strict'
var Waypoint=window.Waypoint
function createExtension(framework){return function(){var waypoints=[]
var overrides=arguments[0]
if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1])
overrides.handler=arguments[0]}
this.each(function(){var options=framework.extend({},overrides,{element:this})
if(typeof options.context==='string'){options.context=framework(this).closest(options.context)[0]}
waypoints.push(new Waypoint(options))})
return waypoints}}
if(window.jQuery){window.jQuery.fn.elementorWaypoint=createExtension(window.jQuery)}
if(window.Zepto){window.Zepto.fn.elementorWaypoint=createExtension(window.Zepto)}}());