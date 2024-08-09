import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
//database
dbConnection();

const app = express();
//middlewares third party
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// app.use((req, res, next) => {
//   const allowedOrigins = [
//     "http://localhost:5173",
//     "http://localhost:5174",
//     // Add any other allowed origins here
//   ];

//   if (allowedOrigins.includes(req.headers.origin)) {
//     res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
//   } else {
//     res.setHeader("Access-Control-Allow-Origin", "null");
//   }

//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   res.setHeader("Access-Control-Allow-Credentials", "true");

//   next();
// });

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

app.use(errorMiddleware);
export default app;
