const { fromEvent, timer } = require("rxjs");
const { scan, debounce } = require("rxjs/operators");

const button = document.querySelector("button");

fromEvent(button, "click").pipe(
  debounce(() => timer(1000)),
  scan(count => count + 1, 0),
).subscribe(count => {
  console.log(`Clicked ${count} times`);
});
