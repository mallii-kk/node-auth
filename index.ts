import express from "express";
import userRouter from "@/routes/user";

import "colors";
import morgan from "morgan";

const PORT = process.env.PORT || 5000;
const app = express();

/// -D middleware
app.use(morgan("dev"));

app.use("/user", userRouter);

app
  .listen(PORT, () => {
    console.log(`Application is running on ${PORT}`.magenta);
  })
  .on("error", (e) => {
    console.error(e.message);
  });
