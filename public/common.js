// var openApp = "6.2.0";
// var newbieVip = "6.1.0";

var UA = {};
var ua = navigator.userAgent.toLowerCase(),
  s;
UA.ie = (s = ua.match(/(msie\s|trident.*rv:)([\d.]+)/)) ? s[2] : false;
UA.firefox = (s = ua.match(/firefox\/([\d.]+)/)) ? !!s[1] : false;
UA.chrome = (s = ua.match(/chrome\/([\d.]+)/)) ? !!s[1] : false;
UA.opera = (s = ua.match(/opera.([\d.]+)/)) ? !!s[1] : false;
UA.safari = (s = ua.match(/version\/([\d.]+).*safari/)) ? !!s[1] : false;
UA.android = (s = ua.match(/android/)) ? !!s : false;
UA.iphone = (s = ua.match(/iphone os/)) ? !!s : false;
UA.ipad = (s = ua.match(/ipad/)) ? !!s : false;
UA.ipod = (s = ua.match(/ipod/)) ? !!s : false;
UA.ios = UA.ipad || UA.iphone || UA.ipod;
UA.isWin32 = /win32/i.test(window.navigator.platform);
UA.isQQ = (s = ua.match(/\sqq\//)) ? !!s : false;
UA.isWeixin = (s = ua.match(/MicroMessenger/i)) ? !!s : false; //判断是否是在微信浏览器里面
UA.isUcweb = (s = ua.match(/ucbrowser/)) ? !!s : false;
UA.isMqq = (s = ua.match(/mqqbrowser/)) ? !!s : false; //是否是手机qq浏览器
//是否是视频需要hack的浏览器，指视频上不能盖元素的浏览器  ps: ios qq浏览器的视频上目前没有找到方案盖元素
UA.isVideoHackBrowser =
  (UA.android && (UA.isUcweb || UA.isMqq || UA.isWeixin)) ||
  (UA.ios && UA.isMqq);

function showOpenAppBtn() {
  var open_app_link = getUrlParameter("open_app_link");
  if (open_app_link !== "") {
    $("#floatbtn").css("display", "block");
    $("#button_android").attr("href", open_app_link);

    // var openAppHtml = [];
    // openAppHtml.push('<footer class="footer" id="floatbtn">');
    // openAppHtml.push('<a class="ball" href="' + open_app_link + '"><img src="img/logo.png">Join & get a chance to win smartphones! </a>');
    // openAppHtml.push('<div class="clear"></div></footer>');
    //   $(body).append(openAppHtml.join(" "));
  } else {
    $("#floatbtn").css("display", "none");

    if (UA.android) {
      $("#button_android").attr(
        "href",
        "http://play.google.com/store/apps/details?id=com.thankyo.hwgame"
      );
    } else if (UA.ios) {
      $("#button_android").attr(
        "href",
        "http://itunes.apple.com/app/streamkar/id1182923162"
      );
    } else {
      $("#button_android").attr("href", "https://www.streamkar.com/");
    }
  }
}

function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  var results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function showToast(msg, duration) {
  duration = isNaN(duration) ? 3000 : duration;
  var m = document.createElement("div");
  m.innerHTML = msg;
  m.style.cssText =
    "max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 10px;";
  document.body.appendChild(m);
  setTimeout(function () {
    var d = 0.5;
    m.style.webkitTransition =
      "-webkit-transform " + d + "s ease-in, opacity " + d + "s ease-in";
    m.style.opacity = "0";
    setTimeout(function () {
      document.body.removeChild(m);
    }, d * 1000);
  }, duration);
}

function openFeedbackActivity() {
  // gtag('send', 'event', {eventCategory: 'GoToFeedback', eventAction: 'Click', eventLabel: 'GoToFeedback'});

  try {
    // showToast("Opening feedback page...");
    window.phone.startFeedbackActivity();
  } catch (_error) {
    console.error(_error);
    showToast("Open feedback page error...");
  }
}
