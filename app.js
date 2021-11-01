var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

const convert1 = require('./convertjs');

mongoose.connect('mongodb://localhost:27017/se_project')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs')

var flight_schema = new mongoose.Schema({
    Flight_Number : String,
    Airline_Name : String,
    Scheduled_Time : String,
    Estimated_Time : String,
    City : String,
    Status : String
});

var arrival = mongoose.model('Arrivals', flight_schema, 'Arrivals');
var departure = mongoose.model('Departures', flight_schema, 'Departures');

app.get("/", function(req, res){
    res.render("index.html");
});


app.get("/arrivals", function(req, res){
    arrival.find({}, function(err, allFlights){
        if(err)
        {
            console.log("err");
        }
        else
        {
            console.log(allFlights);
            res.render("showAllArr",{flights : allFlights});
        }
    });
});

app.get("/arrivals1", function(req, res){
    arrival.find({}, function(err, allFlights){
        if(err)
        {
            console.log("err");
        }
        else
        {
            console.log(allFlights);
            res.render("showAllArr1",{flights : allFlights});
        }
    });
});

app.get("/flights/:id", function(req, res){
    console.log(req.params.id, "hi");
    console.log(req.params.id);
    flight.findById(req.params.id, function(err, foundFlight){
        if(err)
        {
            console.log(err);
        }
        else if(foundFlight != null)
        {
            console.log(foundFlight + "here");
            res.render("showArr",{flight1 : foundFlight});
        }
        else
        {
            console.log("Hello Not found");
        }
    });
});

var adv;
app.post("/arrivals/view", function(req, res){
    console.log(req.body.aircraft_no + "hi");
    req.body.aircraft_no = convert1.convert(req.body.aircraft_no);
    console.log(req.body.aircraft_no + "hi1");
    arrival.findOne({Flight_Number : req.body.aircraft_no}, function(err, foundFlight){
        if(err)
        {
            console.log(err);
        }
        else if(foundFlight != null)
        {
            console.log(foundFlight, "hello");
            adv = foundFlight;
            console.log(adv);
            res.render("showArr",{flight1 : foundFlight});
        }
        else
        {
            console.log("Testing here");
            res.redirect("/arrivals1");
        }
    });
});


app.get("/departures", function(req, res){
    departure.find({}, function(err, allFlights){
        if(err)
        {
            console.log("err");
        }
        else
        {
            console.log(allFlights);
            res.render("showAllDep",{flights : allFlights});
        }
    });
});


app.post("/departures/view", function(req, res){
    req.body.aircraft_no = convert1.convert(req.body.aircraft_no);
    departure.findOne({Flight_Number : req.body.aircraft_no}, function(err, foundFlight){
        if(err)
        {
            console.log(err);
        }
        else if(foundFlight != null)
        {
            adv = foundFlight;
            res.render("showDep",{flight1 : foundFlight});
        }
        else
        {
            res.redirect("/departures1");
        }
    });
});

app.get("/departures1", function(req, res){
    departure.find({}, function(err, allFlights){
        if(err)
        {
            console.log("err");
        }
        else
        {
            console.log(allFlights);
            res.render("showAllDep1",{flights : allFlights});
        }
    });
});

app.listen(3000, function() {
    console.log('Node.js listening on port ' + 3000)
})