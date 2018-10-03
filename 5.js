module.exports = () => {
  const { timer } = require("rxjs");
  const { bufferCount, scan, filter } = require("rxjs/operators");

  // Gregory-Leibniz series
  timer(0, 50).pipe(
    filter(i => i % 2 != 0), // odd
    bufferCount(2), // pairs
    scan((acc, pair) => acc + (4/pair[0]) - (4/pair[1]), 0)
  ).subscribe(console.log);
}
