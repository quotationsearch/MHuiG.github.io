function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}HTMLElement.prototype.outerHeight=function(e){var t=this.offsetHeight;if(!e)return t;var n=window.getComputedStyle(this);return t+=parseInt(n.marginTop,10)+parseInt(n.marginBottom,10)},HTMLElement.prototype.wrap=function(e){this.parentNode.insertBefore(e,this),this.parentNode.removeChild(this),e.appendChild(this)},NexT.utils={wrapImageWithFancyBox:function(){document.querySelectorAll(".post-body :not(a) > img, .post-body > img").forEach(function(e){var t=$(e),n=t.attr("data-src")||t.attr("src"),o=t.wrap('<a class="fancybox fancybox.image" href="'+n+'" itemscope itemtype="http://schema.org/ImageObject" itemprop="url"></a>').parent("a");t.is(".post-gallery img")?(o.addClass("post-gallery-img"),o.attr("data-fancybox","gallery").attr("rel","gallery")):t.is(".group-picture img")?o.attr("data-fancybox","group").attr("rel","group"):o.attr("data-fancybox","default").attr("rel","default");var r=t.attr("title")||t.attr("alt");r&&(o.append('<p class="image-caption">'+r+"</p>"),o.attr("title",r).attr("data-caption",r))}),$.fancybox.defaults.hash=!1,$(".fancybox").fancybox({loop:!0,helpers:{overlay:{locked:!1}}})},registerExtURL:function(){document.querySelectorAll(".exturl").forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-url"),n=decodeURIComponent(escape(window.atob(t)));return window.open(n,"_blank","noopener"),!1})})},registerCopyCode:function(){document.querySelectorAll("figure.highlight").forEach(function(e){function t(e){"mac"===CONFIG.copycode.style?e.innerHTML='<i class="fa fa-clipboard"></i>':e.innerText=CONFIG.translation.copy_button}var n=document.createElement("div");n.classList.add("highlight-wrap"),e.wrap(n),e.parentNode.insertAdjacentHTML("beforeend",'<div class="copy-btn"></div>');var o=e.parentNode.querySelector(".copy-btn");o.addEventListener("click",function(e){var t=e.currentTarget,n=[].concat(_toConsumableArray(t.parentNode.querySelectorAll(".code .line"))).map(function(e){return e.innerText}).join("\n"),o=document.createElement("textarea"),r=window.scrollY;o.style.top=r+"px",o.style.position="absolute",o.style.opacity="0",o.readOnly=!0,o.value=n,document.body.append(o);var a=document.getSelection(),i=0<a.rangeCount&&a.getRangeAt(0);o.select(),o.setSelectionRange(0,n.length),o.readOnly=!1;var c=document.execCommand("copy");CONFIG.copycode.show_result&&(t.innerText=c?CONFIG.translation.copy_success:CONFIG.translation.copy_failure),o.blur(),t.blur(),i&&(a.removeAllRanges(),a.addRange(i)),document.body.removeChild(o)}),o.addEventListener("mouseleave",function(e){setTimeout(function(){t(e.target)},300)}),t(o)})},wrapTableWithBox:function(){document.querySelectorAll("table").forEach(function(e){var t=document.createElement("div");t.className="table-container",e.wrap(t)})},registerVideoIframe:function(){document.querySelectorAll("iframe").forEach(function(e){var t=new RegExp(["www.youtube.com","player.vimeo.com","player.youku.com","player.bilibili.com","www.tudou.com"].join("|"));if(!e.parentNode.matches(".video-container")&&0<e.src.search(t)){var n=document.createElement("div");n.className="video-container",e.wrap(n);var o=Number(e.width),r=Number(e.height);o&&r&&(e.parentNode.style.paddingTop=r/o*100+"%")}})},registerScrollPercent:function(){var a=document.querySelector(".back-to-top"),i=document.querySelector(".reading-progress-bar");window.addEventListener("scroll",function(){var e;if(a||i){var t=document.querySelector(".container").offsetHeight,n=window.innerHeight,o=n<t?t-n:document.body.scrollHeight-n,r=Math.round(100*window.scrollY/o);e=Math.min(r,100)+"%"}a&&(50<window.scrollY?a.classList.add("back-to-top-on"):a.classList.remove("back-to-top-on"),a.querySelector("span").innerText=e),i&&(i.style.width=e)}),a&&a.addEventListener("click",function(){window.anime({targets:[document.documentElement,document.body],duration:500,easing:"linear",scrollTop:0})})},registerTabsTag:function(){document.querySelectorAll(".tabs ul.nav-tabs .tab").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.currentTarget;if(!t.classList.contains("active")){[].concat(_toConsumableArray(t.parentNode.children)).forEach(function(e){e.classList.remove("active")}),t.classList.add("active");var n=document.getElementById(t.querySelector("a").getAttribute("href").replace("#",""));[].concat(_toConsumableArray(n.parentNode.children)).forEach(function(e){e.classList.remove("active")}),n.classList.add("active"),n.dispatchEvent(new Event("tabs:click",{bubbles:!0}))}})}),window.dispatchEvent(new Event("tabs:register"))},registerCanIUseTag:function(){window.addEventListener("message",function(e){var t=e.data;if("string"==typeof t&&-1<t.indexOf("ciu_embed")){var n=t.split(":")[1],o=t.split(":")[2];document.querySelector("iframe[data-feature="+n+"]").style.height=parseInt(o,10)+"px"}},!1)},registerActiveMenuItem:function(){document.querySelectorAll(".menu-item").forEach(function(e){var t=e.querySelector("a[href]");if(t){var n=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),o=t.pathname!==CONFIG.root&&0===location.pathname.indexOf(t.pathname);t.hostname===location.hostname&&(n||o)?e.classList.add("menu-item-active"):e.classList.remove("menu-item-active")}})},registerSidebarTOC:function(){var i=document.querySelectorAll(".post-toc li"),c=[].concat(_toConsumableArray(i)).map(function(e){var t=e.querySelector("a.nav-link");return t.addEventListener("click",function(e){e.preventDefault();var t=document.getElementById(e.currentTarget.getAttribute("href").replace("#","")).getBoundingClientRect().top+window.scrollY;window.anime({targets:[document.documentElement,document.body],duration:500,easing:"linear",scrollTop:t+10})}),document.getElementById(t.getAttribute("href").replace("#",""))}),s=document.querySelector(".post-toc-wrap");!function r(a){a=Math.floor(a+1e4);var t=new IntersectionObserver(function(e,t){var n=document.documentElement.scrollHeight+100;if(a<n)return t.disconnect(),void r(n);var o=function(e){var t=0,n=e[t];if(0<n.boundingClientRect.top)return 0===(t=c.indexOf(n.target))?0:t-1;for(;t<e.length;t++){if(!(e[t].boundingClientRect.top<=0))return c.indexOf(n.target);n=e[t]}return c.indexOf(n.target)}(e);!function(e){if(!e.classList.contains("active-current")){document.querySelectorAll(".post-toc .active").forEach(function(e){e.classList.remove("active","active-current")}),e.classList.add("active","active-current");for(var t=e.parentNode;!t.matches(".post-toc");)t.matches("li")&&t.classList.add("active"),t=t.parentNode;window.anime({targets:s,duration:200,easing:"linear",scrollTop:s.scrollTop-s.offsetHeight/2+e.getBoundingClientRect().top-s.getBoundingClientRect().top})}}(i[o])},{rootMargin:a+"px 0px -100% 0px",threshold:0});c.forEach(function(e){return t.observe(e)})}(document.documentElement.scrollHeight)},hasMobileUA:function(){var e=navigator.userAgent;return/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(e)},isTablet:function(){return window.screen.width<992&&767<window.screen.width&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},isMuse:function(){return"Muse"===CONFIG.scheme},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme},isGemini:function(){return"Gemini"===CONFIG.scheme},initSidebarDimension:function(){var e=document.querySelector(".sidebar-nav"),t="none"!==e.style.display?e.outerHeight(!0):0,n=CONFIG.sidebar.offset||12,o=CONFIG.back2top.enable&&CONFIG.back2top.sidebar?document.querySelector(".back-to-top").offsetHeight:0,r=CONFIG.sidebarPadding+t+o;(NexT.utils.isPisces()||NexT.utils.isGemini())&&(r+=2*n-12);var a=document.body.offsetHeight-r+"px";document.querySelector(".site-overview-wrap").style.maxHeight=a,document.querySelector(".post-toc-wrap").style.maxHeight=a},updateSidebarPosition:function(){var e=document.querySelector(".sidebar-nav"),t=document.querySelector(".post-toc");if(t?(e.style.display="",e.classList.add("motion-element"),document.querySelector(".sidebar-nav-toc").click()):(e.style.display="none",e.classList.remove("motion-element"),document.querySelector(".sidebar-nav-overview").click()),NexT.utils.initSidebarDimension(),this.isDesktop()&&!this.isPisces()&&!this.isGemini()){var n=CONFIG.page.sidebar;"boolean"!=typeof n&&(n="always"===CONFIG.sidebar.display||"post"===CONFIG.sidebar.display&&t),n&&window.dispatchEvent(new Event("sidebar:show"))}},getScript:function(e,n,t){if(t)n();else{var o=document.createElement("script");o.onload=o.onreadystatechange=function(e,t){!t&&o.readyState&&!/loaded|complete/.test(o.readyState)||(o.onload=o.onreadystatechange=null,o=void 0,!t&&n&&setTimeout(n,0))},o.src=e,document.head.appendChild(o)}}};