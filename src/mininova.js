(function(mn) {
  if(typeof mn === "undefined") {
    mn = {};
  }

  mn.__VERSION__.CODE = 0;
  mn.__VERSION__ = {};
  mn.__VERSION__.MAJOR = 0;
  mn.__VERSION__.MINOR = 1;
  mn.__VERSION__.PATCH = 0;

  mn.__VERSION__.ELEMENT = (function(code) {
    return ["pre-Hydrogen", "Hydrogen", "Helium", "Lithium", "Beryllium",
        "Boron", "Carbon", "Nitrogen", "Oxygen", "Flourine", "Neon", "Sodium",
        "Magnesium", "Aluminium", "Silicon", "Phosphorus"][code];
  })(mn.__VERSION__.MAJOR);

  mn.__VERSION__.NAME = mn.__VERSION__.MAJOR + "." +
      mn.__VERSION__.MINOR + "."
      mn.__VERSION__.PATCH + " (" + mn.__VERSION__.ELEMENT + ")";

  window.MiniNova = mn;
  console.log("mininova.js Loaded");
})(window.MiniNova);