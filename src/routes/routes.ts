import express, { Request, Response } from 'express';
// import {openConnection, closeConnection} from '../database/connectDB';

const app = express();

app.get("/institutes",(req:Request, res:Response)=>{
    //some utility function.
    res.send("all institutes");
});

app.get("/papers", (req:Request, res:Response)=>{
    //some utility function.
    res.send("all question papers");
});

app.post("/addPaper", (req:Request, res:Response)=>{
    //some utility function.
    res.send("paper added to database");
})