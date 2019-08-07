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

  /**
   * The main mn.dom namespace for data that is in mn.dom.
   *
   * @type {object}
   *
   * @version 0
   */
  mn.dom = (mn.dom||{});

  /**
   * Latch to a pre-existing element with the given ID.
   *
   * @param {string} id The id of the element to latch to.
   * @returns {mn.dom.MiniNovaDOMElement} The element with the given id.
   * @throws {Error} If the package mn.dom.element is not loaded.
   *
   * @version 0
   * @see mn.dom.class
   * @see mn.dom.qry
   * @see mn.dom.name
   * @see mn.dom.tag
   */
  mn.dom.id = function(id) {
    if(mn.__packagesLoaded__["mn.dom.element"]) {
      throw new Error("Cannot latch to HTML elements without mn.dom.element.");
    }

    return new mn.dom.MiniNovaDOMElement(document.querySelector("#" + id));
  }

  /**
   * Latch to a pre-existing element with the given classname.
   *
   * @param {string} name The class of the element to latch to.
   * @param {number} [idx=0] The index of the element on the page with the
   *                         class.
   * @returns {mn.dom.MiniNovaDOMElement} The element with the given class[idx].
   * @throws {Error} If the package mn.dom.element is not loaded.
   *
   * @version 0
   * @see mn.dom.id
   * @see mn.dom.qry
   * @see mn.dom.name
   * @see mn.dom.tag
   */
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

  /**
   * Latch to a pre-existing element with the given query selector.
   *
   * @param {string} csss The css selector for the query
   * @param {number} [idx=0] The index of the element on the page with the
   *                         query.
   * @returns {mn.dom.MiniNovaDOMElement} The element with the given query[idx].
   * @throws {Error} If the package mn.dom.element is not loaded.
   *
   * @version 0
   * @see mn.dom.id
   * @see mn.dom.class
   * @see mn.dom.name
   * @see mn.dom.tag
   */
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

  /**
   * Latch to a pre-existing element with the given name.
   *
   * @param {string} name The name of the element.
   * @param {number} [idx=0] The index of the element on the page with the name.
   * @returns {mn.dom.MiniNovaDOMElement} The element with the given name[idx].
   * @throws {Error} If the package mn.dom.element is not loaded.
   *
   * @version 0
   * @see mn.dom.id
   * @see mn.dom.class
   * @see mn.dom.qry
   * @see mn.dom.tag
   */
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

  /**
   * Latch to a pre-existing element with the given tagname.
   *
   * @param {string} tag The tagname of the element.
   * @param {number} [idx=0] The index of the element on the page with the name.
   * @returns {mn.dom.MiniNovaDOMElement} The element with the given tag[idx].
   * @throws {Error} If the package mn.dom.element is not loaded.
   *
   * @version 0
   * @see mn.dom.id
   * @see mn.dom.class
   * @see mn.dom.qry
   * @see mn.dom.name
   */
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
