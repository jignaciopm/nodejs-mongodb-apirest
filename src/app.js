import express from 'express'

const app = express()

// Settings
app.set('port', process.env.PORT || 8080)

app.get('/', (req,res) => {
    res.send('Hello World!')
})

export default app