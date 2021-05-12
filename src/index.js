const express = require('express')
const app = express()
const port = process.env.port || 3000
require('./db/mongoose')

// init MiddleWare
app.use(express.json({ extended: false }))

app.use('/api/users' ,require('./routes/api/users'))
app.use('/api/profile' ,require('./routes/api/profile'))
app.use('/api/posts' ,require('./routes/api/posts'))
app.use('/api/auth' ,require('./routes/api/auth'))




app.get('/', (req,res) => {
    res.send('express is running')
})

app.listen(port,() => {
    console.log("server is running on port "+ port)

})

