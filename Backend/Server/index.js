const express=require("express")
const userRoutes=require("./Routes/user.route")
const cors=require("cors")
const app=express()
const PORT=4000;

app.use(express.json());
app.use(cors({
    cors:"*"
  }))
  require("dotenv").config();
  
  require("./models/db")();


app.use("/api/user", userRoutes);





app.use((req, res, next) => {
    console.log("method: %s url: %s", req.method, req.url);
    next();
  });
  app.get("/", (req, res) => {
    res.send("Hello People");
  });
  app.listen(PORT, () => {
    console.log(`Server is up running on http://localhost:${PORT}`);
  });