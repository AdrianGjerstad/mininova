function start() {
  mn.console.log(new mn.math.Vector2(1, 2));
}

mn.loadPackage("mn.math.basic", {path: "../../src/"});
mn.loadPackage("mn.console.logger", {path: "../../src/"});