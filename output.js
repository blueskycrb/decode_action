//Thu May 22 2025 01:07:29 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("杰士邦安心福利社");
const ckName = "jsb_data";
$.appid = "";
const Notify = 1;
const notify = $.isNode() ? require("./sendNotify") : "";
let envSplitor = ["@"];
var userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "";
let userList = [];
let userIdx = 0;
let userCount = 0;
$.is_debug = ($.isNode() ? process.env.IS_DEDUG : $.getdata("is_debug")) || "false";
$.notifyList = [];
$.notifyMsg = [];
$.codeServer = ($.isNode() ? process.env.codeServer_address : $.getdata("@codeServer.address")) || "";
$.codeOpen = ($.isNode() ? process.env.codeServer_open : $.getdata("@codeServer.open")) || "false";
$.wxCode = $.codeOpen != "false" && $.codeServer && $.appid;
async function main() {
  try {
    {
      await getNotice();
      $.log("\n================== 任务 ==================\n");
      for (let _0x495a36 of userList) {
        {
          console.log("🔷账号" + _0x495a36.index + " >> Start work");
          console.log("随机延迟" + _0x495a36.getRandomTime() + "ms");
          let {
            points: _0x1ef8c0
          } = (await _0x495a36.getUserInfo()) ?? {};
          if (_0x495a36.ckStatus) {
            {
              let _0x3f5eb8 = await _0x495a36.signin();
              let _0x4e551f = await _0x495a36.share();
              let _0x493d20 = await _0x495a36.getUserInfo();
              $.title = "本次运行共获得" + (_0x493d20.points - _0x1ef8c0) + "安心币";
              DoubleLog("用户名称:" + _0x493d20.nick_name + "\n签到任务:" + _0x3f5eb8 + "\n分享任务:" + _0x4e551f + "\n当前积分:" + _0x493d20.points);
            }
          } else {
            $.notifyMsg.push("❌账号" + (_0x495a36.userName || _0x495a36.index) + " >> Check ck error!");
          }
          $.notifyList.push({
            id: _0x495a36.index,
            avatar: _0x495a36.avatar,
            message: $.notifyMsg
          });
          $.notifyMsg = [];
        }
      }
    }
  } catch (_0x20e0da) {
    {
      $.log("⛔️ main run error => " + _0x20e0da);
    }
  }
}
class UserInfo {
  constructor(_0x27f5f2) {
    this.index = ++userIdx;
    this.token = _0x27f5f2.token || _0x27f5f2;
    this.userId = _0x27f5f2.userId;
    this.userName = _0x27f5f2.userName;
    this.avatar = _0x27f5f2.avatar;
    this.ckStatus = true;
    this.baseUrl = "";
    this.host = "https://vip.ixiliu.cn";
    this.headers = {
      "Accept-Encoding": "gzip,compress,br,deflate",
      "Access-Token": this.token,
      platform: "MP-WEIXIN",
      Host: "vip.ixiliu.cn",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f37) NetType/WIFI Language/zh_CN",
      Referer: "https://servicewechat.com/wx9a2dc52c95994011/80/page-frame.html",
      sid: "10009"
    };
    this.getRandomTime = () => randomInt(1000, 3000);
    this.fetch = async _0x468283 => {
      {
        try {
          {
            if (typeof _0x468283 === "string") {
              _0x468283 = {
                url: _0x468283
              };
            }
            if (_0x468283?.["url"]?.["startsWith"]("/")) {
              _0x468283.url = this.host + _0x468283.url;
            }
            const _0x16255d = {
              ..._0x468283,
              headers: _0x468283.headers || this.headers,
              url: _0x468283.url || this.baseUrl
            };
            const _0x2b1b06 = await Request(_0x16255d);
            debug(_0x2b1b06, _0x468283?.["url"]?.["replace"](/\/+$/, "")["substring"](_0x468283?.["url"]?.["lastIndexOf"]("/") + 1));
            return _0x2b1b06;
          }
        } catch (_0x144199) {
          {
            this.ckStatus = false;
            $.log("⛔️ 请求发起失败！" + _0x144199);
          }
        }
      }
    };
  }
  async getUserInfo() {
    try {
      {
        let _0x2c2560 = await this.fetch("/mp/user/info");
        if (_0x2c2560?.["status"] != 200) {
          throw new Error(_0x2c2560?.["message"]);
        }
        return _0x2c2560?.["data"]?.["userInfo"];
      }
    } catch (_0x597a92) {
      {
        this.ckStatus = false;
        $.log("⛔️ 获取用户信息失败！" + _0x597a92);
      }
    }
  }
  async signin() {
    try {
      {
        let _0x96b75c = await this.fetch("/mp/sign/applyV2");
        return _0x96b75c?.["message"];
      }
    } catch (_0x337597) {
      {
        $.log("⛔️ 查询任务列表失败！" + _0x337597);
      }
    }
  }
  async share() {
    try {
      {
        const _0x14d54e = {
          project_id: "pages/guess/index?project_id=333480658633344"
        };
        let _0x4417a8 = {
          url: "/mp/guess.home/share",
          params: _0x14d54e
        };
        let _0x28614e = await this.fetch(_0x4417a8);
        return _0x28614e?.["data"]?.["message"];
      }
    } catch (_0x54c64d) {
      {
        $.log("⛔️ 查询任务列表失败！" + _0x54c64d);
      }
    }
  }
}
async function getCookie() {
  if ($request && $request.method === "OPTIONS") {
    return;
  }
  const _0x1d2a4f = ObjectKeys2LowerCase($request.headers);
  const _0xfe49f1 = $.toObj($response.body);
  let _0x276ed8 = _0x1d2a4f["access-token"];
  if (!(_0xfe49f1?.["data"]?.["userInfo"] && _0x276ed8)) {
    {
      $.msg($.name, "❌获取token失败!", "");
      return;
    }
  }
  const {
    user_id: _0x42c0de,
    nick_name: _0x2dad7e
  } = _0xfe49f1?.["data"]?.["userInfo"];
  const _0x43819e = {
    userId: _0x42c0de,
    avatar: "",
    token: _0x276ed8,
    userName: _0x2dad7e
  };
  userCookie = userCookie ? JSON.parse(userCookie) : [];
  const _0x56abb7 = userCookie.findIndex(_0x19fb5d => _0x19fb5d.userId == _0x43819e.userId);
  userCookie[_0x56abb7] ? userCookie[_0x56abb7] = _0x43819e : userCookie.push(_0x43819e);
  $.setjson(userCookie, ckName);
  $.msg($.name, "🎉" + _0x43819e.userName + "更新token成功!", "");
}
async function loadModule() {
  try {
    {
      $.SakuraUtils = await loadSakuraUtils();
      return $.SakuraUtils ? true : false;
    }
  } catch (_0x2c667f) {
    {
      throw new Error("❌loadModule run error => " + _0x2c667f);
    }
  }
}
async function getWxToken(_0x10f30f) {
  try {
    {
      const _0x5aa6d7 = {
        url: "https://ulp.michelin.com.cn/bff/wechat/login/" + _0x10f30f,
        dataType: "json",
        headers: {}
      };
      _0x5aa6d7.headers.Host = "ulp.michelin.com.cn";
      _0x5aa6d7.headers["User-Agent"] = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f37) NetType/WIFI Language/zh_CN";
      _0x5aa6d7.headers.Referer = "https://servicewechat.com/wx14413dafd16b9540/130/page-frame.html";
      const _0x25430d = _0x5aa6d7;
      let _0x67e197 = await Request(_0x25430d);
      let _0x40c134 = "Bearer " + _0x67e197?.["data"]?.["token"]?.["access_token"];
      return _0x40c134;
    }
  } catch (_0x152787) {
    {
      $.log("❌getWxToken run error => " + _0x152787);
    }
  }
}
async function checkCodeServer() {
  try {
    {
      $.codeFuc = ($.isNode() ? process.env.codeServer_fun : $.getdata("@codeServer.fun")) || "";
      let _0x10acc3 = $.codeFuc ? (eval($.codeFuc), await WxCode($.appid)) : (await Request({
        url: $.codeServer + "/?wxappid=" + $.appid
      }))?.["split"]("|") || [];
      _0x10acc3 = _0x10acc3.filter(_0x218865 => _0x218865.toString().length === 32);
      debug(_0x10acc3);
      !_0x10acc3.length ? $.log("❌获取code授权失败！请检查服务器运行是否正常 => 尝试读取数据持久化 ") : $.log("✅获取code授权成功！当前code数量为" + _0x10acc3.length);
      let _0x20c8c5 = await Promise.all(_0x10acc3.map(async _0x4e68d0 => {
        {
          const _0x5c6ab6 = await getWxToken(_0x4e68d0);
          const _0x2ec778 = {
            token: _0x5c6ab6
          };
          return _0x2ec778;
        }
      }));
      _0x20c8c5 = _0x20c8c5.filter(_0x2e0c58 => Object.keys(_0x2e0c58).length !== 0);
      return _0x20c8c5;
    }
  } catch (_0x44e1f6) {
    $.log("❌checkCodeServer run error => " + _0x44e1f6);
  }
}
async function checkEnv() {
  try {
    {
      let _0x1bf3e1 = [];
      if ($.wxCode) {
        _0x1bf3e1 = (await checkCodeServer()) || [];
      } else {
        if (!userCookie || !userCookie.length) {
          {
            console.log("未找到CK");
            return;
          }
        }
      }
      if (!_0x1bf3e1.length) {
        {
          const _0xbaddb = envSplitor.find(_0x2c4d4c => userCookie.includes(_0x2c4d4c)) || envSplitor[0];
          userCookie = $.toObj(userCookie) || userCookie.split(_0xbaddb);
          _0x1bf3e1 = userCookie;
        }
      }
      userList.push(..._0x1bf3e1.map(_0x11159b => new UserInfo(_0x11159b)).filter(Boolean));
      userCount = userList.length;
      console.log("共找到" + userCount + "个账号");
      return true;
    }
  } catch (_0x53efdd) {
    {
      throw new Error("❌checkEnv run error => " + _0x53efdd);
    }
  }
}
async function Request(_0x2a5ded) {
  if (typeof _0x2a5ded === "string") {
    _0x2a5ded = {
      url: _0x2a5ded
    };
  }
  try {
    {
      if (!_0x2a5ded?.["url"]) {
        throw new Error("[发送请求] 缺少 url 参数");
      }
      let {
        url: _0x54db3b,
        type: _0x17417d,
        headers = {},
        body: _0x3678fd,
        params: _0x339704,
        dataType = "form",
        deviceType = "mobile",
        resultType = "data"
      } = _0x2a5ded;
      const _0x1de4b6 = _0x17417d ? _0x17417d?.["toLowerCase"]() : "body" in _0x2a5ded ? "post" : "get";
      const _0x3d9721 = _0x54db3b.concat(_0x1de4b6 === "post" ? "?" + $.SakuraUtils.JsonToUrl(_0x339704) : "");
      const _0x2b8738 = _0x2a5ded.timeout ? $.isSurge() ? _0x2a5ded.timeout / 1000 : _0x2a5ded.timeout : 10000;
      headers["User-Agent"] ||= headers["User-Agent"] = deviceType === "pc" ? "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299" : "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1";
      if (dataType === "json") {
        headers["Content-Type"] = "application/json;charset=UTF-8";
      }
      const _0x191ea5 = _0x1de4b6 === "post" && _0x3678fd ? _0x2a5ded.dataType === "form" && typeof _0x3678fd === "object" ? $.SakuraUtils.JsonToUrl(_0x3678fd) : _0x3678fd : "";
      const _0x1ffc33 = {
        body: _0x191ea5
      };
      const _0x48a06e = {
        ..._0x2a5ded,
        ...(_0x2a5ded?.["opts"] ? _0x2a5ded.opts : {}),
        url: _0x3d9721,
        headers: headers,
        ...(_0x1de4b6 === "post" && _0x1ffc33),
        ...(_0x1de4b6 === "get" && _0x339704 && {
          params: _0x339704
        }),
        timeout: _0x2b8738
      };
      const _0x17f49d = $.http[_0x1de4b6.toLowerCase()](_0x48a06e).then(_0xc51948 => resultType == "data" ? $.toObj(_0xc51948.body) || _0xc51948.body : $.toObj(_0xc51948) || _0xc51948).catch(_0x3107eb => $.log("❌请求发起失败！原因为：" + _0x3107eb));
      return Promise.race([new Promise((_0x45c912, _0x2210a0) => setTimeout(() => _0x2210a0("当前请求已超时"), _0x2b8738)), _0x17f49d]);
    }
  } catch (_0x353082) {
    console.log("❌请求发起失败！原因为：" + _0x353082);
  }
}
function randomInt(_0x3d5bdd, _0x413297) {
  return Math.round(Math.random() * (_0x413297 - _0x3d5bdd) + _0x3d5bdd);
}
function DoubleLog(_0x138d84) {
  if (_0x138d84 && $.isNode()) {
    {
      console.log("" + _0x138d84);
      $.notifyMsg.push("" + _0x138d84);
    }
  } else {
    if (_0x138d84) {
      {
        console.log("" + _0x138d84);
        $.notifyMsg.push("" + _0x138d84);
      }
    }
  }
}
function debug(_0x407294, _0x3c111c = "debug") {
  $.is_debug === "true" && ($.log("\n-----------" + _0x3c111c + "------------\n"), $.log(typeof _0x407294 == "string" ? _0x407294 : $.toStr(_0x407294) || "debug error => t=" + _0x407294), $.log("\n-----------" + _0x3c111c + "------------\n"));
}
function getQueries(_0x25cbd0) {
  const [, _0x522049] = _0x25cbd0.split("?");
  return _0x522049 ? _0x522049.split("&").reduce((_0x13ea04, _0x572b57) => {
    {
      var [_0x13b595, _0x572b57] = _0x572b57.split("=");
      _0x13ea04[_0x13b595] = _0x572b57;
      return _0x13ea04;
    }
  }, {}) : {};
}
async function getNotice() {
  const _0x3161b3 = ["https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/notice.json", "https://raw.githubusercontent.com/Sliverkiss/GoodNight/main/tip.json"];
  try {
    const _0x4b163e = await Promise.all(_0x3161b3.map(_0x11af59 => Request(_0x11af59)));
    _0x4b163e.map(_0x2e2f53 => console.log(_0x2e2f53?.["notice"] || "获取通知失败"));
  } catch (_0x3cfbad) {
    console.log("❌获取通知时发生错误：" + _0x3cfbad);
  }
}
async function SendMsgList(_0x4d8956) {
  await Promise.allSettled(_0x4d8956?.["map"](_0x59b7cb => SendMsg(_0x59b7cb.message.join("\n"), _0x59b7cb.avatar)));
}
async function SendMsg(_0xdc5cd0, _0x404f81) {
  const _0x5b2a60 = {
    "media-url": _0x404f81
  };
  _0xdc5cd0 && (0 < Notify ? $.isNode() ? await notify.sendNotify($.name, _0xdc5cd0) : $.msg($.name, $.title || "", _0xdc5cd0, _0x5b2a60) : console.log(_0xdc5cd0));
}
function ObjectKeys2LowerCase(_0x35379c) {
  _0x35379c = Object.fromEntries(Object.entries(_0x35379c).map(([_0x21b2b1, _0x4c615a]) => [_0x21b2b1.toLowerCase(), _0x4c615a]));
  return new Proxy(_0x35379c, {
    get: function (_0x138f3c, _0x38ed21, _0x5d4d45) {
      return Reflect.get(_0x138f3c, _0x38ed21.toLowerCase(), _0x5d4d45);
    },
    set: function (_0x426e5c, _0x391a7a, _0x16b613, _0x24e99c) {
      return Reflect.set(_0x426e5c, _0x391a7a.toLowerCase(), _0x16b613, _0x24e99c);
    }
  });
}
async function loadSakuraUtils() {
  let _0x206f9b = ($.isNode() ? process.env.SakuraUtil_code : $.getdata("SakuraUtil_code")) || "";
  if (_0x206f9b && Object.keys(_0x206f9b).length) {
    console.log("✅" + $.name + ":缓存中存在SakuraUtil代码,跳过下载");
    eval(_0x206f9b);
    return creatUtils();
  }
  console.log("🚀" + $.name + ":开始下载SakuraUtil代码");
  return new Promise(async _0x38d376 => {
    $.getScript("https://cdn.jsdelivr.net/gh/Sliverkiss/QuantumultX@main/Utils/SakuraUtil.js").then(_0x51de10 => {
      $.setdata(_0x51de10, "SakuraUtil_code");
      eval(_0x51de10);
      const _0x4de6fb = creatUtils();
      console.log("✅SakuraUtil加载成功,请继续");
      _0x38d376(_0x4de6fb);
    });
  });
}
!(async () => {
  if (typeof $request != "undefined") {
    await getCookie();
  } else {
    if (!(await loadModule())) {
      throw new Error("❌加载模块失败，请检查模块路径是否正常");
    }
    if (!(await checkEnv())) {
      throw new Error("❌未检测到ck，请添加环境变量");
    }
    if (userList.length > 0) {
      await main();
    }
  }
})().catch(_0x5c6368 => $.notifyMsg.push(_0x5c6368.message || _0x5c6368)).finally(async () => {
  await SendMsgList($.notifyList);
  const _0x166a18 = {
    ok: 1
  };
  $.done(_0x166a18);
});
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, a) => {
        s.call(this, t, (t, s, r) => {
          t ? a(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const a = this.getdata(t);
      if (a) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, a) => e(a));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        a = a ? a.replace(/\n/g, "").trim() : a;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [i, o] = a.split("@");
        const n = {
          url: `http://${o}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: r
          },
          headers: {
            "X-Key": i,
            Accept: "*/*"
          },
          timeout: r
        };
        this.post(n, (t, e, a) => s(a));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const a = !s && this.fs.existsSync(e);
        if (!s && !a) {
          return {};
        }
        {
          const a = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(a));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const a = !s && this.fs.existsSync(e);
        const r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : a ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const a = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of a) if (r = Object(r)[t], undefined === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, a) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[a + 1]) >> 0 == +e[a + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, a] = /^@(.*?)\.(.*?)$/.exec(t);
        const r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, a, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, a, r] = /^@(.*?)\.(.*?)$/.exec(e);
        const i = this.getval(a);
        const o = a ? "null" === i ? null : i || "{}" : "{}";
        try {
          const e = JSON.parse(o);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), a);
        } catch (e) {
          const i = {};
          this.lodash_set(i, r, t);
          s = this.setval(JSON.stringify(i), a);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: a,
              statusCode: r,
              headers: i,
              rawBody: o
            } = t;
            const n = s.decode(o, this.encoding);
            e(null, {
              status: a,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: a,
              response: r
            } = t;
            e(a, r, r && s.decode(r.rawBody, this.encoding));
          });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, a) => {
            !t && s && (s.body = a, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, a);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            } = t;
            e(null, {
              status: s,
              statusCode: a,
              headers: r,
              body: i,
              bodyBytes: o
            }, i, o);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let a = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: r,
            ...i
          } = t;
          this.got[s](r, i).then(t => {
            const {
              statusCode: s,
              statusCode: r,
              headers: i,
              rawBody: o
            } = t;
            const n = a.decode(o, this.encoding);
            e(null, {
              status: s,
              statusCode: r,
              headers: i,
              rawBody: o,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: r
            } = t;
            e(s, r, r && a.decode(r.rawBody, this.encoding));
          });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let a = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in a) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? a[e] : ("00" + a[e]).substr(("" + a[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let a = t[s];
        null != a && "" !== a && ("object" == typeof a && (a = JSON.stringify(a)), e += `${s}=${a}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", a = "", r) {
      const i = t => {
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  let e = t.url || t.openUrl || t["open-url"];
                  return {
                    url: e
                  };
                }
              case "Loon":
                {
                  let e = t.openUrl || t.url || t["open-url"];
                  let s = t.mediaUrl || t["media-url"];
                  return {
                    openUrl: e,
                    mediaUrl: s
                  };
                }
              case "Quantumult X":
                {
                  let e = t["open-url"] || t.url || t.openUrl;
                  let s = t["media-url"] || t.mediaUrl;
                  let a = t["update-pasteboard"] || t.updatePasteboard;
                  return {
                    "open-url": e,
                    "media-url": s,
                    "update-pasteboard": a
                  };
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, a, i(r));
            break;
          case "Quantumult X":
            $notify(e, s, a, i(r));
            break;
          case "Node.js":
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        a && t.push(a);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, t.stack);
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime();
      const s = (e - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}