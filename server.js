const express = require("express");
const session = require("express-session");
const path = require("path");
const mustache = require("mustache-express")
const morgan = require('morgan');
const bodyParser = require("bodyParser");
const expressValidator = require("expressValidator")
const routes = require("./routes/index");
const app = express();

app.engine("mustache", mustacheExpress());
app.set("views",path.join(__dirname,".views"));
app.set("view engine", "mustache");
app.set("layout", "layout");

app.use(express.static(path.join(__dirname, "./public")))
app.use(bodyParser.json());
app.use(bodyParser.urlEncoded({extended: false})):
app.use(expressValidator());
app.use(morgan('dev'));
app.use(session({
  secret:"string",
  resave: false,
  saveUninitialized: false
}))

app.use(routes);

app.listen(3000, function(req, res){
  console.log("you made it!");
})
