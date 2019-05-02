const express = require("express"),
  app = express();

bodyParser = require("body-parser");
app.use("/api/scraper", require("./scraper/Scraper"));
app.listen(8080, function() {
  console.log("on port 8080");
});
