//Question1:How do you create a simple Express.js application?

// const express=require('express');

// const app=express();

// app.get('/',(req,res)=>{
//     res.send("<h1>This is the Home page</h1>")
// })


// app.get('/about',(req,res)=>{
//     res.send("<h1>This is the About page</h1>")
// })

// app.get('/contact',(req,res)=>{
//     res.send("<h1>This is the Contact page</h1>")
// })

// app.listen(9000,()=>{
//     console.log(`connected`)
// })


//Question2:Implementation of all type of exports in backend application.
//There are 2 types of exports in nodejs
//1.named export
//2.default export

// const summation=require('./sum');

// summation.sum(4,5);



// const summation=require('./sum');
// summation(44,55)


//Question3:Create a middleware which will be applicable to all the routes.
// const express=require('express');
// const app=express();
// const middleware=(req,res,next)=>{
//     console.log("Global middleware ");
//     next();
// }
// app.use(middleware)
// app.get('/',(req,res)=>{
//     console.log("HOME PAGE");
//     res.send("home page")
// })
// app.get('/page1',(req,res)=>{
//     res.send("This is page1")
// })

// app.get('/page2',(req,res)=>{
//     res.send("This is page2")
// })
// app.get('/page3',(req,res)=>{
//     res.send("This is page3")
// })
// app.get('/page4',(req,res)=>{
//     res.send("This is page4")
// })
// app.listen('9000',(req,res)=>{
//     console.log('connected to the port 9000')
//  })


 //Question4:Implement CORS


 const express = require('express');
const app = express();

    const ingredients = [
    {
        "id": "1",
        "item": "Bacon"
    },
    {
        "id": "2",
        "item": "Eggs"
    },
    {
        "id": "3",
        "item": "Milk"
    },
    {
        "id": "4",
        "item": "Butter"
    }
];

app.get('/ingredients', (req, res) =>{
    res.send(ingredients);
});
app.listen(9000,()=>{
    console.log('connected to the port 9000')
});
