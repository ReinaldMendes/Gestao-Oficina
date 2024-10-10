import e from "express";
import "dotenv/config";
import "./config/conn.js";
import Maintenance_router from "./router/Maintenance-router.js";
import Vehicle_router from "./router/Vehicle-router.js";
import Workshop_router from "./router/Workshop-router.js";

const app = e();
app.use(e.json());
app.use("/maintenance", Maintenance_router);
app.use("/vehicle", Vehicle_router);
app.use("/workshop", Workshop_router);

app.listen(process.env.API_PORT, () => console.log("Server Running"));
