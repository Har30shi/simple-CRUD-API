const express=require('express');
const mongoose=require('mongoose');
const Product=require("./models/product.model.js");
const productRoute=require("./routes/product.route.js");
const app=express();
//middleware
app.use(express.json);
app.use(express.urlencoded({extended:false}));
//routes
app.use("/api/products",productRoutes);
app.get('/',(req,res)=>{
    res.send("hello hii from node api");
});
app.post('/api/products',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});
mongoose.connect("mongodb+srv://harshi:9EB3ZMkJ2YR2U7Qy@crudcluster.92rph2h.mongodb.net/crudapi?retryWrites=true&w=majority&appName=crudcluster")
.then(()=>{
    console.log("connected to database");
})
.catch(()=>{
    console.log("Connection failed");
});