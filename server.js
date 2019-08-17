const express = require('express');
// const fs = require('fs');
const mongooes = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// mongodb://<dbuser>:<dbpassword>@ds135790.mlab.com:35790/vayde
mongooes.connect('mongodb://admin:admin1@ds135790.mlab.com:35790/vayde', function(err){
    if(err) console.log(err);
    else console.log("connect to DB successfully!!")
});

const VaydeModel = require('./models/vayde')

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));

// app.set('vayde-frontend', './vayde-frontend')

app.use(express.static('public'));
app.get("/", function(request, response){
    response.sendFile(__dirname + '/public/vayde.html');
})


app.post("/vayde", function(request, response){
    VaydeModel.create({
        // money: request.body.vayde,
        sdt: request.body.sdt,
        taisan: request.body.taisan,
        noicutru: request.body.noicutru,
    }).then(function(){
        response.redirect(request.get('referer'));
    }).catch(function(err){
        console.log(err);
    });
});


const port = process.env.PORT || 6789;

app.listen(port, function(err) {
    if (err) console.log(err)
    else console.log('server start success')
});