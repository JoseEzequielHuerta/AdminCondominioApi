import app from "./app";
import "./databases/databases";

app.listen(process.env.PORT || 5000);
console.log("Server bello y hermoso en el puerto:", process.env.PORT);
