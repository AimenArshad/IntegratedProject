import express from 'express'
import cors from 'cors' // important for recieving api calls

import AnnoucementRouter from './routes/Annoucement.js'
import ResidentRouter from './routes/Resident.js'
import * as dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(cors()) // important for recieving api calls
app.use(express.static('public'))
app.use(express.json())

app.use('/api/Annoucement', AnnoucementRouter)
app.use('/api/Residents', ResidentRouter)

app.listen(5000)
