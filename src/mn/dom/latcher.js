//
// latcher.js
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

  mn.dom = (mn.dom||{});

  mn.dom.id = function(id) {
    if(mn.__packagesLoaded__["mn.dom.element"]) {
      throw new Error("Cannot latch to HTML elements without mn.dom.element.");
    }

    return new mn.dom.MiniNovaDOMElement(document.querySelector("#" + id));
  }

  mn.dom.class = function(name, idx) {
    if(mn.__packagesLoaded__["mn.dom.element"]) {
      throw new Error("Cannot latch to HTML elements without mn.dom.element.");
    }

    idx = (idx||0);

    if(document.getElementsByClassName(name) instanceof Array)
    return new mn.dom.MiniNovaDOMElement(
      document.getElementsByClassName(name)[idx]
    );

    return new mn.dom.MiniNovaDOMElement(document.getElementsByClassName(name));
  }

  mn.dom.qry = function(csss, idx) {
    if(mn.__packagesLoaded__["mn.dom.element"]) {
      throw new Error("Cannot latch to HTML elements without mn.dom.element.");
    }

    idx = (idx||0);

    if(document.querySelector(csss) instanceof Array)
    return new mn.dom.MiniNovaDOMElement(
      document.querySelector(csss)[idx]
    );

    return new mn.dom.MiniNovaDOMElement(document.querySelector(csss));
  }

  mn.dom.name = function(name, idx) {
    if(mn.__packagesLoaded__["mn.dom.element"]) {
      throw new Error("Cannot latch to HTML elements without mn.dom.element.");
    }

    idx = (idx||0);

    if(document.getElementsByName(name) instanceof Array)
    return new mn.dom.MiniNovaDOMElement(
      document.getElementsByName(name)[idx]
    );

    return new mn.dom.MiniNovaDOMElement(document.getElementsByName(name));
  }

  mn.dom.tag = function(tag, idx) {
    if(mn.__packagesLoaded__["mn.dom.element"]) {
      throw new Error("Cannot latch to HTML elements without mn.dom.element.");
    }

    idx = (idx||0);

    if(document.getElementsByTagName(tag) instanceof Array)
    return new mn.dom.MiniNovaDOMElement(
      document.getElementsByTagName(name)[idx]
    );

    return new mn.dom.MiniNovaDOMElement(document.getElementsByTagName(name));
  }

  window.mn = mn;
  console.debug("mn.dom.latcher MiniNova Package Installed");
})(window.mn);
