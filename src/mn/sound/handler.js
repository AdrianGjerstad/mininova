//
// handler.js
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

  try {
    let AudioContext = window.AudioContext||window.webkitAudioContext;
    /** The underlying web audio context @private @version 0 */
    mn.sound.__context__ = new AudioContext();

    /** The underlying destination for the context @protected @version 0 */
    mn.sound.speakers = mn.sound.__context__.destination;

    /** Schedule an event from this time based on the time that the audio
      context has. @protected @version 0 */
    mn.sound.schedule = function(secs) {
      return mn.sound.__context__.currentTime + secs;
    }
  } catch(e) {
    if(mn.__packagesLoaded__["mn.devtools.console"]) {
      mn.devtools.error("The Web Audio API is not supported in your browser.");
    } else {
      console.error("The Web Audio API is not supported in your browser.");
      alert("The Web Audio API is not supported in your browser.");
    }
  }

  window.mn = mn;
  console.debug("mn.sound.handler MiniNova Package Installed");
})(window.mn);