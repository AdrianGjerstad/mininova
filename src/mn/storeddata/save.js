//
// save.js
//
// MiniNova Version 0.1.0 (pre-Hydrogen)
//
// Distributed under the MIT License
// You may find a most-recent copy at:
//
//   https://github.com/AdrianGjerstad/mininova/blob/master/LICENSE
//
// The MIT License (MIT)
//
// Copyright (c) 2019 Adrian Gjerstad
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

(async function(mn) {
  if(typeof mn === "undefined") {
    mn = {};
    console.warn("You did not use mininova.js for loading!");
  }

  mn.storeddata = (mn.storeddata||{});
  mn.storeddata.__default_global_namespace__ = "mininova_default";
  mn.storeddata.__saver_separator__ = ".";

  mn.storeddata.__

  mn.storeddata.Saver = function(global_namespace, sitewide) {
    global_namespace = (global_namespace||mn.storeddata.
        __default_global_namespace__);
    this._ = mn.storeddata.__saver_separator__;
    this.request_base = global_namespace + this._;
    this.global_namespace = global_namespace;
    this.sitewide = sitewide;
    if(!sitewide) {
      this.request_base += location.pathname.replace("/", this._) + this._;
    }
  }

  mn.storeddata.Saver.prototype.set = function(k, v) {
    localStorage.setItem(this.request_base + k||"default", v||"");
  }

  mn.storeddata.Saver.prototype.get = function(k) {
    return localStorage.getItem(this.request_base + k||"defult");
  }

  mn.storeddata.Saver.prototype.remove = function(k) {
    localStorage.removeItem(this.request_base + (k||"default"));
  }

  mn.storeddata.Saver.prototype.give = function(p, k, v) {
    if(p === location.pathname) {
      this.set(k, v);
      return;
    }

    localStorage.setItem(this.global_namespace + this._ +
        p.replace("/", this._) + this._ + (k||"default"), v||"");
  }

  window.mn = mn;
  console.debug("mn.storeddata.save MiniNova Package Installed");
})(window.mn);