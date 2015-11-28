import express from "express"
import react from "react"

const app = express()

app.get("/", function(request, response) {
	response.send("<html><head></head><body></body></html>")
})

var server = app.listen(3000, () => {
	console.log("Started server")
})
