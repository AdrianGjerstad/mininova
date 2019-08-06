function start() {
  let saver = new mn.storeddata.Saver("test", true);

  if(saver.exists("foo")) {
    mn.devtools.verbose("test.foo is set to " + saver.get("foo"));
  } else {
    mn.devtools.verbose("test.foo did not exist. Setting to \"bar\".");
    saver.set("foo", "bar");
    mn.devtools.verbose("test.foo created as \"bar\".");
  }
}

mn.loadPackage("mn.devtools.console", {path: "../../src/"});
mn.loadPackage("mn.storeddata.save", {path: "../../src/"});