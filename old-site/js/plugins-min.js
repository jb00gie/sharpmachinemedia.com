/* **********************************************
     Begin bootstrap-scrollspy.js
********************************************** *//* =============================================================
 * bootstrap-scrollspy.js v2.3.0
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n);this.$scrollElement=i.on("scroll.scroll-spy.data-api",r);this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a";this.$body=e("body");this.refresh();this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]);this.targets=e([]);n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]);t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t;e(this.selector).parent(".active").removeClass("active");r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]';n=e(r).parent("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active"));n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s));typeof n=="string"&&i[n]()})};e.fn.scrollspy.Constructor=t;e.fn.scrollspy.defaults={offset:10};e.fn.scrollspy.noConflict=function(){e.fn.scrollspy=n;return this};e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery);!function(e){"use strict";var t=function(t,n){this.$element=e(t);this.options=e.extend({},e.fn.collapse.defaults,n);this.options.parent&&(this.$parent=e(this.options.parent));this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension();n=e.camelCase(["scroll",t].join("-"));r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide");i||r.data("collapse",null)}this.$element[t](0);this.transition("addClass",e.Event("show"),"shown");e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension();this.reset(this.$element[t]());this.transition("removeClass",e.Event("hide"),"hidden");this.$element[t](0)},reset:function(e){var t=this.dimension();this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth;this.$element[e!==null?"addClass":"removeClass"]("collapse");return this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset();i.transitioning=0;i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1;this.$element[t]("in");e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s));typeof n=="string"&&i[n]()})};e.fn.collapse.defaults={toggle:!0};e.fn.collapse.Constructor=t;e.fn.collapse.noConflict=function(){e.fn.collapse=n;return this};e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed");e(i).collapse(s)})}(window.jQuery);(function(e){function n(e){return typeof e=="object"?e:{top:e,left:e}}var t=e.scrollTo=function(t,n,r){e(window).scrollTo(t,n,r)};t.defaults={axis:"xy",duration:parseFloat(e.fn.jquery)>=1.3?0:1,limit:!0};t.window=function(t){return e(window)._scrollable()};e.fn._scrollable=function(){return this.map(function(){var t=this,n=!t.nodeName||e.inArray(t.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;if(!n)return t;var r=(t.contentWindow||t).document||t.ownerDocument||t;return/webkit/i.test(navigator.userAgent)||r.compatMode=="BackCompat"?r.body:r.documentElement})};e.fn.scrollTo=function(r,i,s){if(typeof i=="object"){s=i;i=0}typeof s=="function"&&(s={onAfter:s});r=="max"&&(r=9e9);s=e.extend({},t.defaults,s);i=i||s.duration;s.queue=s.queue&&s.axis.length>1;s.queue&&(i/=2);s.offset=n(s.offset);s.over=n(s.over);return this._scrollable().each(function(){function d(e){u.animate(c,i,s.easing,e&&function(){e.call(this,a,s)})}if(r==null)return;var o=this,u=e(o),a=r,l,c={},p=u.is("html,body");switch(typeof a){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(a)){a=n(a);break}a=e(a,this);if(!a.length)return;case"object":if(a.is||a.style)l=(a=e(a)).offset()}e.each(s.axis.split(""),function(e,n){var r=n=="x"?"Left":"Top",i=r.toLowerCase(),f="scroll"+r,v=o[f],m=t.max(o,n);if(l){c[f]=l[i]+(p?0:v-u.offset()[i]);if(s.margin){c[f]-=parseInt(a.css("margin"+r))||0;c[f]-=parseInt(a.css("border"+r+"Width"))||0}c[f]+=s.offset[i]||0;s.over[i]&&(c[f]+=a[n=="x"?"width":"height"]()*s.over[i])}else{var y=a[i];c[f]=y.slice&&y.slice(-1)=="%"?parseFloat(y)/100*m:y}s.limit&&/^\d+$/.test(c[f])&&(c[f]=c[f]<=0?0:Math.min(c[f],m));if(!e&&s.queue){v!=c[f]&&d(s.onAfterFirst);delete c[f]}});d(s.onAfter)}).end()};t.max=function(t,n){var r=n=="x"?"Width":"Height",i="scroll"+r;if(!e(t).is("html,body"))return t[i]-e(t)[r.toLowerCase()]();var s="client"+r,o=t.ownerDocument.documentElement,u=t.ownerDocument.body;return Math.max(o[i],u[i])-Math.min(o[s],u[s])}})(jQuery);(function(e,t,n,r){var i=function(r,i){this.elem=r;this.$elem=e(r);this.options=i;this.metadata=this.$elem.data("plugin-options");this.$nav=this.$elem.find("a");this.$win=e(t);this.sections={};this.didScroll=!1;this.$doc=e(n);this.docHeight=this.$doc.height()};i.prototype={defaults:{currentClass:"current",changeHash:!1,easing:"swing",filter:"",scrollSpeed:750,scrollOffset:0,scrollThreshold:.5,begin:!1,end:!1,scrollChange:!1},init:function(){var t=this;t.config=e.extend({},t.defaults,t.options,t.metadata);t.config.filter!==""&&(t.$nav=t.$nav.filter(t.config.filter));t.$nav.on("click.onePageNav",e.proxy(t.handleClick,t));t.getPositions();t.bindInterval();t.$win.on("resize.onePageNav",e.proxy(t.getPositions,t));return this},adjustNav:function(e,t){e.$elem.find("."+e.config.currentClass).removeClass(e.config.currentClass);t.addClass(e.config.currentClass)},bindInterval:function(){var e=this,t;e.$win.on("scroll.onePageNav",function(){e.didScroll=!0});e.t=setInterval(function(){t=e.$doc.height();if(e.didScroll){e.didScroll=!1;e.scrollChange()}if(t!==e.docHeight){e.docHeight=t;e.getPositions()}},250)},getHash:function(e){return e.attr("href").split("#")[1]},getPositions:function(){var t=this,n,r,i;t.$nav.each(function(){n=t.getHash(e(this));i=e("#"+n);if(i.length){r=i.offset().top;t.sections[n]=Math.round(r)-t.config.scrollOffset}})},getSection:function(e){var t=null,n=Math.round(this.$win.height()*this.config.scrollThreshold);for(var r in this.sections)this.sections[r]-n<e&&(t=r);return t},handleClick:function(n){var r=this,i=e(n.currentTarget),s=i.parent(),o="#"+r.getHash(i);if(!s.hasClass(r.config.currentClass)){r.config.begin&&r.config.begin();r.adjustNav(r,s);r.unbindInterval();e.scrollTo(o,r.config.scrollSpeed,{axis:"y",easing:r.config.easing,offset:{top:-r.config.scrollOffset},onAfter:function(){r.config.changeHash&&(t.location.hash=o);r.bindInterval();r.config.end&&r.config.end()}})}n.preventDefault()},scrollChange:function(){var e=this.$win.scrollTop(),t=this.getSection(e),n;if(t!==null){n=this.$elem.find('a[href$="#'+t+'"]').parent();if(!n.hasClass(this.config.currentClass)){this.adjustNav(this,n);this.config.scrollChange&&this.config.scrollChange(n)}}},unbindInterval:function(){clearInterval(this.t);this.$win.unbind("scroll.onePageNav")}};i.defaults=i.prototype.defaults;e.fn.onePageNav=function(e){return this.each(function(){(new i(this,e)).init()})}})(jQuery,window,document);