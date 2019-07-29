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
  mn.devtools.__close__ = null;
  mn.devtools.__minmax__ = null;
  mn.devtools.__console__ = null;
  mn.devtools.__height__ = null;
  mn.devtools.__toolbar_height__ = 40;

  window.addEventListener("load", function(e) {
    mn.devtools.__height__ = window.innerHeight/3+
        mn.devtools.__toolbar_height__;
    // Load console view
    mn.devtools.__window__ = document.createElement("div");
    mn.devtools.__window__.style.position = "fixed";
    mn.devtools.__window__.style.left = "0";
    mn.devtools.__window__.style.bottom = "0";//"-" + mn.devtools.__height__ + "px";
    mn.devtools.__window__.style.width = "100vw";
    mn.devtools.__window__.style.padding = "0";
    mn.devtools.__window__.style.margin = "0";
    mn.devtools.__window__.style.height = (mn.devtools.__height__ +
          mn.devtools.__toolbar_height__) + "px";
    mn.devtools.__window__.style.background = "#bbb";
    mn.devtools.__window__.style.borderRadius = mn.devtools.__toolbar_height__ +
          "px 0 0 0";
    mn.devtools.__window__.style.transition = "bottom 0.5s";
    mn.devtools.__window__.style.webkitTransition = "bottom 0.5s";
    mn.devtools.__window__.style.mozTransition = "bottom 0.5s";

    mn.devtools.__close__ = document.createElement("div");
    mn.devtools.__close__.style.position = "absolute";
    mn.devtools.__close__.style.left = (window.innerWidth
          -mn.devtools.__toolbar_height__)+
          "px";
    mn.devtools.__close__.style.top =
        (mn.devtools.__toolbar_height__/2-10)+"px";
    mn.devtools.__close__.style.margin = "0";
    mn.devtools.__close__.style.padding = "0";
    mn.devtools.__close__.style.background = "red";
    mn.devtools.__close__.style.width = "20px";
    mn.devtools.__close__.style.height = "20px";
    mn.devtools.__close__.style.fontSize = "20px";
    mn.devtools.__close__.style.lineHeight = "20px";
    mn.devtools.__close__.style.verticalAlign = "middle";
    mn.devtools.__close__.style.textAlign = "center";
    mn.devtools.__close__.style.borderRadius = "10px";
    mn.devtools.__close__.style.border = "1px solid darkred";
    mn.devtools.__close__.style.color = "darkred";
    mn.devtools.__close__.style.cursor = "pointer";
    mn.devtools.__close__.innerHTML = "&times;";
    mn.devtools.__close__.title = "Close MiniNova DevTools";

    mn.devtools.__close__.onmouseover = function() {
      mn.devtools.__close__.style.border = "1px solid white";
      mn.devtools.__close__.style.color = "white";
    }

    mn.devtools.__close__.onmouseout = function() {
      mn.devtools.__close__.style.border = "1px solid darkred";
      mn.devtools.__close__.style.color = "darkred";
    }

    mn.devtools.__close__.onclick = function() {
      document.body.removeChild(mn.devtools.__window__);
    }

    mn.devtools.__minmax__ = document.createElement("div");
    mn.devtools.__minmax__.style.position = "absolute";
    mn.devtools.__minmax__.style.left = (window.innerWidth
          -mn.devtools.__toolbar_height__*2)+
          "px";
    mn.devtools.__minmax__.style.top =
      (mn.devtools.__toolbar_height__/2-10)+"px";
    mn.devtools.__minmax__.style.margin = "0";
    mn.devtools.__minmax__.style.padding = "0";
    mn.devtools.__minmax__.style.background = "yellow";
    mn.devtools.__minmax__.style.width = "20px";
    mn.devtools.__minmax__.style.height = "20px";
    mn.devtools.__minmax__.style.fontSize = "30px";
    mn.devtools.__minmax__.style.lineHeight = "20px";
    mn.devtools.__minmax__.style.verticalAlign = "middle";
    mn.devtools.__minmax__.style.textAlign = "center";
    mn.devtools.__minmax__.style.borderRadius = "10px";
    mn.devtools.__minmax__.style.border = "1px solid #aa0";
    mn.devtools.__minmax__.style.color = "#aa0";
    mn.devtools.__minmax__.style.cursor = "pointer";
    mn.devtools.__minmax__.innerHTML = "-";
    mn.devtools.__minmax__.title = "Minimize MiniNova DevTools";

    mn.devtools.__minmax__.onmouseover = function() {
      mn.devtools.__minmax__.style.border = "1px solid white";
      mn.devtools.__minmax__.style.color = "white";
    }

    mn.devtools.__minmax__.onmouseout = function() {
      mn.devtools.__minmax__.style.border = "1px solid #aa0";
      mn.devtools.__minmax__.style.color = "#aa0";
    }

    mn.devtools.__minmax__.onclick = function() {
      if(mn.devtools.__minmax__.title === "Minimize MiniNova DevTools") {
        mn.devtools.__window__.style.bottom =
          "-" + mn.devtools.__height__ + "px";
        mn.devtools.__minmax__.title = "Maximize MiniNova DevTools";
        mn.devtools.__minmax__.innerHTML = "□";
        mn.devtools.__minmax__.style.fontSize = "20px";
      } else if(mn.devtools.__minmax__.title === "Maximize MiniNova DevTools") {
        mn.devtools.__window__.style.bottom = "0";
        mn.devtools.__minmax__.title = "Minimize MiniNova DevTools";
        mn.devtools.__minmax__.innerHTML = "-";
        mn.devtools.__minmax__.style.fontSize = "30px";
      }
    }

    mn.devtools.__console__ = document.createElement("div");
    mn.devtools.__console__.style.background = "#ddd";
    mn.devtools.__console__.style.width = "100vw";
    mn.devtools.__console__.style.height = mn.devtools.__height__ + "px";
    mn.devtools.__console__.style.position = "relative";
    mn.devtools.__console__.style.top = mn.devtools.__toolbar_height__ + "px";
    mn.devtools.__console__.style.left = "0";
    mn.devtools.__console__.style.borderTop = "1px solid black";

    mn.devtools.__window__.appendChild(mn.devtools.__close__);
    mn.devtools.__window__.appendChild(mn.devtools.__minmax__);

    mn.devtools.__window__.appendChild(mn.devtools.__console__);
    document.body.appendChild(mn.devtools.__window__);
  });

  window.mn = mn;
  console.debug("mn.devtools.console MiniNova Package Installed");
})(window.mn);