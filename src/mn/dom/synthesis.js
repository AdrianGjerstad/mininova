//
// synthesis.js
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
   * Create an element and put it on the page.
   *
   * Synthesis is defined as the process of creating something, it doesn't have
   * to be music.
   *
   * @param {string} tagName The name of the tag to be created.
   * @param {...string} attrList A series of parameters that define the
   *                             attributes on the element.
   * @returns {mn.dom.MiniNovaDOMElement} The new element
   * @throws {Error} If the package mn.dom.element is not loaded.
   * @example
   * mn.dom.synthesize("div", "style", "background: red;", "width", "50")
   * // Creates
   * // <div style="background: red;" width="50"></div>
   *
   * @version 0
   * @author Adrian Gjerstad <github@AdrianGjerstad>
   * @see HTMLElement
   */
  mn.dom.synthesize = function(tagName, ...attrList) {
    if(!mn.__packagesLoaded__["mn.dom.element"]) {
      throw new Error("Cannot create elements without mn.dom.element.");
    }

    if(attrList.length%2 === 1) {
      attrList.pop();
    }

    let elt = document.createElement(tagName.toLowerCase());

    attrList.forEach(function(v, idx, array) {
      if(idx%2===1) return;
      let attr = array[idx];
      let value = array[idx+1];

      if(value === "__mn_standalone__") {
        let newAttr = document.createAttribute(attr);
        newAttr.value = attr;
        elt.setAttributeNode(newAttr);
      } else {
        let newAttr = document.createAttribute(attr);
        newAttr.value = value;
        elt.setAttributeNode(newAttr);
      }
    });

    document.body.appendChild(elt);

    return new mn.dom.MiniNovaDOMElement(elt);
  }

  window.mn = mn;
  console.debug("mn.dom.synthesis MiniNova Package Installed");
})(window.mn);
