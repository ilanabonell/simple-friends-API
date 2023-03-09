const express = require("express")
const app = express()
const cors = require("cors")
const PORT = 8000

let friends ={
    "ilana": {
        "name": "ilana",
        "age": 23,
        "gender": "Female",
        "birthMonth": "April"
    },
    "evan": {
        "name": "evan",
        "age": 25,
        "gender": "male",
        "birthMonth": "may"
    },
    "nick":{
        "name": "nick",
        "age": 22,
        "gender": "male",
        "birthMonth": "march"    
    },
    "unknown":{
        "name": "unknown",
        "age": "unknown",
        "gender": "unknown",
        "birthMonth": "unknown",
    }
}

app.use(cors())

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get("/api/friends/:friendName", (request, response) =>{
    const fName = request.params.friendName.toLowerCase()
    if(fName in friends){
        response.json(friends[fName])
    }
    else{
        response.json(friends["unknown"])
    }
})

app.listen(PORT, () => {
    console.log("Server running on Port! " + PORT)
})