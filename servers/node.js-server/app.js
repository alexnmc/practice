const http = require("http")

const server = http.createServer((req, res) => {
if(req.url === '/'){
    res.write("Hello Wolrd")
    res.end()
}
})

server.listen(3000)

console.log("server working")