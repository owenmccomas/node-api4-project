const express = require('express')
const server = express()
const dotenv = require('dotenv');
dotenv.config();

PORT = process.env.PORT

server.listen(PORT, () => {
    console.log('server listening on port', PORT)
})