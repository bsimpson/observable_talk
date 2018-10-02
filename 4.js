module.exports = () => {
  const { range } = require("rxjs");
  const { scan, pluck } = require("rxjs/operators");

  // http://jsfiddle.net/KingMario/8pxbz849/
  range(1,8).pipe(
    // Default to [0, 1]
    // Return [1, 0+1]
    scan(acc => [acc[1], acc[0] + acc[1]], [0, 1]),
    pluck(0)
  ).subscribe(console.log);
}
