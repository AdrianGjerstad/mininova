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
    if(mn.__packagesLoaded__["mn.sound.note"]) {
      if(freq instanceof mn.sound.Note) {
        freq = freq.frequency;
      }
    }

    freq = (freq||440);
    type = (type||"sine");

    if(!mn.__packagesLoaded__["mn.sound.handler"]) {
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
    if(this.playing()) return;
    time = (time||0);
    time = mn.sound.schedule(Math.max(time, 0));

    this.__oscillator__ = mn.sound.__context__.createOscillator();
    this.__oscillator__.frequency.setValueAtTime(this.frequency,
        mn.sound.__context__.currentTime);
    this.__oscillator__.type = this.type;

    this.__oscillator__.connect(mn.sound.speakers);

    this.__oscillator__.start(time);
  }

  mn.sound.Oscillator.prototype.stop = function(time) {
    if(!this.playing()) return;
    let cpy_time = time;
    time = (time||0);
    time = mn.sound.schedule(Math.max(time, 0));

    this.__oscillator__.stop(time);

    setTimeout(()=>{this.__oscillator__ = null}, cpy_time*1000+20);
  }

  mn.sound.Oscillator.prototype.playing = function() {
    return this.__oscillator__ !== null;
  }

  mn.sound.Oscillator.prototype.setFrequency = function(freq) {
    this.frequency = freq||440;
    if(this.playing()) this.__oscillator__.frequency.setValueAtTime(freq,
        mn.sound.__context__.currentTime);
  }

  mn.sound.Oscillator.prototype.rampFrequency = function(freq, time) {
    this.frequency = freq||440;
    time = time||0.020; // 20ms
    if(this.playing()) this.__oscillator__.frequency.
        exponentialRampToValueAtTime(freq,
        mn.sound.schedule(Math.max(time, 0)));
  }

  mn.sound.Oscillator.prototype.setType = function(type) {
    this.type = type||"sine";
    if(this.playing()) this.__oscillator__.type = type;
  }

  window.mn = mn;
  console.debug("mn.sound.oscillator MiniNova Package Installed");
})(window.mn);