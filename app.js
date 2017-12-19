/**
 * Created by phu on 10/19/17.
 */

var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");

var config = require("./configs/index");
var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");
var helper = require("./configs/helper");

var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/publics"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.set("view engine", "ejs");

//db info
//console.log(config.getDbConnectionString());
mongoose.connect(config.getDbConnectionString());
setupController(app);
todoController(app);
helper();

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(port, function () {
    console.log("App listing on 127.0.0.1:" + port);
})
