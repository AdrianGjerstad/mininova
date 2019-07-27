(async function(mn) {
  if(typeof mn === "undefined") {
    mn = {};
  }

  mn.__VERSION__ = {};

  mn.__VERSION__.CODE = 0;
  mn.__VERSION__.MAJOR = 0;
  mn.__VERSION__.MINOR = 1;
  mn.__VERSION__.PATCH = 0;

  mn.__VERSION__.ELEMENT = (function(code) {
    return ["pre-Hydrogen", "Hydrogen", "Helium", "Lithium", "Beryllium",
        "Boron", "Carbon", "Nitrogen", "Oxygen", "Flourine", "Neon", "Sodium",
        "Magnesium", "Aluminium", "Silicon", "Phosphorus"][code];
  })(mn.__VERSION__.MAJOR);

  mn.__VERSION__.NAME = mn.__VERSION__.MAJOR + "." +
      mn.__VERSION__.MINOR + "." +
      mn.__VERSION__.PATCH + " (" + mn.__VERSION__.ELEMENT + ")";

  mn.__packagesLoading__ = 0;
  mn.loadPackage = function(package) {
    mn.__packagesLoading__++;

    let script = document.createElement("script");
    script.onload = function() {mn.__packagesLoading__--;
      if(mn.__packagesLoading__ === 0) {
        mn.start();
      }
    };
    script.src = "lib/mininova/" + package.replace(/\./g, "/") + ".js";

    document.head.appendChild(script);
  }

  mn.start = function() {
    if(typeof window.start === "function") {
      window.start.call(mn);
    }
  }

  window.MiniNova = mn;
  console.log("MININOVA BOOTED");
  console.info("MiniNova Version " + mn.__VERSION__.NAME);

  console.info("If you wish, please use `MiniNova.loadPackage(\"<package>\")`"+
      "to load MiniNova packages into your project.");
})(window.MiniNova);