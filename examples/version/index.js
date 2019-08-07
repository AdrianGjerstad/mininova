function start() {
  let dataset = new mn.math.Dataset([59, 65, 61, 62, 53, 55, 60, 70, 64, 56, 58, 58, 62, 62, 68, 65, 56, 59, 68, 61, 67]);

  mn.devtools.log("MAX: " + mn.math.max(dataset)[0]);
  mn.devtools.log("MIN: " + mn.math.min(dataset)[0]);
  mn.devtools.log("SORT: " + mn.math.sort(dataset).data_x);
  mn.devtools.log("MEAN: " + mn.math.mean(dataset)[0]);
  mn.devtools.log("MEDIAN: " + mn.math.median(dataset)[0]);
  mn.devtools.log("MODE: " + mn.math.mode(dataset)[0]);
  mn.devtools.log("RANGE: " + mn.math.range(dataset)[0]);
  mn.devtools.log("SUM: " + mn.math.sum(dataset)[0]);
  mn.devtools.log("PROD: " + mn.math.prod(dataset)[0]);
  mn.devtools.log("VARIANCE: " + mn.math.variance(dataset)[0]);
  mn.devtools.log("DEVIATION: " + mn.math.deviation(dataset)[0]);
  mn.devtools.log("POPDEV: " + mn.math.popdev(dataset)[0]);
}

mn.loadPackage("mn.devtools.console", {path: "../../src/"});
mn.loadPackage("mn.math.stats", {path: "../../src/"});