const connectTOmongo = require('./Data_base')
const express = require('express')
const app = express()


//react app would be on 3000
const port = 5000
connectTOmongo()
app.use(express.json())
// api  auth connectivity start from here

app.use('/api/auth', require('./routes/auth'))


//to do{ nodemon install first}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})