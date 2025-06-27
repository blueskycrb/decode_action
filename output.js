//Fri Jun 27 2025 01:27:15 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var encode_version = "jsjiami.com.v5";
function getUrlParam(_0x253574) {
  var _0x5d313a = window.location.search;
  var _0x173984 = new RegExp("(^|&)" + _0x253574 + "=([^&]*)(&|$)", "i");
  var _0x23cb0e = _0x5d313a.substr(1).match(_0x173984);
  if (_0x23cb0e != null) {
    return decodeURIComponent(_0x23cb0e[2]);
  }
  return null;
}
function getSuperUrlParam(_0x3b7646) {
  var _0x36b64a = window.location.hash;
  var _0x516e05 = new RegExp("(^|&)" + _0x3b7646 + "=([^&]*)(&|$)", "i");
  var _0x55162f = _0x36b64a.substr(1).match(_0x516e05);
  if (_0x55162f != null) {
    return decodeURIComponent(_0x55162f[2]);
  }
  return null;
}
function isWeiXin() {
  var _0xa3edb2 = window.navigator.userAgent.toLowerCase();
  return _0xa3edb2.match(/MicroMessenger/i) == "micromessenger";
}
function showNewUserDialog() {
  var _0x5230b1 = document.getElementById("newUserDialog");
  var _0x1e2648 = document.getElementById("dialogConfirmBtn");
  var _0x3d0635 = document.querySelector(".dialog-content");
  if (_0x5230b1) {
    _0x5230b1.style.display = "flex";
    var _0xc8d423 = "2. 阅读6秒后点击底部\"返回键\"";
    var _0x8225c6 = "<p>1. 进入文章页后，滑动到文章底部</p><p>" + _0xc8d423 + "</p>" + "<p style=\"color: #999;font-size: 12px;\">" + "(全面屏: \"左滑到右边\"返回上一页)" + "</p>" + "<p>3. 每轮可持续阅读25~30篇文章</p>" + "<p>4. 请不要点击左上角的关闭进行阅读</p>";
    _0x3d0635.innerHTML = _0x8225c6;
    var _0x2144d8 = 5;
    var _0x2af57f = setInterval(function () {
      {
        _0x1e2648.textContent = "我知道了(" + _0x2144d8 + "s)";
        _0x2144d8--;
        if (_0x2144d8 < 0) {
          clearInterval(_0x2af57f);
          _0x5230b1.style.display = "none";
          document.getElementById("app").style.display = "block";
          checkReadingTime();
        }
      }
    }, 1000);
    _0x1e2648.addEventListener("click", function () {
      {
        clearInterval(_0x2af57f);
        _0x5230b1.style.display = "none";
        document.getElementById("app").style.display = "block";
        checkReadingTime();
      }
    });
  }
}
function checkNewUserParam() {
  var _0x136cf1 = getUrlParam("p");
  if (_0x136cf1 === "nu") {
    showNewUserDialog();
    return true;
  }
  var _0x54ff8c = document.getElementById("app");
  if (_0x54ff8c) {
    {
      _0x54ff8c.style.display = "block";
    }
  }
  return false;
}
var audioContext = null;
var oscillator = null;
function initWebAudio() {
  try {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
  } catch (_0x13dbef) {
    {
      console.warn("Web Audio API is not supported in this browser");
    }
  }
}
function playSuccessSound() {
  if (!audioContext) {
    {
      initWebAudio();
    }
  }
  if (audioContext) {
    {
      try {
        {
          if (oscillator) {
            {
              oscillator.stop();
              oscillator.disconnect();
            }
          }
          oscillator = audioContext.createOscillator();
          var _0x3f8686 = audioContext.createGain();
          oscillator.type = "sine";
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
          _0x3f8686.gain.setValueAtTime(0.1, audioContext.currentTime);
          oscillator.connect(_0x3f8686);
          _0x3f8686.connect(audioContext.destination);
          oscillator.start();
        }
      } catch (_0xcdfee9) {
        {
          console.error("Error playing success sound:", _0xcdfee9);
        }
      }
    }
  }
}
function playFailSound() {
  if (!audioContext) {
    initWebAudio();
  }
  if (audioContext) {
    try {
      var _0x3e3bb1 = audioContext.createOscillator();
      var _0x23183d = audioContext.createGain();
      _0x3e3bb1.type = "square";
      _0x3e3bb1.frequency.setValueAtTime(220, audioContext.currentTime);
      _0x23183d.gain.setValueAtTime(0.1, audioContext.currentTime);
      _0x3e3bb1.connect(_0x23183d);
      _0x23183d.connect(audioContext.destination);
      _0x3e3bb1.start();
      _0x3e3bb1.stop(audioContext.currentTime + 0.5);
    } catch (_0x43c077) {
      console.error("Error playing fail sound:", _0x43c077);
    }
  }
}
function showResult(_0x59fb81) {
  var _0x584957 = _0x59fb81.title;
  var _0x796595 = _0x59fb81.message;
  var _0x190e8b = _0x59fb81.subMessage || "";
  var _0x3224c5 = _0x59fb81.type || "info";
  var _0x1de1a0 = _0x59fb81.duration;
  var _0x191983 = _0x59fb81.ex_data || null;
  var _0x33511e = _0x59fb81.subMeesageAnimation || false;
  var _0x3cf71e = _0x3224c5 === "success" ? "#67C23A" : _0x3224c5 === "error" ? "#F56C6C" : "#909399";
  var _0x983b6d = document.getElementById("timestamp");
  while (_0x983b6d.firstChild) {
    {
      _0x983b6d.removeChild(_0x983b6d.firstChild);
    }
  }
  var _0x2a87bc = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  _0x2a87bc.setAttribute("style", "padding: 20px 16px; background-color: #fff; text-align: center; width: 100%;");
  var _0x4f0190 = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  _0x4f0190.setAttribute("style", "margin-bottom: " + (_0x190e8b || _0x1de1a0 !== undefined ? "20px" : "0") + ";");
  var _0x36c8fe = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  _0x36c8fe.setAttribute("style", "font-size: 18px; color: " + _0x3cf71e + "; font-weight: 500;");
  _0x36c8fe.appendChild(document.createTextNode(_0x796595));
  _0x4f0190.appendChild(_0x36c8fe);
  if (_0x1de1a0 !== null && _0x1de1a0 !== undefined) {
    var _0x1d185e = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    _0x1d185e.setAttribute("style", "margin-top: 8px; font-size: 14px; color: #909399;");
    var _0x51a6ae = document.createTextNode("阅读时长: ");
    var _0x3d9343 = document.createElementNS("http://www.w3.org/1999/xhtml", "span");
    _0x3d9343.setAttribute("style", "color:" + _0x3cf71e);
    _0x3d9343.appendChild(document.createTextNode(Math.round(_0x1de1a0) + " 秒"));
    _0x1d185e.appendChild(_0x51a6ae);
    _0x1d185e.appendChild(_0x3d9343);
    _0x4f0190.appendChild(_0x1d185e);
  }
  _0x2a87bc.appendChild(_0x4f0190);
  if (_0x190e8b) {
    {
      var _0x88c05f = _0x3224c5 === "error" ? "#F56C6C" : "#606266";
      var _0x2ee906 = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
      _0x2ee906.setAttribute("style", "margin-top: 8px; font-size: 15px; color: " + _0x88c05f + ";");
      _0x2ee906.appendChild(document.createTextNode(_0x190e8b));
      if (_0x33511e) {
        var _0x4eb0a9 = document.createElementNS("http://www.w3.org/1999/xhtml", "span");
        _0x4eb0a9.setAttribute("class", "loading-dots");
        _0x2ee906.appendChild(_0x4eb0a9);
      }
      _0x2a87bc.appendChild(_0x2ee906);
    }
  }
  if (_0x191983) {
    {
      if (_0x191983.info) {
        {
          var _0x517f23 = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
          _0x517f23.setAttribute("style", "margin: " + (_0x190e8b || _0x1de1a0 !== undefined ? "16px" : "0") + " 0;" + "padding: 12px 16px;" + "font-size: 13px;" + "color: #409EFF;" + "line-height: 1.6;" + "letter-spacing: 0.3px;" + "text-align: center;" + "display: flex;" + "align-items: center;" + "justify-content: center;");
          _0x517f23.appendChild(document.createTextNode(_0x191983.info));
          _0x2a87bc.appendChild(_0x517f23);
        }
      }
      if (_0x191983.url) {
        {
          var _0x5f164d = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
          _0x5f164d.setAttribute("style", "margin-top: " + (_0x191983.info || _0x190e8b || _0x1de1a0 !== undefined ? "16px" : "0") + ";" + "word-break: break-all;");
          var _0x140421 = document.createElementNS("http://www.w3.org/1999/xhtml", "input");
          _0x140421.setAttribute("type", "text");
          _0x140421.setAttribute("readonly", "readonly");
          _0x140421.setAttribute("value", _0x191983.url);
          _0x140421.setAttribute("style", "width: 100%;background: #F5F7FA;padding: 12px;border: 1px solid #DCDFE6;font-size: 14px;color: #606266;text-align: left;margin-top: 16px;outline: none;");
          _0x140421.addEventListener("click", function () {
            this.select();
          });
          _0x5f164d.appendChild(_0x140421);
          if (_0x191983.url_title) {
            var _0x54aefa = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
            _0x54aefa.setAttribute("style", "font-size: 14px; color: #909399; margin: 12px 0 16px; line-height: 1.5;");
            _0x54aefa.appendChild(document.createTextNode(_0x191983.url_title));
            _0x5f164d.appendChild(_0x54aefa);
          }
          var _0xfa9c3b = document.createElementNS("http://www.w3.org/1999/xhtml", "button");
          _0xfa9c3b.setAttribute("style", "background: #409EFF;color: #fff;border: none;padding: 8px 16px;font-size: 14px;cursor: pointer;outline: none;width: 100%;");
          _0xfa9c3b.appendChild(document.createTextNode("复制链接"));
          _0xfa9c3b.addEventListener("click", function () {
            {
              copyToClipboard(_0x191983.url);
            }
          });
          _0x5f164d.appendChild(_0xfa9c3b);
          _0x2a87bc.appendChild(_0x5f164d);
        }
      }
    }
  }
  _0x983b6d.appendChild(_0x2a87bc);
}
function copyToClipboard(_0x4d537f) {
  var _0x4b9774 = false;
  var _0x11a367 = document.querySelector("input[type=\"text\"][readonly]");
  if (!_0x11a367) {
    return;
  }
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(_0x4d537f).then(function () {
      showToast("复制成功");
      _0x4b9774 = true;
    }).catch(function (_0x53607b) {
      console.error("Clipboard API 复制失败:", _0x53607b);
      _0x1de01d();
    });
    return;
  }
  _0x1de01d();
  function _0x1de01d() {
    try {
      _0x11a367.select();
      _0x11a367.setSelectionRange(0, 99999);
      _0x4b9774 = document.execCommand("copy");
      if (_0x4b9774) {
        showToast("复制成功");
      } else {
        {
          showToast("复制失败，请手动复制");
        }
      }
    } catch (_0x585bf9) {
      {
        console.error("execCommand 复制失败:", _0x585bf9);
        showToast("复制失败，请手动复制");
      }
    }
  }
}
function showToast(_0x2e290a) {
  var _0x3a25a0 = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
  _0x3a25a0.setAttribute("style", "position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);background: rgba(0, 0, 0, 0.7);color: #fff;padding: 10px 20px;border-radius: 4px;font-size: 14px;z-index: 100000;");
  _0x3a25a0.appendChild(document.createTextNode(_0x2e290a));
  document.body.appendChild(_0x3a25a0);
  setTimeout(function () {
    {
      document.body.removeChild(_0x3a25a0);
    }
  }, 2000);
}
function httpGet(_0x475549, _0x576f51) {
  var _0x47b42f = new XMLHttpRequest();
  _0x47b42f.open("GET", _0x475549, true);
  _0x47b42f.timeout = 20000;
  _0x47b42f.ontimeout = function () {
    {
      _0x576f51(new Error("请求超时"), null);
    }
  };
  _0x47b42f.onreadystatechange = function () {
    {
      if (_0x47b42f.readyState === 4) {
        if (_0x47b42f.status === 200) {
          try {
            var _0x12c8d8 = JSON.parse(_0x47b42f.responseText);
            _0x576f51(null, _0x12c8d8);
          } catch (_0x3bc164) {
            _0x576f51(_0x3bc164, null);
          }
        } else {
          {
            _0x576f51(new Error("请求失败: " + _0x47b42f.status), null);
          }
        }
      }
    }
  };
  _0x47b42f.send();
}
function addHideDiv(_0x4b2be7) {
  var _0x27b32e = _0x4b2be7 || 1;
  for (var _0x21ac41 = 0; _0x21ac41 < _0x27b32e; _0x21ac41++) {
    var _0x49fe72 = document.createElement("div");
    var _0xc03579 = ["hidden-element-" + Math.random().toString(36).substring(2, 8), "invisible-container-" + Math.random().toString(36).substring(2, 7), "masked-content-" + Math.random().toString(36).substring(2, 9)];
    var _0x3ab27c = _0xc03579[Math.floor(Math.random() * _0xc03579.length)];
    var _0x4c430c = ["<!-- " + Math.random().toString(36).substring(2, 15) + " -->", "<!-- placeholder-" + Date.now() + Math.floor(Math.random() * 1000) + " -->", "<!-- system-data-" + Math.floor(Math.random() * 10000) + " -->"];
    var _0x1ed24b = _0x4c430c[Math.floor(Math.random() * _0x4c430c.length)];
    _0x49fe72.setAttribute("style", "height:1px;width:1px;");
    _0x49fe72.setAttribute("data-index", _0x21ac41);
    _0x49fe72.className = _0x3ab27c;
    _0x49fe72.innerHTML = _0x1ed24b;
    document.body.appendChild(_0x49fe72);
  }
}
function handleNavigation(_0x2d9552, _0x18efcd, _0x12215e) {
  location.href = _0x2d9552 + "?/";
}
function setSessionStorage(_0xe0904d, _0x10492e, _0x620fce) {
  setCookie("readStartTime", _0xe0904d);
  setCookie("readUrl", _0x10492e);
  setCookie("aid", _0x620fce);
  setDomCache("readStartTime", _0xe0904d);
  setDomCache("readUrl", _0x10492e);
  setDomCache("aid", _0x620fce);
}
function setCookie(_0x57699f, _0x190267) {
  var _0x101229 = "";
  var _0x204510 = 2;
  {
    var _0x502915 = new Date();
    _0x502915.setTime(_0x502915.getTime() + _0x204510 * 24 * 60 * 60 * 1000);
    _0x101229 = "; expires=" + _0x502915.toUTCString();
  }
  document.cookie = _0x57699f + "=" + _0x190267 + _0x101229 + "; path=/";
}
function clearCookie(_0x1afc84) {
  document.cookie = _0x1afc84 + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function getCookie(_0x5883b7) {
  var _0x50c6bb = _0x5883b7 + "=";
  var _0xd14b9d = decodeURIComponent(document.cookie);
  var _0x4b4420 = _0xd14b9d.split(";");
  for (var _0x572519 = 0; _0x572519 < _0x4b4420.length; _0x572519++) {
    var _0x104c2b = _0x4b4420[_0x572519];
    while (_0x104c2b.charAt(0) == " ") {
      _0x104c2b = _0x104c2b.substring(1);
    }
    if (_0x104c2b.indexOf(_0x50c6bb) == 0) {
      return _0x104c2b.substring(_0x50c6bb.length, _0x104c2b.length);
    }
  }
  return "";
}
function clearSessionStorage() {
  clearCookie("readStartTime");
  clearCookie("readUrl");
  clearCookie("aid");
}
function setDomCache(_0x4053f4, _0x54347d) {
  try {
    {
      var _0x5c8010 = document.getElementById(_0x4053f4);
      if (_0x5c8010) {
        _0x5c8010.textContent = _0x54347d;
      } else {
        _0x5c8010 = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
        _0x5c8010.setAttribute("id", _0x4053f4);
        _0x5c8010.setAttribute("style", "display:none;");
        _0x5c8010.appendChild(document.createTextNode(_0x54347d));
        document.body.appendChild(_0x5c8010);
      }
    }
  } catch (_0x11459f) {
    {
      console.error("Error setting DOM cache:", _0x11459f);
    }
  }
}
function getDomCache(_0x12014f) {
  var _0x435770 = document.getElementById(_0x12014f);
  if (!_0x435770) {
    return null;
  }
  return _0x435770.textContent;
}
function getSessionStorage() {
  var _0x26337f = getDomCache("readStartTime") || getSuperUrlParam("st") || getCookie("readStartTime");
  var _0x44bbc3 = getDomCache("readUrl") || getSuperUrlParam("u") || getCookie("readUrl");
  var _0x1483c1 = getDomCache("aid") || getSuperUrlParam("aid") || getCookie("aid");
  return {
    readStartTime: _0x26337f,
    readUrl: _0x44bbc3,
    aid: _0x1483c1
  };
}
function replay() {
  var _0x348d8b = getSessionStorage();
  var _0x2499bf = Date.now();
  if (_0x348d8b.readUrl && _0x348d8b.readUrl.indexOf("?scene=0#wechat_redirect") !== -1) {
    _0x348d8b.readUrl = _0x348d8b.readUrl.replace(/\?scene=0#wechat_redirect/, "");
  }
  handleNavigation(_0x348d8b.readUrl + "?scene=0#wechat_redirect", _0x2499bf, _0x348d8b.aid);
}
function checkReadingTime() {
  var _0x45a3e7 = getSessionStorage();
  var _0x246fd0 = _0x45a3e7.readStartTime;
  var _0x432c4c = _0x45a3e7.readUrl;
  var _0x75360 = _0x45a3e7.aid;
  if (_0x246fd0 && _0x432c4c && _0x75360) {
    var _0x1ca346 = (Date.now() - parseInt(_0x246fd0)) / 1000;
    console.log("duration", _0x1ca346);
    var _0x8c2afa = _0x1ca346 >= 6;
    if (_0x8c2afa) {
      playSuccessSound();
    } else {
      playFailSound();
    }
    showResult({
      title: _0x8c2afa ? "阅读成功" : "阅读失败",
      message: _0x8c2afa ? "阅读成功" : "阅读失败（未满6秒）",
      subMessage: _0x8c2afa ? "正在加载精彩文章" : "正在重试..",
      subMeesageAnimation: true,
      type: _0x8c2afa ? "success" : "error",
      duration: _0x1ca346
    });
    if (_0x8c2afa) {
      if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
      }
      fetchData(false, _0x75360, _0x246fd0);
    } else {
      replay();
    }
  } else {
    {
      fetchData(true);
    }
  }
}
function fetchData(_0x2973c3, _0x40b465, _0x55bdbb) {
  var _0xc1cba4 = "oapi.liyishabiubiu.cn";
  var _0x5169b1 = getUrlParam("val");
  var _0x269b32 = null;
  if (_0x40b465) {
    _0x269b32 = "//" + _0xc1cba4 + "/api/client/read/has_next?val=" + _0x5169b1 + "&aid=" + _0x40b465 + "&st=" + _0x55bdbb;
  } else {
    {
      _0x269b32 = "//" + _0xc1cba4 + "/api/client/read/has_next?val=" + _0x5169b1;
    }
  }
  httpGet(_0x269b32, function (_0x5b7b85, _0x3eed6c) {
    if (_0x5b7b85) {
      {
        console.error("获取数据失败：", _0x5b7b85);
        clearSessionStorage();
        showResult({
          title: "获取失败",
          message: "获取失败",
          subMessage: "网络请求失败,请重试",
          type: "error"
        });
        return;
      }
    }
    console.log("服务器返回：", _0x3eed6c);
    if (_0x3eed6c.code < 0) {
      {
        console.error("服务器返回错误：", _0x3eed6c);
        clearSessionStorage();
        showResult({
          title: "获取失败",
          message: _0x3eed6c.message || "获取失败",
          ex_data: _0x3eed6c.data ? _0x3eed6c.data : null,
          type: "error"
        });
        return;
      }
    }
    try {
      {
        var _0x55bdbb = Date.now();
        var _0x152055 = _0x3eed6c.data.url;
        var _0x40b465 = _0x3eed6c.data.aid;
        if (!_0x152055 || !_0x40b465) {
          clearSessionStorage();
          showResult({
            title: "获取失败",
            message: "获取失败",
            subMessage: "返回数据格式错误",
            type: "error"
          });
          return;
        }
        setSessionStorage(_0x55bdbb, _0x152055, _0x40b465);
        if (_0x3eed6c.data.remain !== undefined && _0x3eed6c.data.remain > 0) {
          {
            showResult({
              message: "获取成功",
              subMessage: "正在加载精彩文章",
              ex_data: {
                info: "已增加积分,可继续阅读" + _0x3eed6c.data.remain + "个文章"
              },
              subMeesageAnimation: true,
              type: "success"
            });
          }
        }
        addHideDiv(10);
        setTimeout(function () {
          handleNavigation(_0x152055 + "?scene=0#wechat_redirect", _0x55bdbb, _0x40b465);
        }, 1500);
      }
    } catch (_0x2615ec) {
      console.error("处理数据失败：", _0x2615ec);
      clearSessionStorage();
      showResult({
        title: "获取失败",
        message: "获取失败",
        subMessage: "数据处理失败",
        type: "error"
      });
    }
  });
}
function initWeixinEnv() {
  if (typeof WeixinJSBridge !== "undefined") {
    WeixinJSBridge.call("hideOptionMenu");
    WeixinJSBridge.call("hideToolbar");
  } else {
    document.addEventListener("WeixinJSBridgeReady", function () {
      {
        WeixinJSBridge.call("hideOptionMenu");
        WeixinJSBridge.call("hideToolbar");
      }
    });
  }
}
function initEventListeners() {
  window.addEventListener("pageshow", function (_0x55a32e) {
    if (checkNewUserParam()) {
      {
        return;
      }
    }
    checkReadingTime();
  });
  document.body.addEventListener("touchmove", function (_0x19b143) {
    {
      _0x19b143.preventDefault();
    }
  }, {
    passive: false
  });
}
document.addEventListener("DOMContentLoaded", function () {
  initWebAudio();
  if (isWeiXin()) {
    initWeixinEnv();
  }
  initEventListeners();
});
(function (_0x4cd841, _0x2e611e, _0xa88026) {
  _0xa88026 = "al";
  try {
    {
      _0xa88026 += "ert";
      _0x2e611e = encode_version;
      if (!(typeof _0x2e611e !== "undefined" && _0x2e611e === "jsjiami.com.v5")) {
        _0x4cd841[_0xa88026]("删除版本号，js会定期弹窗，还请支持我们的工作");
      }
    }
  } catch (_0x595c61) {
    _0x4cd841[_0xa88026]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";