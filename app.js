import dotenv from "dotenv";
dotenv.config()
import express from "express";
import userRouter from "./src/routers/user.router.js"
const PORT = process.env.PORT || 3001


const app = express();

app.get("/", (req, res) => {
    res.send("Hello from the ci cd")
})


app.use("/user/api/v1", userRouter)




app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}/`)
})