const main = require("../src/exercise-stream");
const path = require("path");
const fs = require("fs");

const FILE_NAME = "test6.txt";
function readStream() {
  let file = "";
  let stream = fs.createReadStream(path.resolve(__dirname, FILE_NAME));
  return new Promise((resolve, reject) => {
    stream.on("error", err => reject(err));
    stream.on("data", chunk => { file += chunk });
    stream.on("end", () => resolve(file));
  });
}

test("test 6.1", async () => {
  expect.assertions(1);
  const chunks = ["start", "text", "end"];
  main(path.resolve(__dirname, FILE_NAME), chunks);

  let file = await readStream();
  fs.unlink(path.resolve(__dirname, FILE_NAME), function (err) {
    if (err && err.code !== 'ENOENT') {
      throw err;
    }
  });
  expect(file).toEqual(chunks.join(""));
});
