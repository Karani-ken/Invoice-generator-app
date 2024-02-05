const express = require('express')
const cors = require('cors')
const pdf = require('html-pdf')
const bodyParser = require('body-parser')
const pdfTemplate = require('./documents')

const app = express()
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//handling a POST request to the '/create-pdf' endpoint
app.post('/create-pdf', (req, res) =>{
    //Creating a PDF using the pdfTemplate funtion and data from the request body (req.data)
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) =>{
        //handling error if any
        if(err){
            // if theres an error, reject the promise
            res.send(Promise.reject());
        }
        // if there is no error, resolve the promise
        res.send(Promise.resolve());
    });
});

//handling a GET request to the '/fetch-pdf' endpoint
app.get('/fetch-pdf', (req, res) =>{
    //sends the result.pdf file as a response
    res.sendFile(`${__dirname}/result.pdf`)
})



app.listen(port, () => console.log(`listening on port ${port}`))

