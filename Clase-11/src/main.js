import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongodb.config.js";
import { sumar } from "./math.js";

console.log(ENVIRONMENT.MONGO_DB_CONNECTION_STRING)

connectMongoDB()