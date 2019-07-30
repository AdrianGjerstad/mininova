function start() {
  mn.devtools.verbose(mn.sound.speakers.constructor.name);

  let osc = new mn.sound.Oscillator(new mn.sound.Note("C4"), "sine");
  let gain = new mn.sound.GainFX(4);
  let delay = new mn.sound.DelayFX(5.0);
  osc.appendFilter(gain);
  osc.appendFilter(delay);
  window.onclick = function() {
    osc.start();
    osc.rampFrequency(new mn.sound.Note("C5").frequency, 5);
    osc.stop(5);
    setTimeout(function() {
      osc.setFrequency(new mn.sound.Note("C4").frequency);
    }, 5000);
  }
}

mn.loadPackage("mn.devtools.console", {path: "../../src/"});
mn.loadPackage("mn.sound.handler", {path: "../../src/"});
mn.loadPackage("mn.sound.note", {path: "../../src/"});
mn.loadPackage("mn.sound.oscillator", {path: "../../src/"});
mn.loadPackage("mn.sound.fx.gain", {path: "../../src/"});
mn.loadPackage("mn.sound.fx.pan", {path: "../../src/"});
mn.loadPackage("mn.sound.fx.delay", {path: "../../src/"});