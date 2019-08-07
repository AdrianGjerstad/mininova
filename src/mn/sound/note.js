//
// note.js
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
   * The frequency at which to tune other notes.
   *
   * @const {number}
   *
   * @version 0
   */
  mn.sound.a4frequency = 440; // Hz

  /**
   * A note class to get frequencies from note names.
   *
   * @constructor
   * @param {string} name A note name for the note to take the place of.
   * @throws {Error} If the note didn't have a valid name.
   * @typedef {object} mn.sound.Note
   *
   * @version 0
   * @author Adrian Gjerstad <github@AdrianGjerstad>
   */
  mn.sound.Note = function(name) {
    let part, octave;
    if(name.length === 2) {
      part = name[0];
      octave = parseInt(name[1]);
    } else if(name.length === 3) {
      part = name[0] + name[1];
      octave = parseInt(name[2]);
    } else {
      throw new Error("Note was given a valid name: " + name);
    }

    part = {
      "C": 0,
      "C#": 1,
      "Db": 1,
      "D": 2,
      "D#": 3,
      "Eb": 3,
      "E": 4,
      "F": 5,
      "F#": 6,
      "Gb": 6,
      "G": 7,
      "G#": 8,
      "Ab": 8,
      "A": 9,
      "A#": 10,
      "Bb": 10,
      "B": 11,
    }[part];

    part = parseInt(part);

    const semitone = octave*12+part;
    const a4semitone = 57;

    let semiOffset = semitone-a4semitone;

    let freq = mn.sound.a4frequency*Math.pow(Math.pow(2, 1/12), semiOffset);

    this.frequency = parseFloat(freq.toFixed(5));
    this.name = name;

    // So C3 is 130.81278Hz @A4:440Hz.
  }

  window.mn = mn;
  console.debug("mn.sound.note MiniNova Package Installed");
})(window.mn);