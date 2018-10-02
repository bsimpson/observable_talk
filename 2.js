module.exports = () => {
  const { range } = require("rxjs");
  const { map, filter } = require("rxjs/operators");

  range(1,10).pipe(
    map(x => x * 2),
    //filter(x => x > 10)
  ).subscribe(x => console.log(x))
}
