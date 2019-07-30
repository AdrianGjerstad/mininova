function start() {
  mn.devtools.verbose(mn.sound.speakers.constructor.name);

  let osc = new mn.sound.Oscillator(new mn.sound.Note("C4"), "sawtooth");
  let gain = new mn.sound.GainFX(4);
  let pan = new mn.sound.PanFX(mn.sound.PAN.LEFT);
  osc.appendFilter(gain);
  osc.appendFilter(pan);
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