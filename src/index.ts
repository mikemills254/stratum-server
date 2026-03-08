import express from 'express';
import cors from "cors"
import morgan from "morgan"

const app = express();
const port = process.env.PORT || 3000;

import workbookRoutes from "./routes/workbook.routes"

app.use(morgan('combined'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/workbook", workbookRoutes)

app.get('/', (req, res) => {
    res.json({ message: 'Stratum Server is running!' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});