const http = require("http")
const connectmongodb = require("./mongodb")
const app = require("./app")

http.createServer(app).listen(8001, () => {
    connectmongodb
    console.log("Your app is running on localhost:8001")
})