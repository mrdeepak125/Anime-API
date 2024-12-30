import express from "express";
import { config } from "dotenv";
import { limiter } from "./middlewares/rateLimit";
import { router } from "./routes/routes";
import { inject } from "@vercel/analytics";

config(); // dotenv
inject();

const app = express();
const PORT = process.env.PORT ?? 3001;

//middlewares
app.use(limiter);

// router
app.use("/", router);

app.listen(PORT, () => {
  console.log(`⚔️  API started ON PORT : ${PORT} @ STARTED  ⚔️`);
});

export default app;
