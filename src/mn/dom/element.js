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

  /**
   * The main mn.dom namespace for data that is in mn.dom.
   *
   * @type {object}
   *
   * @version 0
   */
  mn.dom = (mn.dom||{});

  /**
   * The underlying wrapper for any dom element.
   *
   * This is where every chainable function for the element object exists.
   *
   * @constructor
   * @param {HTMLElement} nativeElement The underlying HTMLElement object.
   * @throws {TypeError} If nativeElement was not of type HTMLElement.
   * @typedef {Object} mn.dom.MiniNovaDOMElement
   *
   * @protected
   *
   * @version 0
   */
  mn.dom.MiniNovaDOMElement = function(nativeElement) {
    if(!(nativeElement instanceof HTMLElement)) {
      throw new TypeError("Argument 1 given was now an element.");
    }

    this.elt = nativeElement;
  }

  /**
   * Set the ID value of the element.
   *
   * NOTE: DOM IDs are made to be unique.
   * Chainable.
   *
   * @param {string} id A valid and unique ID
   * @throws {Error} If the id given already exists. Aka, not unique.
   * @returns {mn.dom.MiniNovaDOMElement} This object
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.addClass
   */
  mn.dom.MiniNovaDOMElement.prototype.id = function(id) {
    id.replace(/[^A-Za-z\-_]/g, "-");

    if(document.getElementById(id)) {
      throw new Error("ID given already exists on the DOM.");
    }

    this.elt.id = id;

    return this;
  }

  /**
   * Adds a class to the element.
   *
   * Chainable.
   *
   * @param {string} name A classname
   * @returns {mn.dom.MiniNovaDOMElement} This object
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.removeClass
   * @see mn.dom.MiniNovaDOMElement.prototype.id
   */
  mn.dom.MiniNovaDOMElement.prototype.addClass = function(name) {
    this.elt.classList.add(name);

    return this;
  }

  /**
   * Removes a class from the element.
   *
   * Chainable.
   *
   * @param {string} name A classname
   * @returns {mn.dom.MiniNovaDOMElement} This object
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.addClass
   */
  mn.dom.MiniNovaDOMElement.prototype.removeClass = function(name) {
    this.elt.classList.remove(name);

    return this;
  }

  /**
   * Checks wether or not a class exists.
   *
   * @param {string} name A classname
   * @returns {boolean} Wether or not the class exists
   *
   * @version 0
   */
  mn.dom.MiniNovaDOMElement.prototype.hasClass = function(name) {
    return this.elt.classList.contains(name);
  }

  /**
   * Select a child element based on a zero-based index.
   *
   * Chainable.
   *
   * @param {number} [index=0] The index of the child to be selected.
   * @returns {mn.dom.MiniNovaDomElement} The child[index] of the element.
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.parent
   */
  mn.dom.MiniNovaDOMElement.prototype.child = function(index) {
    index = (index||0);

    return new mn.dom.MiniNovaDOMElement(this.elt.children[index]);
  }

  /**
   * Select the parent element.
   *
   * Chainable.
   *
   * @returns {mn.dom.MiniNovaDomElement} The parent of the element.
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.child
   */
  mn.dom.MiniNovaDOMElement.prototype.parent = function() {
    return new mn.dom.MiniNovaDOMElement(this.elt.parentNode);
  }

  /**
   * Onclick event for the element
   *
   * Chainable.
   *
   * @param {function} callback The function to be called when the event occurs.
   * @returns {mn.dom.MiniNovaDomElement} This object.
   * @throws {TypeError} If the callback was not of type function.
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.ondblclick
   * @see mn.dom.MiniNovaDOMElement.prototype.onmouseover
   * @see mn.dom.MiniNovaDOMElement.prototype.onmouseout
   * @see mn.dom.MiniNovaDOMElement.prototype.on
   */
  mn.dom.MiniNovaDOMElement.prototype.onclick = function(callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Onclick callback not of type `function`.");
    }

    this.elt.addEventListener("click", callback);

    return this;
  }

  /**
   * On double click event for the element
   *
   * Chainable.
   *
   * @param {function} callback The function to be called when the event occurs.
   * @returns {mn.dom.MiniNovaDomElement} This object.
   * @throws {TypeError} If the callback was not of type function.
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.onclick
   * @see mn.dom.MiniNovaDOMElement.prototype.onmouseover
   * @see mn.dom.MiniNovaDOMElement.prototype.onmouseout
   * @see mn.dom.MiniNovaDOMElement.prototype.on
   */
  mn.dom.MiniNovaDOMElement.prototype.ondblclick = function(callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Ondblclick callback not of type `function`.");
    }

    this.elt.addEventListener("dblclick", callback);

    return this;
  }

  /**
   * On hover event for the element
   *
   * Chainable.
   *
   * @param {function} callback The function to be called when the event occurs.
   * @returns {mn.dom.MiniNovaDomElement} This object.
   * @throws {TypeError} If the callback was not of type function.
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.onclick
   * @see mn.dom.MiniNovaDOMElement.prototype.ondblclick
   * @see mn.dom.MiniNovaDOMElement.prototype.onmouseout
   * @see mn.dom.MiniNovaDOMElement.prototype.on
   */
  mn.dom.MiniNovaDOMElement.prototype.onmouseover = function(callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Onmouseover callback not of type `function`.");
    }

    this.elt.addEventListener("mouseover", callback);

    return this;
  }

  /**
   * On mouse out event for the element
   *
   * Chainable.
   *
   * @param {function} callback The function to be called when the event occurs.
   * @returns {mn.dom.MiniNovaDomElement} This object.
   * @throws {TypeError} If the callback was not of type function.
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.onclick
   * @see mn.dom.MiniNovaDOMElement.prototype.ondblclick
   * @see mn.dom.MiniNovaDOMElement.prototype.onmouseover
   * @see mn.dom.MiniNovaDOMElement.prototype.on
   */
  mn.dom.MiniNovaDOMElement.prototype.onmouseout = function(callback) {
    if(typeof callback !== "function") {
      throw new TypeError("Onmouseout callback not of type `function`.");
    }

    this.elt.addEventListener("mouseout", callback);

    return this;
  }

  /**
   * Custom event handler for the element
   *
   * Chainable.
   *
   * @param {string} type The type of event to listen for.
   * @param {function} callback The function to be called when the event occurs.
   * @returns {mn.dom.MiniNovaDomElement} This object.
   * @throws {TypeError} If the callback was not of type function.
   *
   * @version 0
   * @see mn.dom.MiniNovaDOMElement.prototype.onclick
   * @see mn.dom.MiniNovaDOMElement.prototype.ondblclick
   * @see mn.dom.MiniNovaDOMElement.prototype.onmouseover
   * @see mn.dom.MiniNovaDOMElement.prototype.onmouseout
   */
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
