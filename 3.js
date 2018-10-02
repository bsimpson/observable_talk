module.exports = () => {
  const { interval, merge } = require("rxjs");
  const { map } = require("rxjs/operators");
  
  const a$ = interval(500).pipe(map(i => `A${i}`));
  const b$ = interval(1000).pipe(map(i => `B${i}`));
  
  merge(a$, b$).subscribe(x => console.log(x));
}
