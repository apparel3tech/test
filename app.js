const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// Middleware to set a cookie

// app.use((req, res, next) => {
//   res.cookie('username', 'JohnDoe', {
//     maxAge: 900000, // Expires after 15 minutes
//     // httpOnly: true
//     secure:true // Makes the cookie accessible only via HTTP(S) requests
//   });
//   next();
// });

// Route to send a response with cookies
app.post("/", (req, res) => {
  res.cookie("username", "JohnDoe", {
    httpOnly: true, //false when in local env
    secure: true,
    sameSite: "none",
    expires: new Date(Date.now() + 3600000),
  });
  res.send({ a: "Cookies sent!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
