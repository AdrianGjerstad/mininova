//
// stats.js
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

  mn.math.Dataset = function(array, yarray) {
    this.data_x = array;
    this.data_y = yarray||new Array(array.length);
    if(yarray === undefined) {
      for(let i = 0; i < this.data_y.length; ++i) {
        this.data_y[i] = 0;
      }
    }
    this.two_d = yarray!==undefined;
    this.length = Math.min(this.data_x.length, this.data_y.length);
    if(this.data_x.length !== this.length) {
      do {this.data_x.pop();} while(this.data_x.length !== this.length);
    } else if(this.data_y.length !== this.length) {
      do {this.data_y.pop();} while(this.data_y.length !== this.length);
    }
  }

  mn.math.mean = function(v) {
    let x_sum = 0;
    let y_sum;
    for(let i = 0; i < v.data_x.length; ++i) {
      x_sum += v.data_x[i];
    }

    if(v.two_d) {
      y_sum = 0;
      for(let i = 0; i < v.data_y.length; ++i) {
        y_sum += v.data_y[i];
      }
    }

    if(y_sum === undefined) return [x_sum/v.length];
    else return [x_sum/v.length, y_sum/v.length];
  }

  mn.math.median = function(v) {
    let tmp = v.data_x;
    v.data_x.sort(function(a, b){return a - b});

    let xs = v.data_x;

    v.data_x = tmp;

    let ys = [];
    if(v.two_d) {
      tmp = v.data_y;
      v.data_y.sort(function(a, b){return a - b});

      ys = v.data_y;

      v.data_y = tmp;
    }

    let x_median_location = xs.length/2;
    let x_median = 0;
    if(x_median_location%1 === 0) x_median =
        (xs[(xs.length/2)-1]+xs[xs.length/2])/2;
    else x_median = xs[Math.floor(x_median_location)];

    let y_median_location;
    let y_median;
    if(v.two_d) {
      y_median_location = ys.length/2;
      y_median = 0;
      if(y_median_location%1 === 0) y_median =
          (ys[(ys.length/2)-1]+ys[ys.length/2])/2;
      else y_median = ys[Math.floor(y_median_location)];
    }

    if(y_median===undefined) return [x_median];
    else return [x_median, y_median];
  }

  mn.math.mode = function(v) {
    let tmp = v.data_x;
    v.data_x.sort(function(a, b){return a - b});

    let xs = v.data_x;

    v.data_x = tmp;

    let ys = [];
    if(v.two_d) {
      tmp = v.data_y;
      v.data_y.sort(function(a, b){return a - b});

      ys = v.data_y;

      v.data_y = tmp;
    }

    let px = NaN;
    let scores = [];
    let numbers = [];
    for(let i = 0; i < xs.length; ++i) {
      if(px !== xs[i]) {
        // New number
        scores.push(1);
        numbers.push(xs[i]);

        px = xs[i];
      } else {
        // Old number
        ++scores[scores.length-1];
      }
    }

    let maxx = Math.max.apply(undefined, scores);

    let modex = [];
    for(let i = 0; i < numbers.length; ++i) {
      if(maxx === scores[i]) modex.push(numbers[i]);
    }

    if(modex.length === 1) modex = modex[0];

    let py = NaN;
    scores = [];
    numbers = [];
    for(let i = 0; i < ys.length; ++i) {
      if(py !== ys[i]) {
        // New number
        scores.push(1);
        numbers.push(ys[i]);

        py = ys[i];
      } else {
        // Old number
        ++scores[scores.length-1];
      }
    }

    let maxy = Math.max.apply(undefined, scores);

    let modey = [];
    for(let i = 0; i < numbers.length; ++i) {
      if(maxy === scores[i]) modey.push(numbers[i]);
    }

    if(modey.length === 1) modey = modey[0];

    if(modey.length === 0) return [modex];
    else return [modex, modey];
  }

  mn.math.range = function(v) {
    let xs_min = Math.min.apply(undefined, v.data_x);
    let xs_max = Math.max.apply(undefined, v.data_x);
    let xs_dlt = xs_max-xs_min;

    let ys_min, ys_max, ys_dlt;
    if(v.two_d) {
      ys_min = Math.min.apply(undefined, v.data_y);
      ys_max = Math.max.apply(undefined, v.data_y);
      ys_dlt = ys_max-ys_min;
    }

    if(ys_dlt===undefined) return [xs_dlt];
    else return [xs_dlt, ys_dlt];
  }

  mn.math.max = function(v) {
    let x = Math.max.apply(undefined, v.data_x);
    let y;

    if(v.two_d) {
      y = Math.max.apply(undefined, v.data_y);
    }

    if(y===undefined) return [x];
    else return [x, y];
  }

  mn.math.min = function(v) {
    let x = Math.min.apply(undefined, v.data_x);
    let y;

    if(v.two_d) {
      y = Math.min.apply(undefined, v.data_y);
    }

    if(y===undefined) return [x];
    else return [x, y];
  }

  mn.math.sort = function(v) {
    let tmp = v.data_x;
    v.data_x.sort(function(a, b){return a - b});

    let xs = v.data_x;

    v.data_x = tmp;

    let ys = [];
    if(v.two_d) {
      tmp = v.data_y;
      v.data_y.sort(function(a, b){return a - b});

      ys = v.data_y;

      v.data_y = tmp;
    }

    if(!v.two_d) return new mn.math.Dataset(xs);
    else return new mn.math.Dataset(xs, ys);
  }

  mn.math.sum = function(v) {
    let x_sum = 0;
    let y_sum;
    for(let i = 0; i < v.data_x.length; ++i) {
      x_sum += v.data_x[i];
    }

    if(v.two_d) {
      y_sum = 0;
      for(let i = 0; i < v.data_y.length; ++i) {
        y_sum += v.data_y[i];
      }
    }

    if(y_sum===undefined) return [x_sum];
    else return [x_sum, y_sum];
  }

  mn.math.prod = function(v) {
    let x_sum = 1;
    let y_sum;
    for(let i = 0; i < v.data_x.length; ++i) {
      x_sum *= v.data_x[i];
    }

    if(v.two_d) {
      y_sum = 1;
      for(let i = 0; i < v.data_y.length; ++i) {
        y_sum *= v.data_y[i];
      }
    }

    if(y_sum===undefined) return [x_sum];
    else return [x_sum, y_sum];
  }

  mn.math.variance = function(v) {
    let xvar = 1/(v.length-1);
    let yvar, y_sum, y_mean;
    let x_sum = 0;
    let x_mean = mn.math.mean(v)[0];
    for(let i = 0; i < v.data_x.length; ++i) {
      x_sum += (v.data_x[i]-x_mean)*(v.data_x[i]-x_mean);
    }

    xvar *= x_sum;

    if(v.two_d) {
      yvar = 1/(v.length-1);
      y_sum = 0;
      y_mean = mn.math.mean(v)[1];
      for(let i = 0; i < v.data_y.length; ++i) {
        x_sum += (v.data_y[i]-y_mean)*(v.data_y[i]-y_mean);
      }

      yvar *= y_sum;
    }

    if(yvar===undefined) return [xvar];
    else return [xvar, yvar];
  }

  mn.math.popvar = function(v) {
    let xvar = 1/(v.length);
    let yvar, y_sum, y_mean;
    let x_sum = 0;
    let x_mean = mn.math.mean(v)[0];
    for(let i = 0; i < v.data_x.length; ++i) {
      x_sum += (v.data_x[i]-x_mean)*(v.data_x[i]-x_mean);
    }

    xvar *= x_sum;

    if(v.two_d) {
      yvar = 1/(v.length);
      y_sum = 0;
      y_mean = mn.math.mean(v)[1];
      for(let i = 0; i < v.data_y.length; ++i) {
        x_sum += (v.data_y[i]-y_mean)*(v.data_y[i]-y_mean);
      }

      yvar *= y_sum;
    }

    if(yvar===undefined) return [xvar];
    else return [xvar, yvar];
  }

  mn.math.deviation = function(v) {
    let variance = mn.math.variance(v);
    variance[0] = Math.sqrt(variance[0]);

    if(variance.length !== 1) {
      variance[1] = Math.sqrt(variance[1]);
    }

    return variance;
  }

  mn.math.popdev = function(v) {
    let variance = mn.math.popvar(v);
    variance[0] = Math.sqrt(variance[0]);

    if(variance.length !== 1) {
      variance[1] = Math.sqrt(variance[1]);
    }

    return variance;
  }

  window.mn = mn;
  console.debug("mn.math.stats MiniNova Package Installed");
})(window.mn);