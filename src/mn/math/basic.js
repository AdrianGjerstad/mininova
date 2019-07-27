(async function(mn) {
  if(typeof mn === "undefined") {
    mn = {};
    console.warn("You did not use mininova.js for loading!");
  }

  mn.math = (mn.math||{});

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
  console.log("mn.gchrome.console MiniNova Package Installed");
})(window.MiniNova);