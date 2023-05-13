import fs from 'fs';
import express from 'express';
import cors from 'cors';
import chalk from 'chalk';
import * as dotenv from 'dotenv';
import compileRoute from './routes/compileRoute';
import { codeDir } from './config/paths';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/compile', compileRoute);

if (!fs.existsSync(codeDir)) {
  fs.mkdirSync(codeDir);
}
app.listen(port, () => {
  console.log(chalk.cyan(`Server listening at port ${port} 🚀`));
});
