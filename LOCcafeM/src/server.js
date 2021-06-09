const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
console.log(__dirname)
console.log(publicDirectoryPath);

const app = express()

app.use(express.static(publicDirectoryPath))


app.listen(port, () => {
    console.log("Sever is up on port 3000");
})


// http.createServer((req, res) => {
//     fs.readFile("./public/js/index.html", "UTF-8", function (err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("from the createServer http response");
//         res.end(data)
//     });

// console.log(req.url);
// console.log("url");

// }).listen(3000);