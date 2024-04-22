const express = require("express");
const app = express();
const cors = require("cors");


app.use(( b,a,next)=>{console.log('Request') , next()})
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
// Route to send a response with cookies
app.post("/", (req, res) => {
  res.cookie("username", "JohnDoe", {
    httpOnly: true, //false when in local env
    // secure: true,
    // sameSite:"None",
    expires: new Date(Date.now() + 3600000),
  });
  res.send({ a: "Cookies sent!" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
