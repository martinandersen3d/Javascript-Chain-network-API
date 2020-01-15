var axios = require("axios");
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require("node-localstorage").LocalStorage;
    localStorage = new LocalStorage("./scratch")
}
JSCOMPILER_PRESERVE({
    "delay": 1100
});
var network = function () {
    this.action = null;
    this.q = [];
    this.url = null;
    this.state = "first time";
    JSCOMPILER_PRESERVE(this.arguments);
    JSCOMPILER_PRESERVE(this.length);
    this.counterTotal = 0;
    this.counter = 0;
    JSCOMPILER_PRESERVE(this.continue);
    this.resultObj = {}
};
var n_ = network.prototype;
n_.get = function (s) {
    if ("first time" == this.state) {
        this.action = "get";
        this.url = s;
        var t = this.templateQ();
        t.type = "get";
        t.succes = null;
        t.request = s;
        t.respond = null;
        this.q.push(t);
        this.counterTotal++
    }
    if ("second time" == this.state);
    return this
};
n_.set = function (s) {
    if ("first time" === this.state) {
        this.action = "set";
        this.url = s;
        var t = this.templateQ();
        t.type = "set";
        t.succes = null;
        t.request = s;
        t.respond = null;
        this.q.push(t);
        this.counterTotal++
    }
    return this
};
n_.ls = function (s) {
    if ("first time" == this.state) {
        var t = this.templateQ();
        t.type = "ls";
        t.succes = null;
        t.request = s;
        t.respond = null;
        this.q.push(t);
        this.counterTotal++
    }
    if ("second time" === this.state) {
        var v = localStorage.getItem(url);
        if (v !== null);
        else;
    }
    return this
};
n_.server = function (s) {
    if ("first time" == this.state) {
        if (this.action == "get") axios.get("http://echo.jsontest.com/key/value/one/two").then(function (response) {}).catch(function (error) {});
        this.counterTotal++
    }
    return this
};
n_.result = function (s) {
    this.state = "second time";
    return this.q
};
n_.templateQ = function (s) {
    var t = {
        type: null,
        succes: null,
        request: null,
        respond: null
    };
    return this
};
var f = new network;
var res = f.get("http://echo.jsontest.com/key/value/one/two").ls().result();
console.log(res);