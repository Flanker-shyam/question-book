import express, { Request, Response } from 'express';
const {openConnection, closeConnection} = require('../database/connectDB');

const app = express();

app.get('/', (req: Request, res: Response) =>
    res.send('Hello World from Home')
);

app.get("/db",(req:Request, res:Response)=>{
    openConnection();
    res.send("done....!!");
    closeConnection();
})

export default app;
