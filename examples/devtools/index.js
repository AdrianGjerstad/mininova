function start() {
  mn.devtools.log("This is a log message");
  mn.devtools.warn("This is a warning message");
  mn.devtools.error("This is a static error message");
  mn.devtools.verbose("This is a verbose error message");

  throw new Error("This is an uncaught error message");
}

mn.loadPackage("mn.devtools.console", {path: "../../src/"});
