require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
var bodyParser = require('body-parser')
app.set("view engine", "ejs");
const User = require("./models/User");


const loungeflyControler = require("./controllers/loungefly");
const loungefly_styleController = require("./controllers/loungerfly_style");
const loungeflt_crossbodystyleController= require("./controllers/loungefly_crossbodystyle")
const userController = require("./controllers/user");


app.get("logout", async (req,res)=> {
    req.session.destroy();
    global.user = false;
    res.redirect('/');
})

app.get("/Loungefly_list", loungeflyControler.list);
app.get("/Loungefly_List/delete/:id", loungeflyControler.delete)
app.get("/Loungefly_List/update/:id", loungeflyControler.edit);
app.post("/Loungefly_List/update/:id", loungeflyControler.update);

app.get("/Loungefly_Update/:id", loungeflyControler.edit);

app.get("/loungefly_style", loungeflyControler.list);
app.get("/style_choice",loungefly_styleController.style);

app.get("/loungefly_crossbodystyle", loungeflyControler.list);
app.get("/crossbodystyle_choice",loungefly_styleController.style);


const mongoose = require("mongoose");
 const { WEB_PORT, MONGODB_URI } = process.env;
 
 mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
 
 mongoose.connection.on("error", (err) => {
   console.error(err);
   console.log("MongoDB connection error. Please make sure MongoDB is running.");
   process.exit();
 });


 app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req, res) => {
    res.render("index");
  });
  
  app.get("/Loungefly_New", (req, res) => {
    res.render("Loungefly_New");
  });
  
  app.post("/Loungefly_New", loungeflyController.create);
  
  app.get("/Create_User", (req, res) => {
    res.render('Create_User', { errors: {} })
  });
  
  app.post("/join", userController.create);
  
  app.get("/Login_User", (req, res) => {
    res.render('Login_User', { errors: {} })
  });
  app.post("/Login", userController.login);
  
  
  
  app.listen(WEB_PORT, () => {
    console.log(`Example app listening at http://localhost:${WEB_PORT}`);
  });