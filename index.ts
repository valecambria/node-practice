import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';

//Configurating the .env file
dotenv.config();

//Create EXPRESS APP
const app: Express = express(); 
const port: string | number = process.env.PORT || 8000;

//Defining routes
app.get('/', (req: Request, res: Response) => {
    res.json([{
        data:{
            message: "Goodbye, world"
        }
    }]);
});

app.get('/hello', (req: Request, res: Response) => {
    let name = req.query.name;
    if(name){
        res.send(`Hello, ${name}`);
    }else{
        res.send("Hola anonimo")
    }
});

//Execute the app and listen to port requests
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`);
});