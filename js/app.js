$(document).ready(function(){function e(){var e=new TimelineLite;e.to("#creative",1,{transform:"translateY(0px)",opacity:"1",ease:Expo.easeOut,delay:"1"}).to("#subtitle",.7,{transform:"translateY(0px)",opacity:"1",ease:Expo.easeOut,delay:"-0.7"})}$(".burger").click(function(){$(this).toggleClass("burgerCross")}),$(".burger").click(function(){$(".burger").hasClass("burgerCross")?($("nav").addClass("nav--open"),$(".line1").addClass("lineStatic"),$(".line3").addClass("lineStatic"),$("body").toggleClass("overflow")):($("nav").removeClass("nav--open"),$(".line1").removeClass("lineStatic"),$(".line3").removeClass("lineStatic"))}),$(".nav li a").click(function(){$(".burger").hasClass("burger")&&($(".burger").removeClass("burger"),$("nav").removeClass("nav--open"))}),window.onload=function(){var e=new TimelineLite;e.to("circle",0,{rotation:"360",repeat:-1,ease:"linear"}).to("#circle",10,{rotation:"360",repeat:-1,ease:"linear"})},$("nav ul li a").click(function(){$(".burger").hasClass("burgerCross")&&($(".burger").removeClass("burgerCross"),$("nav").removeClass("nav--open"),$("nav ul li a").addClass("current"),$("body").removeClass("overflow"))}),$("nav a").click(function(e){var t=$(this).attr("href"),a=70,i=$(t).offset().top-a;$("html, body").animate({scrollTop:i},500),e.preventDefault()}),$(window).scroll(function(){$(window).scrollTop()>400?$("nav").addClass("nav--show "):$("nav").removeClass("nav--show  ")}),e();var t={easing:"ease-in-out",scale:1,viewFactor:.3,reset:!1},a={easing:"ease-in-out",scale:1,viewOffset:{top:0,right:0,bottom:0,left:0},viewFactor:1,duration:1e3,reset:!1};window.sr=ScrollReveal(),sr.reveal(".sr",t),sr.reveal(".h",a),$("#closeVideo").click(function(e){e.preventDefault(),$("body").removeClass("overflow"),console.log("yolo"),video.pause(),$("#play-pause").html('<i class="fa fa-play" aria-hidden="true"></i>');var t=new TimelineLite;t.to(".video-wrapper",0,{left:"0",width:"100%"}).to("#video",0,{display:"none"}).to(".blackBord",.5,{height:"0"}).to(".blackBord",0,{display:"none"}).to(".afterVid",.4,{height:"0"}).to(".beforeVid",.4,{height:"0",delay:"-0.4"}).to(".video-wrapper",0,{display:"none"})}),$("#startVideo").click(function(e){e.preventDefault(),$("body").addClass("overflow"),setTimeout(function(){video.play()},1e3),$("#play-pause").html('<i class="fa fa-pause" aria-hidden="true"></i>');var t=new TimelineLite;t.to(".video-wrapper",0,{display:"block"}).to(".afterVid",.4,{height:"50%"}).to(".beforeVid",.4,{height:"50%",delay:"-0.4"}).to(".blackBord",0,{display:"block"}).to(".blackBord",.5,{height:"50"}).to("#video",0,{display:"block"})}),window.devicePixelRatio=2,function(){function e(){}function t(e,t){this.path=e,"undefined"!=typeof t&&null!==t?(this.at_2x_path=t,this.perform_check=!1):(this.at_2x_path=e.replace(/\.\w+$/,function(e){return"@2x"+e}),this.perform_check=!0)}function a(e){this.el=e,this.path=new t(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var a=this;this.path.check_2x_variant(function(e){e&&a.swap()})}var i="undefined"==typeof exports?window:exports,o={check_mime_type:!0};i.Retina=e,e.configure=function(e){null==e&&(e={});for(var t in e)o[t]=e[t]},e.init=function(e){null==e&&(e=i);var t=e.onload||new Function;e.onload=function(){var e,i,o=document.getElementsByTagName("img"),n=[];for(e=0;e<o.length;e++)i=o[e],n.push(new a(i));t()}},e.isRetina=function(){var e="(-webkit-min-device-pixel-ratio: 1.5),                            (min--moz-device-pixel-ratio: 1.5),                            (-o-min-device-pixel-ratio: 3/2),                            (min-resolution: 1.5dppx)";return i.devicePixelRatio>1||!(!i.matchMedia||!i.matchMedia(e).matches)},i.RetinaImagePath=t,t.confirmed_paths=[],t.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},t.prototype.check_2x_variant=function(e){var a,i=this;return this.is_external()?e(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in t.confirmed_paths?e(!0):(a=new XMLHttpRequest,a.open("HEAD",this.at_2x_path),a.onreadystatechange=function(){if(4!=a.readyState)return e(!1);if(a.status>=200&&a.status<=399){if(o.check_mime_type){var n=a.getResponseHeader("Content-Type");if(null==n||!n.match(/^image/i))return e(!1)}return t.confirmed_paths.push(i.at_2x_path),e(!0)}return e(!1)},a.send(),void 0):e(!0)},i.RetinaImage=a,a.prototype.swap=function(e){function t(){a.el.complete?(a.el.setAttribute("width",a.el.offsetWidth),a.el.setAttribute("height",a.el.offsetHeight),a.el.setAttribute("src",e)):setTimeout(t,5)}"undefined"==typeof e&&(e=this.path.at_2x_path);var a=this;t()},e.isRetina()&&e.init(i)}();new Waypoint({element:document.getElementsByClassName("triggerNav"),handler:function(e){$(".nav").toggleClass("is-black")},offset:"0%"});Pace.on("done",function(){$(".cover").fadeOut(1e3)}),$(window).on("resize",function(){var e=$(window);e.width()>=768?$(".to-reset").removeClass("reset"):e.width()<768&&$(".to-reset").addClass("reset")}),$(window).on("load",function(){var e=$(window);e.width()>=768?$(".to-reset").removeClass("reset"):e.width()<768&&$(".to-reset").addClass("reset")}),video()});