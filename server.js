const http = require('http')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/': { // http://localhost:3000/
            console.log(1)
            const start = new Date()
            while (new Date() - start < 5000) {} // (02.04.2024)
            console.log('stop')
            break
        }
        case '/2': { // http://localhost:3000/2
            console.log(2)
            break
        }
        default: { // http://localhost:3000/favicon.ico
            console.log(req.url)
            console.log(404)
        }
    }

    res.write('hi!')
    res.end()
})

server.listen(3000)

// terminal:

// node server.js

// http://localhost:3000/

// ctrl+c // for stop
// ctrl+l // for clear terminal