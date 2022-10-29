import express from "express";
import {createServer} from "http";
import {Server} from "socket.io";
import cors from "cors";
import config from "config";

const port = config.get<number>('port');
const host = config.get<string>('host');
const corsOrgin = config.get<string>('corsOrgin');

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors:{
        origin:corsOrgin,
        credentials:true
    }
});

app.get('/',(req,res))