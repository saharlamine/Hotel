const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 5000;
const Userouter = require("./Routes/userRoute");
const mongoose = require("mongoose");

const url ="mongodb+srv://saharla:sahar123@cluster0.hhtiogr.mongodb.net/hotels?retryWrites=true&w=majority"
mongoose.connect(url, {
  useNewUrlParser: true,
  //useFindAndModify: true,
  useUnifiedTopology: true,
  //useCreateIndex: true,
}).then((rst)=>console.log("db connected"))
.catch((e)=>console.log('err'));


app.use("/user", Userouter);
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

