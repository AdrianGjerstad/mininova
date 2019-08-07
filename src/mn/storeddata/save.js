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

  /**
   * The main mn.storeddata namespace for data that is in mn.storeddata.
   *
   * @type {object}
   *
   * @version 0
   */
  mn.storeddata = (mn.storeddata||{});

  /** Default global namespace value @private @version 0 */
  mn.storeddata.__default_global_namespace__ = "mininova_default";
  /** Data position seperator @private @version 0 */
  mn.storeddata.__saver_separator__ = ".";

  /**
   * The saver class to save data in localStorage
   *
   * @constructor
   * @param {string} global_namespace The "root" namespace
   * @param {boolean} sitewide Wether or not it is for the entire site.
   * @typedef {object} mn.storeddata.Saver
   *
   * @version 0
   */
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

  /**
   * Set a key-value pair in localStorage
   *
   * @param {string} [k="default"] The key to access the value later.
   * @param {string} [v] The value to set it to.
   *
   * @version 0
   * @see mn.storeddata.Saver.prototype.get
   */
  mn.storeddata.Saver.prototype.set = function(k, v) {
    localStorage.setItem(this.request_base + k||"default", v||"");
  }

  /**
   * Get a value from a key in localStorage
   *
   * @param {string} [k="default"] The key to access the value.
   * @return {string} The saved value or null
   *
   * @version 0
   * @see mn.storeddata.Saver.prototype.set
   */
  mn.storeddata.Saver.prototype.get = function(k) {
    return localStorage.getItem(this.request_base + k||"defult");
  }

  /**
   * See if a value exists
   *
   * @param {string} [k="default"] The key to access the value.
   * @return {boolean} Wether or not the value exists
   *
   * @version 0
   */
  mn.storeddata.Saver.prototype.exists = function(k) {
    return (localStorage.getItem(this.request_base + k||"default")!==null);
  }

  /**
   * Remove a key-value pair in localStorage
   *
   * @param {string} [k="default"] The key to access the value.
   *
   * @version 0
   */
  mn.storeddata.Saver.prototype.remove = function(k) {
    localStorage.removeItem(this.request_base + (k||"default"));
  }

  /**
   * Set a key-value pair in a different page
   *
   * @param {string} p The path to give it to (HTML page)
   * @param {string} [k="default"] The key to set the value to.
   * @param {string} [v] The value to set the key to.
   *
   * @version 0
   */
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