//
// element.js
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

  mn.dom.MiniNovaDOMElement = function(nativeElement) {
    if(!(nativeElement instanceof HTMLElement)) {
      throw new TypeError("Argument 1 given was now an element.");
    }

    this.elt = nativeElement;
  }

  mn.dom.MiniNovaDOMElement.prototype.id = function(id) {
    id.replace(/[^A-Za-z\-_]/g, "-");

    if(document.getElementById(id)) {
      throw new Error("ID given already exists on the DOM.");
    }

    this.elt.id = id;

    return this;
  }

  mn.dom.MiniNovaDOMElement.prototype.addClass = function(name) {
    this.elt.classList.add(name);

    return this;
  }

  mn.dom.MiniNovaDOMElement.prototype.removeClass = function(name) {
    this.elt.classList.remove(name);

    return this;
  }

  mn.dom.MiniNovaDOMElement.prototype.hasClass = function(name) {
    return this.elt.classList.contains(name);
  }

  mn.dom.MiniNovaDOMElement.prototype.child = function(index) {
    index = (index||0);

    return new mn.dom.MiniNovaDOMElement(this.elt.children[index]);
  }

  mn.dom.MiniNovaDOMElement.prototype.parent = function() {
    return new mn.dom.MiniNovaDOMElement(this.elt.parentNode);
  }

  mn.dom.MiniNovaDOMElement.prototype.onclick = function(callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Onclick callback not of type `function`.");
    }

    this.elt.addEventListener("click", callback);

    return this;
  }

  mn.dom.MiniNovaDOMElement.prototype.ondblclick = function(callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Ondblclick callback not of type `function`.");
    }

    this.elt.addEventListener("dblclick", callback);

    return this;
  }

  mn.dom.MiniNovaDOMElement.prototype.onmouseover = function(callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Onmouseover callback not of type `function`.");
    }

    this.elt.addEventListener("mouseover", callback);

    return this;
  }

  mn.dom.MiniNovaDOMElement.prototype.onmouseout = function(callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Onmouseout callback not of type `function`.");
    }

    this.elt.addEventListener("mouseout", callback);

    return this;
  }

  mn.dom.MiniNovaDOMElement.prototype.on = function(type, callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Onclick callback not of type `function`.");
    }

    this.elt.addEventListener(type, callback);

    return this;
  }

  window.mn = mn;
  console.debug("mn.dom.element MiniNova Package Installed");
})(window.mn);
