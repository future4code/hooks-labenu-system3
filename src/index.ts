import { app } from "./app"
import { getClasses } from "./endpoints/class/getClass"
import { createClasses } from "./endpoints/class/createClass"


app.get("/teste", async (req, res) => {
    res.send("robertinho")
})

app.get("/classes", getClasses)

app.post("/classes", createClasses)

