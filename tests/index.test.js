const fs = require("fs");

test('La página debe contener "Hola Mundo"', () => {
  const html = fs.readFileSync("./docs/index.html", "utf8");
  expect(html).toMatch(/Hola Mundo/);
});
