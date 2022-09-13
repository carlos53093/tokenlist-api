import path from "path";
import type { Application } from "express";
import express from "express";
import "reflect-metadata";
import { useExpressServer } from "routing-controllers";
import morgan from "morgan";
import dotenv from "dotenv";
import { CustomErrorHandler } from "./middlewares/CustomErrorHandler";
import { TrimStrings } from "./middlewares/TrimStrings";

dotenv.config();

const expressApp: Application = express();

expressApp.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, "../test.html"));
});

// Show routes called in console during development
process.env.NODE_ENV === "development" && expressApp.use(morgan("dev"));

const app = useExpressServer(expressApp, {
  cors: true,
  defaults: {
    nullResultCode: 404, // with this option, null will return 404 by default
    undefinedResultCode: 204, // with this option, void or Promise<void> will return 204 by default
    paramOptions: {
      required: true, // all parameters with @ decorator from the routing controller will be required by default
    },
  },
  validation: {
    whitelist: true, // do not contain additional properties that are not defined with @ decorator
    forbidNonWhitelisted: true, // throw error when any non-whitelisted properties are present
    forbidUnknownValues: true, // prevent unknown objects from passing validation
  },
  defaultErrorHandler: false, // disable default error handler
  controllers: [path.join(__dirname, "/controllers/*{.js,.ts}")],
  middlewares: [TrimStrings, CustomErrorHandler],
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
