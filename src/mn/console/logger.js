//
// logger.js
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

  mn.console = (mn.console||{});

  mn.console.__timestamp__ = function() {
    let now = new Date;
    return "UTC "+now.getUTCFullYear()+"-"+(now.getUTCMonth()<9?"0"+
        (now.getUTCMonth()+1):now.getUTCMonth()+1)+"-"+now.getUTCDate()+" "+
        (now.getUTCHours()<10?"0"+now.getUTCHours():now.getUTCHours())+":"+
        (now.getUTCMinutes()<10?"0"+now.getUTCMinutes():now.getUTCMinutes())+
        ":"+
        (now.getUTCSeconds()<10?"0"+now.getUTCSeconds():now.getUTCSeconds());
  }

  mn.console.log = function(text) {
    console.log("%c " + mn.console.__timestamp__() + " %c %c LOG %c " + text,
      "background-color: white; color: black; font-weight: bold;", "",
      "background-color: #4F4; color: black; font-weight: bold;", "");
  }

  mn.console.warn = function(text) {
    console.log("%c " + mn.console.__timestamp__() + " %c %c WARNING %c " +
      text,
      "background-color: white; color: black; font-weight: bold;", "",
      "background-color: yellow; color: black; font-weight: bold;", "");
  }

  mn.console.error = function(text) {
    console.log("%c " + mn.console.__timestamp__() + " %c %c ERROR %c " + text,
      "background-color: white; color: black; font-weight: bold;", "",
      "background-color: red; color: white; font-weight: bold;", "");
  }

  mn.console.verbose = function(text) {
    console.debug("%c " + mn.console.__timestamp__() + " %c %c VERBOSE %c " +
      text,
      "background-color: white; color: black; font-weight: bold;", "",
      "background-color: #44F; color: black; font-weight: bold;",
      "color: lightgray;");
  }

  window.mn = mn;
  console.debug("mn.console.logger MiniNova Package Installed");
})(window.mn);