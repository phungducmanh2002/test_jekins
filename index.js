const e = require("express");

const app = e();

app.use((req, res) => {
  res.end("oke lala");
});

app.listen(300, () => {
  console.log("server started in port: 3000");
});
