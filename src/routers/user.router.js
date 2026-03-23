import express from "express"

const router = express.Router()


router.get("/get-user", (req, res) => {
    res.send("all users")
})

export default router