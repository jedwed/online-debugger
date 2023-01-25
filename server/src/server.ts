import express from "express";
import cors from "cors";
import chalk from "chalk";
import compileRoute from "./routes/compileRoute";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/compile", compileRoute);

app.listen(port, () => {
  console.log(chalk.cyan(`Server listening at port ${port} 🚀`));
});
