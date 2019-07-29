//
// console.js
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

  mn.devtools = (mn.devtools||{});

  mn.devtools.__timestamp__ = function() {
    let now = new Date;
    return "UTC "+now.getUTCFullYear()+"-"+(now.getUTCMonth()<9?"0"+
        (now.getUTCMonth()+1):now.getUTCMonth()+1)+"-"+now.getUTCDate()+" "+
        (now.getUTCHours()<10?"0"+now.getUTCHours():now.getUTCHours())+":"+
        (now.getUTCMinutes()<10?"0"+now.getUTCMinutes():now.getUTCMinutes())+
        ":"+
        (now.getUTCSeconds()<10?"0"+now.getUTCSeconds():now.getUTCSeconds());
  }

  mn.devtools.__window__ = null;
  mn.devtools.__height__ = null;
  mn.devtools.__toolbar_height__ = 40;

  document.body.addEventListener("load", function() {
    try {
    mn.devtools.__height__ = document.body.offsetHeight/3;
    // Load console view
    mn.devtools.__window__ = document.createElement("div");
    mn.devtools.__window__.style.position = "fixed";
    mn.devtools.__window__.style.left = "0";
    mn.devtools.__window__.style.bottom = "-" + mn.devtools.__height__ + "px";
    mn.devtools.__window__.style.width = "100vw";
    mn.devtools.__window__.style.height = (mn.devtools.__height__ +
          mn.devtools.__toolbar_height__) + "px";
    mn.devtools.__window__.style.background = "#bbb";
    mn.devtools.__window__.style.borderRadius = "10px 10px 0 0";

    document.body.appendChild(mn.devtools.__window__);
    } catch(e) {alert(e.message);}
  });

  window.mn = mn;
  console.debug("mn.devtools.console MiniNova Package Installed");
})(window.mn);