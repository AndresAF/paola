const express = require("express")
const app = express();
const morgan = require("morgan")
const exphbs = require("express-handlebars");
const path = require("path");
const flash = require("connect-flash")
const session = require("express-session")
const MySQLStore = require("express-mysql-session");
const {database}  = require("./keys")
const passport = require("passport")




app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), (req,res) => {
    console.log("http://localhost:3000")
})

//sets

app.set("views", path.join(__dirname, "views"))
app.engine(".hbs", exphbs.engine ({
defaultLayout: "main",
layoutsDir: path.join(app.get("views"), "layouts"),
partialsDir: path.join(app.get("views"), "partials"),
extname: "hbs",
helpers: require("./lib/handlebars.js")
}))
app.set("view engine", ".hbs")
app.use(express.static(path.join(__dirname, "public")))

//middlewares


app.use(morgan("dev"))
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(require("./routes/"))
app.use(require("./routes/ventas"))
