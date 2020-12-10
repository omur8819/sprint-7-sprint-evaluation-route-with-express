const express = require("express");
const path = require("path");
const app = express();

const port = process.env.port || 5001;
const MainPage = require("./routes/MainPage");
const LoginPage = require("./routes/LoginPage");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", MainPage);
app.use("/login", LoginPage);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
