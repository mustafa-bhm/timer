let delay = process.argv.splice(2).map((x) => x * 1000);

if (delay.lenght !== 0) {
  for (let i = 0; i < delay.length; i++) {
    if (delay[i] > 0 && delay[i] !== NaN) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, delay[i]);
    }
  }
}
