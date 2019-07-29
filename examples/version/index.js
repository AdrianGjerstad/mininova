function start() {
  mn.devtools.log("foo")
  mn.devtools.warn("foo")
  mn.devtools.error("foo")
  mn.devtools.verbose("foo")
  mn.devtools.verbose("foo")
  mn.devtools.verbose("foo")
  throw new Error("foo");
}

mn.loadPackage("mn.devtools.console", {path: "../../src/"});