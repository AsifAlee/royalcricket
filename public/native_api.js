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
// module.exports = UA;

/**
 * h5的rem适配方案
 * 设置html根节点font-size
 */
// var FastClick = require('fastclick');
// (function (win) {
//   var html = document.getElementsByTagName("html")[0];
//   var fs = parseInt(getStyle(html, 'fontSize'));

//   function getStyle(obj, attr) {
//     if (obj.currentStyle) {
//       return obj.currentStyle[attr];
//     }
//     else {
//       return getComputedStyle(obj, false)[attr];
//     }
//   }

//   function setUnitA() {
//     document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 / fs * 100 + "%";

//     console.log()
//   }

//   var h = null;
//   window.addEventListener("resize", function () {
//     clearTimeout(h);
//     h = setTimeout(setUnitA, 300);
//   }, false);
//   setUnitA();

//   if ('addEventListener' in document) {
//     document.addEventListener('DOMContentLoaded', function () {
//       FastClick.attach(document.body);
//     }, false);
//   }
// })(window);

/*******************************************************************************
 * Check the page is in the container
 ******************************************************************************/
/*******************************************************************************
 * Check the page is in the container, Check page compatibility level
 ******************************************************************************/
(function () {
  var COMPATIBLE_LEVEL = {
    FULL: 2, //app中打开
    UGLY: 1, //不是在app中打开，但有链接中token
    FAIL: 0, //普通浏览器打开也没有token
  };

  window.COMPATIBLE_LEVEL = COMPATIBLE_LEVEL;

  function isInContainer() {
    var uaStr = window.navigator.userAgent;
    var uaResult = /(?:KKTV|KKGAME)\ Native\/[\d\.]{1,8}/i.test(uaStr);
    if (uaResult) {
      return COMPATIBLE_LEVEL.FULL;
    } else if (/token=\w{32}/i.test(window.location.href)) {
      return COMPATIBLE_LEVEL.UGLY;
    }
    return COMPATIBLE_LEVEL.FAIL;
  }

  function overideRequest() {
    var _request = KKApi.Client.prototype.request;
    var loadDate = new Date();
    KKApi.Client.prototype.request = function (parameter, callback, CDNMinute) {
      if (parameter.hasOwnProperty("token")) {
        var now = new Date();
        if (now - loadDate > 1000) {
          window.open("http://www.kktv1.com/m/");
        }
        return false;
      } else {
        return _request.apply(this, arguments);
      }
    };
  }

  window.COMPATIBLE = isInContainer();
  // window.COMPATIBLE ? undefined : overideRequest();
})();

/*******************************************************************************
 * Get API instance, depending on device platform
 ******************************************************************************/
