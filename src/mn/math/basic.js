//
// basic.js
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
   * The main mn.math namespace for data that is in mn.math.
   *
   * @type {object}
   *
   * @version 0
   */
  mn.math = (mn.math||{});

  /**
   * The math constant spelled with latin letters as pi.
   *
   * @const {number}
   *
   * @version 0
   * @see mn.math.TAU
   */
  mn.math.PI = Math.PI;

  /**
   * The math constant spelled with latin letters as tau.
   *
   * TAU = 2PI
   *
   * @const {number}
   *
   * @version 0
   * @see mn.math.PI
   */
  mn.math.TAU = Math.PI*2;

  /**
   * The constant to describe the measure of an angle as radians.
   *
   * @const {number}
   *
   * @version 0
   * @see mn.math.DEGREES
   * @see mn.math.GRADIANS
   * @see mn.math.UNIT_ANGLE
   */
  mn.math.RADIANS = Math.PI*2;

  /**
   * The constant to describe the measure of an angle as degrees.
   *
   * @const {number}
   *
   * @version 0
   * @see mn.math.RADIANS
   * @see mn.math.GRADIANS
   * @see mn.math.UNIT_ANGLE
   */
  mn.math.DEGREES = 360;

  /**
   * The constant to describe the measure of an angle as gradians.
   *
   * The gradians's full circle rotation is 400.
   *
   * @const {number}
   *
   * @version 0
   * @see mn.math.RADIANS
   * @see mn.math.DEGREES
   * @see mn.math.UNIT_ANGLE
   */
  mn.math.GRADIANS = 400;

  /**
   * The constant to describe the measure of an angle as a unit.
   *
   * The unit angle's full circle rotation is 1.
   *
   * @const {number}
   *
   * @version 0
   * @see mn.math.RADIANS
   * @see mn.math.DEGREES
   * @see mn.math.GRADIANS
   */
  mn.math.UNIT_ANGLE = 1;

  /**
   * Euler's constant e; the natural number.
   *
   * @const {number}
   *
   * @version 0
   * @see mn.math.ln
   */
  mn.math.E = Math.E;

  /**
   * The square root of 2
   *
   * @const {number}
   *
   * @version 0
   */
  mn.math.SQRT_2 = Math.sqrt(2);

  /**
   * Takes a base and an exponent, and puts them together for an exponential
   * value.
   *
   * mn.math.pow(2, 3) === 2**3
   *
   * @param {number} x The base of the exponential result
   * @param {number} y The exponent of the exponential result
   * @returns {number} The exponential result
   *
   * @version 0
   * @see mn.math.nrt
   */
  mn.math.pow = Math.pow;

  /**
   * Takes the square root of a value.
   *
   * @param {number} x The value to be turned to a square root
   * @returns {number} The square root result
   *
   * @version 0
   * @see mn.math.cbrt
   */
  mn.math.sqrt = Math.sqrt;

  /**
   * Takes the cube root of a value.
   *
   * @param {number} x The value to be turned to a cube root
   * @returns {number} The cube root result
   *
   * @version 0
   * @see mn.math.sqrt
   */
  mn.math.cbrt = function(x) {return Math.pow(x, 1/3);}

  /**
   * Takes the nth root of a value.
   *
   * mn.math.nrt(4, 3) === mn.math.pow(3, 0.25)
   *
   * @param {number} y The nth root designation (2 for sqrt, 3 for cbrt)
   * @param {number} x The value to be turned to an nth root
   * @returns {number} The cube root result
   *
   * @version 0
   * @see mn.math.pow
   */
  mn.math.nrt = function(y, x) {return Math.pow(x, 1/y);}

  /**
   * Creates the natural logarithm of any inputted number.
   *
   * e^x = y; y = ln(x)
   *
   * @param {number} x The number to be turned to a natural logarithm.
   * @returns {number} The resulting number from the logarithm
   *
   * @version 0
   *
   */
  mn.math.ln = Math.log;

  /**
   * Takes the log of a value to any base.
   *
   * ln(value)/ln(base) === log_base(value)
   *
   * @param {number} v The number to take the logarithm of.
   * @param {number} [base=10] The base of the logarithm.
   * @returns {number} The result of the logarithm.
   *
   * @version 0
   * @see mn.math.ln
   */
  mn.math.log = function(v, b) {
    b = (b||10);
    return Math.log(v)/Math.log(b);
  }

  /**
   * Takes the sine of a number
   *
   * @param {number} x The number to take the sine of.
   * @returns {number} The sine of the given number.
   *
   * @version 0
   * @see mn.math.cos
   * @see mn.math.tan
   */
  mn.math.sin = Math.sin;

  /**
   * Takes the cosine of a number
   *
   * @param {number} x The number to take the cosine of.
   * @returns {number} The cosine of the given number.
   *
   * @version 0
   * @see mn.math.sin
   * @see mn.math.tan
   */
  mn.math.cos = Math.cos;

  /**
   * Takes the tangent of a number
   *
   * @param {number} x The number to take the tangent of.
   * @returns {number} The tangent of the given number.
   *
   * @version 0
   * @see mn.math.sin
   * @see mn.math.cos
   */
  mn.math.tan = Math.tan;

  /**
   * Takes the inverted sine of a number
   *
   * @param {number} x The number to take the inverted sine of.
   * @returns {number} The inverted sine of the given number.
   *
   * @version 0
   * @see mn.math.acos
   * @see mn.math.atan
   */
  mn.math.asin = Math.asin;

  /**
   * Takes the inverted cosine of a number
   *
   * @param {number} x The number to take the inverted cosine of.
   * @returns {number} The inverted cosine of the given number.
   *
   * @version 0
   * @see mn.math.asin
   * @see mn.math.atan
   */
  mn.math.acos = Math.acos;

  /**
   * Takes the inverted tangent of a number
   *
   * @param {number} x The number to take the inverted tangent of.
   * @returns {number} The inverted tangent of the given number.
   *
   * @version 0
   * @see mn.math.asin
   * @see mn.math.acos
   */
  mn.math.atan = Math.atan;

  /**
   * Takes the hyperbolic sine of a number
   *
   * @param {number} x The number to take the hyperbolic sine of.
   * @returns {number} The inverted hyperbolic sine of the given number.
   *
   * @version 0
   * @see mn.math.cosh
   * @see mn.math.tanh
   */
  mn.math.sinh = Math.sinh;

  /**
   * Takes the hyperbolic cosine of a number
   *
   * @param {number} x The number to take the hyperbolic cosine of.
   * @returns {number} The inverted hyperbolic cosine of the given number.
   *
   * @version 0
   * @see mn.math.sinh
   * @see mn.math.tanh
   */
  mn.math.cosh = Math.cosh;

  /**
   * Takes the hyperbolic tangent of a number
   *
   * @param {number} x The number to take the hyperbolic tangent of.
   * @returns {number} The inverted hyperbolic tangent of the given number.
   *
   * @version 0
   * @see mn.math.sinh
   * @see mn.math.cosh
   */
  mn.math.tanh = Math.tanh;

  /**
   * Takes the hyperbolic inverse sine of a number
   *
   * @param {number} x The number to take the hyperbolic inverse sine of.
   * @returns {number} The inverted hyperbolic inverse sine of the given number.
   *
   * @version 0
   * @see mn.math.acosh
   * @see mn.math.atanh
   */
  mn.math.asinh = Math.asinh;

  /**
   * Takes the hyperbolic inverse cosine of a number
   *
   * @param {number} x The number to take the hyperbolic inverse cosine of.
   * @returns {number} The inverted hyperbolic inverse cosine of the given
   *                   number.
   *
   * @version 0
   * @see mn.math.asinh
   * @see mn.math.atanh
   */
  mn.math.acosh = Math.acosh;

  /**
   * Takes the hyperbolic inverse tangent of a number
   *
   * @param {number} x The number to take the hyperbolic inverse tangent of.
   * @returns {number} The inverted hyperbolic inverse tangent of the given
   *                   number.
   *
   * @version 0
   * @see mn.math.asinh
   * @see mn.math.acosh
   */
  mn.math.atanh = Math.atanh;

  /**
   * Takes the fractional part of a number away.
   *
   * Aka: floor
   *
   * @param {number} x The number to floor.
   * @returns {number} The floored number.
   *
   * @version 0
   * @see mn.math.ceil
   * @see mn.math.round
   */
  mn.math.floor = Math.floor;

  /**
   * Takes the fractional part of a number away and adds one.
   *
   * Aka: ceil
   *
   * @param {number} x The number to ceil.
   * @returns {number} The ceiled number.
   *
   * @version 0
   * @see mn.math.floor
   * @see mn.math.round
   */
  mn.math.ceil = Math.ceil;

  /**
   * Rounds the given number.
   *
   * @param {number} x The number to round.
   * @returns {number} The rounded number.
   *
   * @version 0
   * @see mn.math.floor
   * @see mn.math.ceil
   */
  mn.math.round = Math.round;

  /**
   * Returns the fractional part of a number
   *
   * @param {number} x The number to take the fractional part of
   * @returns {number} The fractional part
   *
   * @version 0
   * @see mn.math.whole
   */
  mn.math.frac = function(x){return x%1};

  /**
   * Returns the whole part of a number
   *
   * @param {number} x The number to take the whole part of
   * @returns {number} The whole part
   *
   * @version 0
   * @see mn.math.frac
   */
  mn.math.whole = Math.floor;

  /**
   * Returns the sign that was used in the given number.
   *
   * @param {number} x The number to take the sign of.
   * @returns {number} The number representation of the sign of the number.
   * @example
   * mn.math.sign(2.23) // 1
   * mn.math.sign(0.0001) // 1
   * mn.math.sign(0) // 0
   * mn.math.sign(-1.4593e-16) // -1
   *
   * @version 0
   */
  mn.math.sign = function(x) {
    return x < 0?-1:x===0?0:1;
  }

  /**
   * 2D Vector that holds an x and a y.
   *
   * @constructor
   * @param {number} [x=0] The first number to hold
   * @param {number} [y=0] The second number to hold
   * @typedef {Object} mn.math.Vector2
   *
   * @version 0
   * @see mn.math.Vector3
   */
  mn.math.Vector2 = function(x, y) {
    this.x = (x||0);
    this.y = (y||0);
  }

  /**
   * Returns a 3D version of this Vector.
   *
   * @param {number} [z=0] The z component for the new vector.
   * @returns {mn.math.Vector3} The new vector in 3D form.
   *
   * @version 0
   */
  mn.math.Vector2.prototype.toVector3 = function(z) {
    return new mn.math.Vector3(this.x, this.y, z);
  }

  /**
   * Returns the string equivalent of this vector
   *
   * @returns {string} The string representation of this vector.
   * @example
   * new mn.math.Vector2(3, 4).toString(); // "(3,4)"
   *
   * @version 0
   */
  mn.math.Vector2.prototype.toString = function() {
    return "(" + this.x + "," + this.y + ")";
  }

  /**
   * Sets the value of this vector to polar coordinates as if containing
   * cartesian coordinates.
   *
   * Chainable.
   *
   * @returns {mn.math.Vector2} This object
   * @example
   * new mn.math.Vector2(0, 2).toPolar().toString(); // "(2,1.57079633)"
   *
   * @version 0
   * @author Adrian Gjerstad <github@AdrianGjerstad>
   * @see mn.math.Vector2.prototype.toCartesian
   */
  mn.math.Vector2.prototype.toPolar = function() {
    let x = this.x, y = this.y;
    this.x = Math.sqrt(x*x+y*y);
    this.y = 0;
    if(x > 0 && y > 0) {
      this.y = Math.atan(y/x);
    } else if(x < 0 && y > 0) {
      this.y = Math.atan(y/-x) + Math.PI/2;
    } else if(x < 0 && y < 0) {
      this.y = Math.atan(y/x) + Math.PI;
    } else if(x > 0 && y < 0) {
      this.y = Math.atan(-y/x) + Math.PI*1.5;
    } else if(x === 0 && y > 0) {
      this.y = Math.PI/2;
    } else if(x < 0 && y === 0) {
      this.y = Math.PI;
    } else if(x === 0 && y < 0) {
      this.y = Math.PI*1.5;
    }

    return this;
  }

  /**
   * Sets the value of this vector to cartesian coordinates as if containing
   * polar coordinates.
   *
   * Chainable.
   *
   * @returns {mn.math.Vector2} This object
   * @example
   * new mn.math.Vector2(2, 1.57079633).toCartesian().toString(); // "(0,2)"
   *
   * @version 0
   * @author Adrian Gjerstad <github@AdrianGjerstad>
   * @see mn.math.Vector2.prototype.toPolar
   */
  mn.math.Vector2.prototype.toCartesian = function() {
    let r = this.x, theta = this.y;
    this.x = r*Math.cos(theta);
    this.y = r*Math.sin(theta);

    return this;
  }

  /**
   * Returns a new vector given a valid string.
   *
   * @param {string} string The string format of the vector.
   * @returns {mn.math.Vector2} The vector that came from the string.
   * @example
   * mn.math.Vector2.fromString("10 23"); // new mn.math.Vector2(10, 23)
   *
   * @version 0
   * @author Adrian Gjerstad <github@AdrianGjerstad>
   */
  mn.math.Vector2.fromString = function(string) {
    let match_res = string.match(/\d+/g);
    if(match_res) {
      if(match_res.length >= 2) {
        return new mn.math.Vector2(+match_res[0], +match_res[1]);
      }
    }
  }

  /**
   * 3D Vector that holds an x, y, and z.
   *
   * @constructor
   * @param {number} [x=0] The first number to hold
   * @param {number} [y=0] The second number to hold
   * @param {number} [z=0] The third number to hold
   * @typedef {Object} mn.math.Vector3
   *
   * @version 0
   * @see mn.math.Vector2
   */
  mn.math.Vector3 = function(x, y, z) {
    this.x = (x||0);
    this.y = (y||0);
    this.z = (z||0);
  }

  /**
   * Returns a 2D version of this Vector.
   *
   * This function drops the z component
   *
   * @returns {mn.math.Vector2} The new vector in 2D form.
   *
   * @version 0
   */
  mn.math.Vector3.prototype.toVector2 = function() {
    return new mn.math.Vector2(this.x, this.y);
  }

  /**
   * Returns the string equivalent of this vector
   *
   * @returns {string} The string representation of this vector.
   * @example
   * new mn.math.Vector3(3, 4, 5).toString(); // "(3,4,5)"
   *
   * @version 0
   */
  mn.math.Vector3.prototype.toString = function() {
    return "(" + this.x + "," + this.y + "," + this.z + ")";
  }

  /**
   * Returns a new vector given a valid string.
   *
   * @param {string} string The string format of the vector.
   * @returns {mn.math.Vector3} The vector that came from the string.
   * @example
   * mn.math.Vector3.fromString("10 23 45"); // new mn.math.Vector3(10, 23, 45)
   *
   * @version 0
   * @author Adrian Gjerstad <github@AdrianGjerstad>
   */
  mn.math.Vector3.fromString = function(string) {
    let match_res = string.match(/\d+/g);
    if(match_res) {
      if(match_res.length >= 3) {
        return new mn.math.Vector3(+match_res[0], +match_res[1], +match_res[2]);
      }
    }
  }

  window.mn = mn;
  console.debug("mn.math.basic MiniNova Package Installed");
})(window.mn);