module.exports = () => {
  const { timer, merge } = require("rxjs");
  const { pluck, bufferCount, scan, map } = require("rxjs/operators");

  merge(
    timer(0, 100).pipe(
      bufferCount(2), // every two
      pluck(1), // odd
      bufferCount(2),
      pluck(1), // every other odd (3, 7, 11, etc)
      map(val => -(4/val)),
    )
    ,
    timer(0, 100).pipe(
      bufferCount(2), // every two
      pluck(1), // odd
      bufferCount(2),
      pluck(0), // every other odd (1, 5, 9, etc)
      map(val => (4/val)),
    )
  ).pipe(
    scan((acc, curr) => acc + curr, 0)
  ).subscribe(console.log)
}