(function (exp) {
  function Mobile() {}

  exp.Mobile = Mobile;

  Mobile.prototype.getUserInfo = function (cb) {
    if (!cb) {
      throw new Error("Null Pointer Error");
    }

    return true;
  };

  Mobile.prototype.share = function (title, content, imgUrl, shareUrl) {
    if (!content) {
      throw new Error("Null Pointer Error");
    }
  };

  Mobile.prototype.shareBonus = function () {};

  Mobile.prototype._customActivity = function (packageName, key, value) {
    if (!packageName) {
      throw new Error("Null Pointer Error");
    }
  };

  Mobile.prototype.startLoginActivity = function () {
    this._customActivity(this.ACTIVITIES.LOGIN);
  };

  Mobile.prototype.gotoSquad = function () {
    this._customActivity(this.ACTIVITIES.SQUADACTIVITY);
  };

  Mobile.prototype.gotoSpotlight = function () {
    this._customActivity(this.ACTIVITIES.SPOTLIGHTACTIVITY);
  };

  //一元夺宝
  Mobile.prototype.treasureActivity = function () {
    this._customActivity(this.ACTIVITIES.TREASUREACTIVITY);
  };

  Mobile.prototype.gotoTopic = function (topicId, topicName) {
    this._customActivity(
      this.ACTIVITIES.TOPICACTIVITY,
      ["topicId", "topicTitle"],
      [topicId, topicName]
    );
  };

  Mobile.prototype.gotoPublish = function (topicId, topicName) {
    this._customActivity(
      this.ACTIVITIES.PUBLISHACTIVITY,
      ["topicId", "topicTitle"],
      [topicId, topicName]
    );
  };

  Mobile.prototype.startPaymentActivity = function () {};

  Mobile.prototype.chargePackageGiftActivity = function () {};

  Mobile.prototype.getVersionCode = function () {};

  Mobile.prototype.closePage = function () {};

  Mobile.prototype.onResume = function (cb) {
    this._resumeCallback = this._resumeCallback || [];
    typeof cb === "function" && this._resumeCallback.push(cb);
  };

  Mobile.prototype.finish = function () {};

  Mobile.prototype.notify = function () {};
  Mobile.prototype.updateMoney = function (balance, cb) {};
  Mobile.prototype.updateDiamond = function (balance, cb) {};

  Mobile.prototype.updateGold = function (balance, cb) {};

  Mobile.prototype.startActivityPage = function (title, url) {};

  Mobile.prototype.boughtVip = function (vipId, cb) {};

  Mobile.prototype.boughtCar = function (carId, cb) {};

  Mobile.prototype.onBack = function () {};

  /**
   *  JS修改游戏h5的高宽比 ratio = 高:宽， ratio = -1 全屏
   * @param ratio
   */
  Mobile.prototype.setH5Height = function (ratio) {};

  Mobile.prototype.startFeedbackActivity = function () {};

  Mobile.prototype.ACTIVITIES = {
    LOGIN: undefined,
    PAYMENT: undefined,
    FEEDBACK: undefined,
    PACKAGE: undefined,
    SQUADACTIVITY: undefined,
    SPOTLIGHTACTIVITY: undefined,
    TOPICACTIVITY: undefined,
    PUBLISHACTIVITY: undefined,
  };

  UA.android &&
    (function (Parent) {
      function Android() {
        exp.Application &&
          exp.Application.closeHardware &&
          exp.Application.closeHardware();
        this._super = Parent.prototype;
      }

      Parent.Android = Android;

      Android.prototype = new Parent();
      Android.prototype.getUserInfo = function (cb) {
        this._super.getUserInfo.apply(this, arguments);
        var _info =
          exp.Application &&
          exp.Application.getUserInfo &&
          exp.Application.getUserInfo();
        var info = _info || "{}";
        info = JSON.parse(info);
        setTimeout(function () {
          cb instanceof Function && cb(info);
        }, 100);

        return true;
      };
      Android.prototype.share = function (title, content, imgUrl, shareUrl) {
        try {
          this._super.share.apply(this, arguments);
          if (exp.COMPATIBLE == exp.COMPATIBLE_LEVEL.FULL) {
            exp.Application.sharePage(
              title || null,
              content,
              shareUrl || null,
              imgUrl || null
            );
          } else {
            exp.Application.share(content, imgUrl);
          }
        } catch (e) {
          // alert(e.message);
          throw e;
        }
      };

      Android.prototype.shareBonus = function () {
        try {
          this._super.shareBonus.apply(this, arguments);
          exp.Application.shareBonus();
        } catch (e) {
          // alert(e.message);
          throw e;
        }
      };
      Android.prototype.finish = function () {
        this._super.finish.apply(this, arguments);
        window.Application.startLiveRoom();
      };

      Android.prototype.notify = function (data) {
        this._super.notify.apply(this, arguments);
        data && exp.Application.notify(JSON.stringify(data));
      };
      Android.prototype._customActivity = function (packageName, key, value) {
        this._super._customActivity.apply(this, arguments);
        exp.Application.startCustomActivity(
          packageName,
          key || null,
          value || null
        );
      };
      Android.prototype.startPaymentActivity = function () {
        this._super.startPaymentActivity.apply(this, arguments);
        this._customActivity(this.ACTIVITIES.PAYMENT);
      };

      Android.prototype.startFeedbackActivity = function () {
        this._super.startFeedbackActivity.apply(this, arguments);
        this._customActivity(this.ACTIVITIES.FEEDBACK);
      };

      Android.prototype.chargePackageGiftActivity = function () {
        this._super.chargePackageGiftActivity.apply(this, arguments);
        this._customActivity(this.ACTIVITIES.PACKAGE);
      };

      Android.prototype.getVersionCode = function (cb) {
        this._super.getVersionCode.apply(this, arguments);
        var vi =
          exp.gameAPIJava &&
          exp.gameAPIJava.getVersionCode &&
          exp.gameAPIJava.getVersionCode();

        cb(vi);
      };

      Android.prototype.closePage = function () {
        this._super.closePage.apply(this, arguments);
        exp.gameAPIJava &&
          exp.gameAPIJava.closePage &&
          exp.gameAPIJava.closePage();
      };

      Android.prototype.onBack = function (cb) {
        if (!(cb instanceof Function)) {
          return false;
        }
        this._backList = this._backList || [];
        this._backList.push(cb);
        return true;
      };

      Android.prototype.updateMoney = function (balance, cb) {
        if (typeof balance !== "number") {
          return;
        }
        balance = Math.max(0, balance);

        this._super.updateMoney.apply(this, arguments);
        exp.gameAPIJava.setProperty("currentMoney", balance.toString());
        cb instanceof Function && setTimeout(cb);
      };

      Android.prototype.updateGold = function (balance, cb) {
        if (typeof balance !== "number") {
          return;
        }
        balance = Math.max(0, balance);

        this._super.updateGold.apply(this, arguments);
        exp.gameAPIJava.setProperty("currentGold", balance.toString());
        cb instanceof Function && setTimeout(cb);
      };

      Android.prototype.updateDiamond = function (balance, cb) {
        if (typeof balance !== "number") {
          return;
        }
        balance = Math.max(0, balance);

        this._super.updateDiamond.apply(this, arguments);
        exp.gameAPIJava.setProperty("currentDiamond", balance.toString());
        cb instanceof Function && setTimeout(cb);
      };

      Android.prototype.startActivityPage = function (title, url) {
        this._super.startActivityPage.apply(this, arguments);
        exp.gameAPIJava.startActivityPage(title, url);
      };

      Android.prototype.boughtVip = function (vipId, cb) {
        if (vipId == undefined) {
          return;
        }

        this._super.boughtVip.apply(this, arguments);
        exp.gameAPIJava.setProperty("vipType", vipId.toString());
        cb instanceof Function && setTimeout(cb);
      };

      Android.prototype.boughtCar = function (carId, cb) {
        if (carId == undefined) {
          return;
        }
        this._super.boughtCar.apply(this, arguments);
        cb instanceof Function && setTimeout(cb);
      };

      Android.prototype.setH5Height = function (ratio) {
        try {
          this._super.setH5Height.apply(this, arguments);
          exp.gameAPIJava.setH5Height(ratio);
        } catch (e) {
          // alert(e.message);
          throw e;
        }
      };

      Android.prototype.ACTIVITIES.LOGIN = "com.melot.meshow.account.UserLogin";
      Android.prototype.ACTIVITIES.PAYMENT =
        "com.melot.fillmoney.PaymentsActivity";
      Android.prototype.ACTIVITIES.PACKAGE =
        "com.melot.meshow.fillmoney.ChargePackageGiftActivity";
      Android.prototype.ACTIVITIES.FEEDBACK =
        "com.melot.meshow.main.freshdesk.FreshdeskActivity";
      Android.prototype.ACTIVITIES.TREASUREACTIVITY =
        "com.melot.meshow.treasure.v.TreasureActivity"; //一元夺宝
      Android.prototype.ACTIVITIES.SQUADACTIVITY =
        "com.melot.meshow.im.activity.IMGroupActivity"; // 群组页面
      Android.prototype.ACTIVITIES.SPOTLIGHTACTIVITY =
        "com.melot.meshow.main.skill.SkillStatusActivity"; // Spotlight Talent认证页面
      Android.prototype.ACTIVITIES.TOPICACTIVITY =
        "com.melot.meshow.dynamic.TopicActivity"; //话题  参数'topicId', 'topicTitle'
      Android.prototype.ACTIVITIES.PUBLISHACTIVITY =
        "com.melot.meshow.main.publish.PublishActivity"; //话题发布  参数'topicId', 'topicTitle'
    })(Mobile);

  UA.ios &&
    (function (Parent) {
      var processStack = [];
      var isBusy = false;
      var returnVal = function (val) {
        var nextObj = processStack.shift();
        if (nextObj) {
          isBusy = true;
          setTimeout(function () {
            nextObj.args.push("_stack");
            nextObj.fn.apply(null, nextObj.args);
          }, 60);
        } else {
          isBusy = false;
        }

        if (val == undefined) {
          return undefined;
        } else if (Object.prototype.toString.call(val) === "[object Object]") {
          return JSON.stringify(val);
        } else {
          return val;
        }
      };

      var nextStack = function () {
        if (isBusy) {
          return;
        }
        return returnVal();
      };

      var ios = {};
      ios.customActivity = function () {
        if (arguments.length > 0) {
          this._activity = arguments[0];
        } else {
          return returnVal(this._activity);
        }
      };
      ios.userInfo = function () {
        if (arguments.length > 0) {
          this._userInfo = arguments[0];
        } else {
          return this._userInfo;
        }
      };

      ios.share = function () {
        if (arguments.length > 0) {
          this._share = JSON.parse(arguments[0]);
        } else {
          return returnVal(this._share);
        }
      };
      ios.shareBonus = function () {
        if (arguments.length > 0) {
          this._shareBonus = JSON.parse(arguments[0]);
        } else {
          return returnVal(this._shareBonus);
        }
      };

      ios.versionInfo = function () {
        if (arguments.length > 0) {
          this._userInfo = arguments[0];
        } else {
          return this._userInfo;
        }
      };

      ios.share = function () {
        if (arguments.length > 0) {
          this._share = JSON.stringify(arguments[0]);
        } else {
          return returnVal(this._share);
        }
      };
      ios.notify = function () {
        if (arguments.length > 0) {
          this._notify = JSON.parse(arguments[0]);
        } else {
          return returnVal(this._notify);
        }
      };

      ios.updateMoney = function () {
        if (arguments.length > 0) {
          this._updateMoney = arguments[0];
        } else {
          return returnVal(this._updateMoney);
        }
      };

      ios.updateGold = function () {
        if (arguments.length > 0) {
          this._updateGold = arguments[0];
        } else {
          return returnVal(this._updateGold);
        }
      };

      ios.updateDiamond = function () {
        if (arguments.length > 0) {
          this._updateDiamond = arguments[0];
        } else {
          return returnVal(this._updateDiamond);
        }
      };

      ios.startActivityPage = function () {
        if (arguments.length > 0) {
          this._json = arguments[0];
        } else {
          return returnVal(this._json);
        }
      };

      ios.boughtVip = function () {
        if (arguments.length > 0) {
          this._boughtVip = arguments[0];
        } else {
          return returnVal(this._boughtVip);
        }
      };

      ios.boughtCar = function () {
        if (arguments.length > 0) {
          this._boughtCar = arguments[0];
        } else {
          return returnVal(this._boughtCar);
        }
      };

      ios.setH5Height = function () {
        if (arguments.length > 0) {
          this._setH5Height = arguments[0];
        } else {
          return returnVal(this._setH5Height);
        }
      };

      exp.ios = ios;

      function IOS() {
        this._super = Parent.prototype;
      }

      Parent.IOS = IOS;
      var appVersion = "";

      IOS.prototype = new Parent();
      IOS.prototype.getUserInfo = function (cb) {
        this._super.getUserInfo.apply(this, arguments);
        var tryTimes = 0;

        function waitUserInfo() {
          tryTimes++;
          tryTimes > 5
            ? cb({})
            : setTimeout(function () {
                var info = ios.userInfo();

                if (info) {
                  appVersion = info.appVersion;
                  cb(info);
                } else {
                  waitUserInfo();
                }
              }, 100);
        }

        waitUserInfo();
        setTimeout(function () {
          exp.location = "getUserInfo";
        });
        return true;
      };

      IOS.prototype.getVersionCode = function (cb) {
        this._super.getVersionCode.apply(this, arguments);
        cb(appVersion);
      };
      IOS.prototype._customActivity = function (packageName, key, value) {
        this._super._customActivity.apply(this, arguments);
        var params = {};
        for (var i in key) {
          if (value[i]) {
            params[key[i]] = value[i];
          }
        }
        ios.customActivity({
          target: packageName,
          params: params,
        });
        setTimeout(function () {
          exp.location = "startCustomActivity";
        });
      };

      IOS.prototype.finish = function () {
        this._super.finish.apply(this, arguments);
        setTimeout(function () {
          exp.location = "gotoHomePage";
        });
      };

      IOS.prototype.notify = function (data) {
        this._super.notify.apply(this, arguments);
        data && ios.notify(data);
        setTimeout(function () {
          exp.location = "notify";
        });
      };
      IOS.prototype.share = function (title, content, imgUrl, shareUrl) {
        this._super.share.apply(this, arguments);
        ios.share({
          title: title,
          text: content,
          image: imgUrl,
          shareUrl: shareUrl,
        });
        setTimeout(function () {
          exp.location = "share";
        });
      };

      IOS.prototype.shareBonus = function () {
        this._super.shareBonus.apply(this, arguments);
        ios.shareBonus();
        setTimeout(function () {
          exp.location = "shareBonus";
        });
      };

      IOS.prototype.startPaymentActivity = function () {
        this._super.startPaymentActivity.apply(this, arguments);
        setTimeout(
          function () {
            exp.location = this.ACTIVITIES.PAYMENT;
          }.bind(this)
        );
      };

      IOS.prototype.gotoSquad = function () {
        this._super.gotoSquad.apply(this, arguments);
        setTimeout(
          function () {
            exp.location = this.ACTIVITIES.SQUADACTIVITY;
          }.bind(this)
        );
      };

      IOS.prototype.gotoSpotlight = function () {
        this._super.gotoSpotlight.apply(this, arguments);
        setTimeout(
          function () {
            exp.location = this.ACTIVITIES.SPOTLIGHTACTIVITY;
          }.bind(this)
        );
      };

      IOS.prototype.gotoTopic = function (topicId, topicName) {
        this._super.gotoTopic.apply(this, arguments);
        setTimeout(
          function () {
            exp.location = this.ACTIVITIES.TOPICACTIVITY;
          }.bind(this)
        );
      };

      IOS.prototype.gotoPublish = function (topicId, topicName) {
        this._super.gotoTopic.apply(this, arguments);
        setTimeout(
          function () {
            exp.location = this.ACTIVITIES.PUBLISHACTIVITY;
          }.bind(this)
        );
      };

      IOS.prototype.closePage = function () {
        this._super.closePage.apply(this, arguments);
        setTimeout(function () {
          exp.location = "closePage";
        });
      };

      IOS.prototype.startFeedbackActivity = function () {
        this._super.startFeedbackActivity.apply(this, arguments);
        setTimeout(
          function () {
            exp.location = this.ACTIVITIES.FEEDBACK;
          }.bind(this)
        );
      };

      IOS.prototype.updateMoney = function (balance, cb) {
        if (typeof balance !== "number") {
          return;
        }
        var _stack = arguments[arguments.length - 1] === "_stack";
        if (!_stack) {
          var args = [].slice.call(arguments);
          processStack.push({
            fn: this.updateMoney.bind(this),
            args: args,
          });

          return nextStack();
        }
        balance = Math.max(0, balance);
        this._super.updateMoney.apply(this, arguments);
        ios.updateMoney(balance);
        setTimeout(function () {
          exp.location = "updateMoney";
        });
        cb instanceof Function && setTimeout(cb);
      };

      IOS.prototype.updateGold = function (balance, cb) {
        if (typeof balance !== "number") {
          return;
        }
        var _stack = arguments[arguments.length - 1] === "_stack";
        if (!_stack) {
          var args = [].slice.call(arguments);
          processStack.push({
            fn: this.updateGold.bind(this),
            args: args,
          });

          return nextStack();
        }
        balance = Math.max(0, balance);
        this._super.updateGold.apply(this, arguments);
        ios.updateGold(balance);
        setTimeout(function () {
          exp.location = "updateGoldCoin";
          cb instanceof Function && setTimeout(cb);
        });
      };

      IOS.prototype.updateDiamond = function (balance, cb) {
        if (typeof balance !== "number") {
          return;
        }
        var _stack = arguments[arguments.length - 1] === "_stack";
        if (!_stack) {
          var args = [].slice.call(arguments);
          processStack.push({
            fn: this.updateDiamond.bind(this),
            args: args,
          });

          return nextStack();
        }
        balance = Math.max(0, balance);
        this._super.updateDiamond.apply(this, arguments);
        ios.updateDiamond(balance);
        setTimeout(function () {
          exp.location = "updateDiamond";
        });
        cb instanceof Function && setTimeout(cb);
      };

      IOS.prototype.startActivityPage = function (title, url) {
        this._super.startActivityPage.apply(this, arguments);
        ios.startActivityPage({
          webViewTitle: title,
          webViewUrl: url,
        });
        setTimeout(function () {
          exp.location = "openWebViewInfo";
        });
      };

      IOS.prototype.boughtVip = function (vipId, cb) {
        if (vipId == undefined) {
          return;
        }
        var _stack = arguments[arguments.length - 1] === "_stack";
        if (!_stack) {
          var args = [].slice.call(arguments);
          processStack.push({
            fn: this.boughtVip.bind(this),
            args: args,
          });

          return nextStack();
        }

        this._super.boughtVip.apply(this, arguments);
        ios.boughtVip(vipId);
        setTimeout(function () {
          exp.location = "boughtVip";
        });
        cb instanceof Function && setTimeout(cb);
      };

      IOS.prototype.boughtCar = function (carId, cb) {
        if (carId === undefined) {
          return;
        }
        var _stack = arguments[arguments.length - 1] === "_stack";
        if (!_stack) {
          var args = [].slice.call(arguments);
          processStack.push({
            fn: this.boughtVip.bind(this),
            args: args,
          });

          return nextStack();
        }

        this._super.boughtCar.apply(this, arguments);
        ios.boughtCar(carId);
        cb instanceof Function && setTimeout(cb);
      };

      IOS.prototype.setH5Height = function (ratio) {
        this._super.setH5Height.apply(this, arguments);
        ios.updateUIProportion({
          yxProportion: ratio,
        });
        setTimeout(function () {
          exp.location = "updateUIProportion";
        });
      };

      IOS.prototype.ACTIVITIES.LOGIN = "UserLogin";
      IOS.prototype.ACTIVITIES.PAYMENT = "PaymentMethods";
      IOS.prototype.ACTIVITIES.FEEDBACK = "gotoFeedback";
      IOS.prototype.ACTIVITIES.TREASUREACTIVITY = "TreasureActivity"; //一元夺宝
      IOS.prototype.ACTIVITIES.SQUADACTIVITY = "gotoIMGroupActivity"; // 群组页面
      IOS.prototype.ACTIVITIES.SPOTLIGHTACTIVITY = "gotoStarTalent"; // 群组页面
      IOS.prototype.ACTIVITIES.TOPICACTIVITY = "gotoNewsTopic"; //话题  参数'topicId', 'topicTitle'
      IOS.prototype.ACTIVITIES.PUBLISHACTIVITY = "gotoReleaseNewsTopic"; //话题发布  参数'topicId', 'topicTitle'
    })(Mobile);

  var phone = UA.android
    ? new Mobile.Android()
    : UA.ios
    ? new Mobile.IOS()
    : undefined;

  exp.phone = phone;

  var BACK_CONRIRM_STRING = "kk://back.bubble.true";
  var BACK_CANCEL_STRING = "kk://back.bubble.false";

  exp.onResume = function () {
    setTimeout(function () {
      var cbList = phone._resumeCallback || [];
      for (var i = 0, len = cbList.length; i < len; i++) {
        cbList[i] instanceof Function && cbList[i]();
      }
    }, 100);
  };
  exp.onBackPressed = function () {
    var cbList = phone._backList || [];
    var needStop = cbList.some(function (cb) {
      if (!(cb instanceof Function)) {
        return false;
      }
      var res = cb();
      return res === false;
    });

    window.prompt(needStop ? BACK_CANCEL_STRING : BACK_CONRIRM_STRING);
  };
})(window);

