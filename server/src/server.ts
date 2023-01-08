import express from "express";
import cors from "cors";
import chalk from "chalk";
import visualisationsRoutes from "./routes/visualisationsRoutes";

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
// app.use(express.json());

app.use("/visualisations", visualisationsRoutes);

app.listen(port, () => {
  console.log(chalk.cyan(`Server listening at port ${port} 🚀`));
});
