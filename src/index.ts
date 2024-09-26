import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(compression())
app.use(cors({
    credentials: true
}))

const server = http.createServer(app)

server.listen(8080, () => console.log('Server listening on port 8080'))
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('error', (error:Error) => console.log('Connection is not successful!!'))