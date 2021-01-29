const path = require("path");
import express from "express";

import kpideclientesRoutes from "./routes/kpideclientes.routes";
import creaclientesRoutes from "./routes/creaclientes.routes";
import listlientesRoutes from "./routes/listclientes.routes";

const app = express();

// Settings
app.set("port", process.env.PORT || 3000);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application" });
});

app.use("/api", kpideclientesRoutes);

app.use("/api", creaclientesRoutes);

app.use("/api", listlientesRoutes);

export default app;