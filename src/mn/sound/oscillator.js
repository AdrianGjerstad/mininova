//
// oscillator.js
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

  mn.sound = (mn.sound||{});

  mn.sound.Oscillator = function(freq, type) {
    if(mn.__loadedPackages__["mn.sound.note"]) {
      if(freq instanceof mn.sound.Note) {
        freq = freq.frequency;
      }
    }

    freq = (freq||440);
    type = (type||"sine");

    if(!mn.__loadedPackages__["mn.sound.handler"]) {
      alert("NOTE: The Oscillator object cannot run without the "+
          "mn.sound.handler package having been included first.");
      throw new Error("The Oscillator object cannot run without the "+
          "mn.sound.handler package having been included first.");
    }

    this.frequency = freq;
    this.type = type;
    this.__oscillator__ = null;
  }

  mn.sound.Oscillator.prototype.start = function(time) {
    time = mn.sound.schedule(Math.max(time, 0));

    this.__oscillator__ = mn.sound.__context__.createOscillator();
    this.__oscillator__.frequency.setValueAtTime(this.frequency,
        mn.sound.__context__.currentTime);
    this.__oscillator__.type = this.type;
  }

  window.mn = mn;
  console.debug("mn.sound.oscillator MiniNova Package Installed");
})(window.mn);