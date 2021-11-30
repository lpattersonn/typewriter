const sentence = "hello there from lighthouse labs";
let newNum = 0;
for (let i = 0; i < sentence.length; i++) {
  newNum += 50;
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, newNum);
}   setTimeout(() => {
  process.stdout.write("\n");
}, sentence.length * 50);
