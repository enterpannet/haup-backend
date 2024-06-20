import express from 'express';
import cors from 'cors'
import Car from './routers/CarRoutes.js'
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('สว้สดีชาวโลก')
})
app.use(Car)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
