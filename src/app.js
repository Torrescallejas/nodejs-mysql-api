import express from 'express'
import bodyParser from 'body-parser'
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'
import {PORT} from './config.js'

const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(indexRoutes)
app.use('/api', employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})

export default app;