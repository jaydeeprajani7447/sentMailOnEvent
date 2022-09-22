const { application } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Authroute = require("./router/authroute");
const PORT = 3000;

app.use(express.json());
app.use('/api',Authroute);

//mongodb connection
mongoose.connect("mongodb://localhost:27017/email");
const db = mongoose.connection;
db.on("error",(error)=> {
  console.log(error)
});
db.once("open",()=> {
  console.log("Database Connection established successfully")
});

//HTML response
app.set('view engine', 'ejs');
app.get('/test', function(req, res){
  res.render('test');
});
// app.get('/test',function(req,res) {
//     res.sendFile('views/test.html',{"root": __dirname});
//     });

//



app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
