const mysql = require("mysql");
const database = mysql.createConnection({
  host: "",
  user: "root",
  password: "",
  database: "mysql",
});
database.connect((err) => {
  if (err) throw err;
  console.log("Connected");
  database.query("");
});

function search(req, res, next) {
  // User's Search Term
  var searchTerm = req.query.search;
  // User's Search Category
  var category = req.query.category;

  let query = "SELECT * FROM Posting";
  if (searchTerm != "" && category != "") {
    query =
      `SELECT * FROM Posting WHERE Category = '` +
      category +
      `' AND (Name LIKE '%` +
      searchTerm +
      `%' OR Comment LIKE '%` +
      searchTerm +
      `%')`;
  } else if (searchTerm != "" && category == "") {
    query =
      `SELECT * FROM Posting WHERE NAME LIKE '%` +
      searchTerm +
      `%' OR Comment LIKE '%` +
      searchTerm +
      `%'`;
  } else if (searchTerm == "" && category != "") {
    query = `SELECT * FROM Posting WHERE Category = '` + category + `'`;
  }
  database.query(query, (err, result) => {
    if (err) {
      req.searchResult = "";
      req.searchTerm = "";
      req.category = "";
      next();
    }

    req.searchResult = result;
    req.searchTerm = searchTerm;
    req.category = "";

    next();
  });
}

app.get("/example", search, (req, res) => {
  // Will pass the results onto the renderer
  var searchResult = req.searchResult;
  res.render("pages/example", {
    results: searchResult.length,
    searchTerm: req.searchTerm,
    searchResult: searchResult,
    category: req.category,
  });
});