/*******************************************************************************
 * User information object
 ******************************************************************************/
(function (exp) {
  function User(cb, argP) {
    cb && this.ready(cb, argP);
    this._init();
  }

  User.prototype._init = function () {
    this._requestInfo(
      function (info) {
        this._info = info;
        var cb = undefined;
        this._cbStack = this._cbStack || [];
        while ((cb = this._cbStack.shift())) {
          cb(info);
        }
      }.bind(this)
    );
  };

  User.prototype._requestInfo = function (cb) {
    var fn = function (info) {
      info = info || {};
      saveInfoToServer(
        info,
        function () {
          cb(info);
        }.bind(this)
      );
    }.bind(this);

    var profileInfo = getInfoFromLocal();
    if (profileInfo) {
      setTimeout(function () {
        fn(profileInfo);
      });
    } else {
      exp.phone.getUserInfo(fn);
    }
  };

  User.prototype.ready = function (cb, argP) {
    if (!(cb instanceof Function)) {
      return this;
    }
    cb = cb.bind(argP === undefined ? this : argP);

    if (this._info) {
      setTimeout(cb, 25);
    } else {
      this._cbStack = this._cbStack || [];
      this._cbStack.push(cb);
    }
    return this;
  };

  User.prototype.isLogin = function () {
    return !!(this._info && this._info.userId && this._info.token);
  };

  User.prototype.getToken = function () {
    return this._info && this._info.token ? this._info.token : undefined;
  };

  User.prototype.getId = function () {
    return this._info && this._info.userId ? this._info.userId : undefined;
  };

  User.prototype.expire = function (cb) {
    cb = cb || new Function();
    clearLocalInfo();
    this._requestInfo(function () {
      cb();
    });
  };

  exp.User = User;

  var saveInfoToServer = function (info, cb) {
    window.sessionStorage.profileInfo = JSON.stringify(info);

    cb();
  };

  var getInfoFromLocal = function () {
    var profileInfo = window.sessionStorage.profileInfo;
    return profileInfo && JSON.parse(profileInfo);
  };

  var clearLocalInfo = function () {
    delete window.sessionStorage.profileInfo;
  };
})(window);
