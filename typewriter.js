const sentence = "hello there from lighthouse labs";
let n = 0;
for (const char of sentence) {
  if (char) {
    n += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, n);
  } process.stdout.write("\n");
}