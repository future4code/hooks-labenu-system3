import { app } from "./app"


app.get("/teste", async (req, res) => {
    res.send("robertinho")
})