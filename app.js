const express = require('express');
const path = require('path');
// const morgan = require('morgan');
const hbs = require('hbs');
const dotenv = require("dotenv").config();
const mongoose = require('mongoose');
const Users = require('./models/Users');
const Contacts = require('./models/Contacts');


mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{  
    console.log('connected to mongodb');
}).catch((err)=>{
    console.log('failed to connect to mongodb\n',err);
});


const port = process.env.PORT || '3000';
const static_path = path.join(__dirname, "./public");
const view_path = path.join(__dirname, "./templates/views");
const partials_path = path.join(__dirname, "./templates/partials");

const app = express();

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", view_path);
hbs.registerPartials(partials_path);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(morgan('dev'));

app.get("/", (req, res) => {
    res.render("login");
})

app.get("/index", (req, res) => {
    res.render("index");
})
app.get("/about", (req, res) => {
    res.render("about");
})
app.get("/contact", (req, res) => {
    res.render("contact");
})
app.get("/organisation/sadf", (req, res) => {
    res.render("organisation/sadf");
})
app.get("/organisation/utkarsh", (req, res) => {
    res.render("organisation/utkarsh");
})
app.get("/organisation/jeevashram", (req, res) => {
    res.render("organisation/jeevashram");
})
app.get("/organisation/friendicoes", (req, res) => {
    res.render("organisation/friendicoes");
})
app.get("/organisation/paws", (req, res) => {
    res.render("organisation/paws");
})
app.get("/organisation/redPaws", (req, res) => {
    res.render("organisation/redPaws");
})


app.post('/auth',(req,res)=>{
    Users.find({user_id:req.user_id}).then((users)=>{
        if(users){
            res.status(200).json({message:"account already present"});
        }
        else{
            Users.create(req.body).then((user)=>{
                res.status(200).json({message:"user authenticated",user:user});
            })
            .catch((err)=>{
                res.render('404page', {
                    errorMsg: "Opps! Data entered is not valid, go back to try again..."
                })
            })
        }
    })
    .catch((err)=>{
        res.render('404page', {
            errorMsg: "Opps! Data entered is not valid, go back to try again..."
        })
    });
   
});

app.get('/users',(req,res)=>{
    Users.find().then((users)=>{
        res.status(200).json({message:"fetched all users",users:users});
    })
    .catch((err)=>{
        res.render('404page', {
            errorMsg: "Opps! Data entered is not valid, go back to try again..."
        })
    })
});

app.post('/contacts',(req,res)=>{
    console.log(req.body);
    Contacts.create(req.body).then((contact)=>{
        res.status(200).json({message:"contact added",contact:contact});
    })
    .catch((err)=>{
        res.status(500).json({error:"server error try again after some time"});
    });
});

app.get('/contacts',(req,res)=>{
    Contacts.find().then((contacts)=>{
        res.status(200).json({message:"fetched contact messages",contacts:contacts});
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.get('*',(req,res)=>{
    res.render('404page', {
        errorMsg: "Sorry Page Not Found"
    })
});


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});