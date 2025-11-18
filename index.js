import express from 'express';
import cors from 'cors'
import { connectDB } from './Config/connectDB.js';
import todoRoute from './Route/todoRoute.js';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/todo',todoRoute);

connectDB();

app.get('/',(req,res) => {
    res.status(200).json({
        message: "Welcome to Homepage"
    })
})

app.listen(port, ()=> {
    console.log(`Server is listening on port no. :${port}`);
})