function start() {
  let osc = new mn.util.Oscillator("square", 0.5, 1, 0);
  setInterval(function() {
    mn.devtools.log("Oscillator Output: " + osc.get());
  }, 1000/10);
}

mn.loadPackage("mn.devtools.console", {path: "../../src/"});
mn.loadPackage("mn.util.oscillator", {path: "../../src/"});