import dotenv from "./config.js"
import app from "./app.js";

app.listen(process.env.PORT || 3001, () => console.log("Server on port", process.env.PORT || 3001));