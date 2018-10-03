module.exports = () => {
  const { from } = require("rxjs");
  const { map } = require("rxjs/operators");

  from([
    '{"1": 1, "2": 2}',
    '{"1: 1}', // Bad JSON
    '{"1": 1}',
  ]).pipe(
    map(JSON.parse),
  ).subscribe(
    (json) => console.log("Yay"),
    (err) => console.error("Oh no!"),
 )

  console.log('------------');

  from([
    '{"1": 1, "2": 2}',
    '{"1": 1}' // Good JSON
  ]).pipe(
    map(JSON.parse)
  ).subscribe(
    (json) => console.log("Yay"),
    (err) => console.error("Oh no!"),
  )
}
