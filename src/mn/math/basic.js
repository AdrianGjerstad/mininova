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

  mn.math = (mn.math||{});

  mn.math.PI = Math.PI;
  mn.math.TAU = Math.PI*2;
  mn.math.RADIANS = Math.PI*2;
  mn.math.DEGREES = 360;
  mn.math.GRADIANS = 400;
  mn.math.UNIT_ANGLE = 1;

  mn.math.E = Math.E;
  mn.math.SQRT_2 = Math.sqrt(2);

  mn.math.pow = Math.pow;
  mn.math.sqrt = Math.sqrt;
  mn.math.cbrt = function(x) {return Math.pow(x, 1/3);}
  mn.math.nrt = function(y, x) {return Math.pow(x, 1/y);}

  mn.math.ln = Math.log;
  mn.math.log = function(v, b) {
    b = (b||10);
    return Math.log(v)/Math.log(b);
  }

  mn.math.sin = Math.sin;
  mn.math.cos = Math.cos;
  mn.math.tan = Math.tan;
  mn.math.asin = Math.asin;
  mn.math.acos = Math.acos;
  mn.math.atan = Math.atan;
  mn.math.sinh = Math.sinh;
  mn.math.cosh = Math.cosh;
  mn.math.tanh = Math.tanh;
  mn.math.asinh = Math.asinh;
  mn.math.acosh = Math.acosh;
  mn.math.atanh = Math.atanh;

  mn.math.floor = Math.floor;
  mn.math.ceil = Math.ceil;
  mn.math.round = Math.round;
  mn.math.frac = function(x){return x%1};
  mn.math.whole = Math.floor;
  mn.math.sign = function(x) {
    return x < 0?-1:x===0?0:1;
  }

  mn.math.Vector2 = function(x, y) {
    this.x = (x||0);
    this.y = (y||0);
  }

  mn.math.Vector2.prototype.toVector3 = function(z) {
    return new mn.math.Vector3(this.x, this.y, z);
  }

  mn.math.Vector2.prototype.toString = function() {
    return "(" + this.x + "," + this.y + ")";
  }

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
  }

  mn.math.Vector2.prototype.toCartesian = function() {
    let r = this.x, theta = this.y;
    this.x = r*Math.cos(theta);
    this.y = r*Math.sin(theta);
  }

  mn.math.Vector2.fromString = function(string) {
    let match_res = string.match(/\d+/g);
    if(match_res) {
      if(match_res.length >= 2) {
        return new mn.math.Vector2(+match_res[0], +match_res[1]);
      }
    }
  }

  mn.math.Vector3 = function(x, y, z) {
    this.x = (x||0);
    this.y = (y||0);
    this.z = (z||0);
  }

  mn.math.Vector3.prototype.toVector2 = function() {
    return new mn.math.Vector2(this.x, this.y);
  }

  mn.math.Vector3.prototype.toString = function() {
    return "(" + this.x + "," + this.y + "," + this.z + ")";
  }

  mn.math.Vector3.fromString = function(string) {
    let match_res = string.match(/\d+/g);
    if(match_res) {
      if(match_res.length >= 3) {
        return new mn.math.Vector3(+match_res[0], +match_res[1], +match_res[2]);
      }
    }
  }

  window.MiniNova = mn;
  console.log("mn.math.basic MiniNova Package Installed");
})(window.MiniNova);