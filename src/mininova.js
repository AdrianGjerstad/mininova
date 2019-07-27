//
// mininova.js
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
  }

  mn.__VERSION__ = {};

  mn.__VERSION__.CODE = 0;
  mn.__VERSION__.MAJOR = 0;
  mn.__VERSION__.MINOR = 1;
  mn.__VERSION__.PATCH = 0;

  mn.__VERSION__.ELEMENT = (function(code) {
    return ["pre-Hydrogen", "Hydrogen", "Helium", "Lithium", "Beryllium",
        "Boron", "Carbon", "Nitrogen", "Oxygen", "Flourine", "Neon", "Sodium",
        "Magnesium", "Aluminium", "Silicon", "Phosphorus"][code];
  })(mn.__VERSION__.MAJOR);

  mn.__VERSION__.NAME = mn.__VERSION__.MAJOR + "." +
      mn.__VERSION__.MINOR + "." +
      mn.__VERSION__.PATCH + " (" + mn.__VERSION__.ELEMENT + ")";

  mn.__packagesLoading__ = 0;
  mn.loadPackage = function(package, opt) {
    opt = (opt || {});
    mn.__packagesLoading__++;

    let script = document.createElement("script");
    script.onload = function() {mn.__packagesLoading__--;
      if(mn.__packagesLoading__ === 0) {
        mn.start();
      }
    };
    script.src = (opt.path||"lib/mininova/") + package.replace(/\./g, "/") + ".js";

    document.head.appendChild(script);
  }

  mn.start = function() {
    if(typeof window.start === "function") {
      window.start.call(mn);
    }
  }

  window.mn = mn;
  console.log("MININOVA BOOTED");
  console.info("MiniNova Version " + mn.__VERSION__.NAME);

  console.info("If you wish, please use `mn.loadPackage(\"<package>\")`"+
      "to load MiniNova packages into your project.");
})(window.mn);