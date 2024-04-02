const http = require('http')
const fs = require('fs')

const server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/': { // http://localhost:3000/
            console.log(1)
            await new Promise(resolve => {
                fs.readFile('pages/home.html', (error, data) => {
                    if (error) {
                        console.log(error)
                        res.write('some error in read html ')
                    } else res.write(data)
                    resolve(true) // or any
                })
            })
            break
        }
        case '/2': { // http://localhost:3000/2
            console.log(2)
            await new Promise(resolve => {
                fs.readFile('pages/home2.html', (error, data) => { // (02.04.2024)
                    if (error) {
                        console.log(error)
                        res.write('some error in read html ')
                    } else res.write(data)
                    resolve(true) // or any
                })
            })
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