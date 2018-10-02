module.exports = () => {
  const { range } = require("rxjs");
  range(1,3).subscribe(x => console.log(x));
}
