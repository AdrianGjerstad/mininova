//
// pan.js
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
   * The main mn.sound namespace for data that is in mn.sound.
   *
   * @type {object}
   *
   * @version 0
   */
  mn.sound = (mn.sound||{});

  /**
   * Presets for pan positioning
   *
   * @const {object}
   *
   * @version 0
   */
  mn.sound.PAN = {
    LEFT: -1,
    CENTER: 0,
    RIGHT: 1
  }

  /**
   * The pan filter class to create stereo pan on sound.
   *
   * @constructor
   * @param {number} pos The position of the pan
   * @typedef {object} mn.sound.PanFX
   *
   * @version 0
   */
  mn.sound.PanFX = function(pos) {
    this.panValue = pos;

    if(!mn.__packagesLoaded__["mn.sound.handler"]) {
      alert("Can't create SFX without mn.sound.handler package!");
      return;
    }

    this.fx = mn.sound.__context__.createStereoPanner();
    this.fx.pan.setValueAtTime(pos,  mn.sound.__context__.currentTime);
  }

  /**
   * Sets the amount of pan the effect has.
   *
   * @param {number} pos The position the pan should have
   *
   * @version 0
   */
  mn.sound.PanFX.prototype.setPan = function(pos) {
    this.panValue = pos;
    this.fx.pan.setValueAtTime(pos,  mn.sound.__context__.currentTime);
  }

  /**
   * Sets the pan to full left
   *
   * @version 0
   */
  mn.sound.PanFX.prototype.panLeft = function() {
    this.panValue = -1;
    this.fx.pan.setValueAtTime(-1,  mn.sound.__context__.currentTime);
  }

  /**
   * Sets the pan to full right
   *
   * @version 0
   */
  mn.sound.PanFX.prototype.panRight = function() {
    this.panValue = 1;
    this.fx.pan.setValueAtTime(1,  mn.sound.__context__.currentTime);
  }

  /**
   * Sets the pan position in the middle
   *
   * @version 0
   */
  mn.sound.PanFX.prototype.reset = function() {
    this.panValue = 0;
    this.fx.pan.setValueAtTime(0,  mn.sound.__context__.currentTime);
  }

  window.mn = mn;
  console.debug("mn.sound.fx.pan MiniNova Package Installed");
})(window.mn);