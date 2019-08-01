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

  mn.util = (mn.util||{});

  mn.util.Oscillator = function(func, freq, amp, off) {
    if(typeof func === "string") {
      if(typeof mn.util.Oscillator[func.toUpperCase()] === "function") {
        func = mn.util.Oscillator[func.toUpperCase()];
      }
    }

    freq = (freq||1);
    amp = (amp||1);
    off = (off||0);

    this.f = freq;
    this.a = amp;
    this.x0 = off;
    this.func = func;
    this.time = +new Date/1000;
  }

  mn.util.Oscillator.prototype.get = function() {
    let now = +new Date/1000;
    let delta = now-this.time;

    return this.func(delta, this.f, this.a, this.x0);
  }

  mn.util.Oscillator.SINE = function(time, freq, amp, off) {
    return Math.sin(2*(time-off)*Math.PI*freq)*amp;
  }

  mn.util.Oscillator.SQUARE = function(time, freq, amp, off) {
    let tmp = Math.sin(2*(time-off)*Math.PI*freq);

    if(tmp < 0) tmp = -1;
    else if(tmp > 0) tmp = 1;
    else tmp = 0;

    return tmp*amp;
  }

  mn.util.Oscillator.TRIANGLE = function(time, freq, amp, off) {
    return (2/Math.PI)*Math.asin(Math.sin(2*Math.PI*(time-off)*freq))*amp;
  }

  mn.util.Oscillator.SAWTOOTH = function(time, freq, amp, off) {
    return amp*((time-off/(1/freq))%1);
  }

  window.mn = mn;
  console.debug("mn.util.oscillator MiniNova Package Installed");
})(window.mn);
