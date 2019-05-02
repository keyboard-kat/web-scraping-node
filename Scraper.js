const express = require("express");
const router = express.Router();
const rp = require("request-promise");
const $ = require("cheerio");
const parser = require("./Parser");

router.get("/main", () => {
  const url = "http://www.cormacferguson.com/";
  try {
    rp(url).then(function(html) {
      const content = [];
      for (let i = 0; i < 5; i++) {
        content.push($("div.storycontent p", html)[i].lastChild.data);
      }
      console.log({ ...content });
      parser
        .parseMain({ ...content })
        .then(console.log("Parsed main content"))
        .catch(console.log("Error parsing main content"));
    });
  } catch {
    console.log("error getting home content");
  }
});

router.get("/bio", () => {
  const url = "http://www.cormacferguson.com/biography/";
  try {
    rp(url).then(function(html) {
      const content = [];
      for (let i = 0; i < 5; i++) {
        content.push($("div.storycontent p", html)[i].lastChild.data);
      }
      console.log({ ...content });
      parser
        .parseBio({ ...content })
        .then(console.log("Parsed bio content"))
        .then(console.log("Error parsing bio content"));
    });
  } catch {
    console.log("Error getting biography content");
  }
});

router.get("/books", () => {
  const url = "http://www.cormacferguson.com/books/";
  try {
    rp(url).then(function(html) {
      const content = [];
      for (let i = 0; i < 9; i++) {
        content.push($("div.storycontent p", html)[i].lastChild.data);
      }
      console.log({ ...content });
      parser
        .parseBooks({ ...content })
        .then(console.log("Parsed book content"))
        .catch(console.log("Error parsing book content"));
    });
  } catch {
    console.log("Error getting getting content for books");
  }
});

router.get("/reviews", () => {
  const url = "http://www.cormacferguson.com/testimonials";
  try {
    rp(url).then(function(html) {
      const content = [];
      for (let i = 0; i < 35; i++) {
        content.push($("div.storycontent p", html)[i].lastChild.data);
      }
      console.log({ ...content });
      parser
        .parseReviews({ ...content })
        .then(console.log("Parsed reviews"))
        .catch(console.log("Error parsing reviews"));
    });
  } catch {
    console.log("Error getting content for reviews");
  }
});

module.exports = router;
