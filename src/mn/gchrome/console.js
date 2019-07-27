(async function(mn) {
  if(typeof mn === "undefined") {
    mn = {};
    console.warn("You did not use mininova.js for loading!");
  }

  mn.foo = function() {
    console.log("it works!");
  }

  window.MiniNova = mn;
  console.log("mn.gchrome.console MiniNova Package Installed");
})(window.MiniNova);