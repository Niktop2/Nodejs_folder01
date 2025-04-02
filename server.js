const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//const Person = require('./models/Person')
//const MenuItem = require('./models/MenuItem')

app.get('/', function (req, res) {
  res.send('har har mahadev')
})

app.get('/name', (req, res) => {
  res.send("My name is nikhil")
})

app.get('/info', (req, res) => {
  let information = {
    name: "nikhil",
    city: "nagpur",
    age: "26"
  }
  res.send(information)
})

app.post('/items', (req, res) => {
  res.send("data is saved")
})

//to add person
  // app.post('/person', async (req, res) => {
  //     try {
  //       const data = req.body
  //       const newPerson = new Person(data);
  //       const response = await newPerson.save();
  //       console.log("data saved successfully");
  //       res.status(200).json(response)
  //     } 
  //     catch(err) {
  //       console.log(err);
  //       res.status(500).json({error: "internal server error"});
  //     } 

  // })

// app.get('/person', async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data fetched");
//     res.status(200).json(data)
//   }catch(err) {
//     console.log(err);
//     res.status(500).json({error: "internal server error"});
//   }
// })


// //to add menu
// app.post('/menu', async (req, res) => {
//   try {
//     const data = req.body
//     const newMenu = new MenuItem(data);
//     const response = await newMenu.save();
//     console.log('data saved');
//     res.status(200).json(response)
//   }catch(err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// })

// app.get('/menu', async (req, res) =>{
//   try {
//     const data = await MenuItem.find();
//     console.log('data fetched');
//     res.status(200).json(data);
//   } catch (err){
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'})
//   }
// })

// app.get('/person/:workType', async(req, res) => {
//   try {
//     const workType = req.params.workType;
//     if(workType == "chef" || workType == "manager" || workType == "waiter") {
//       const response = await Person.find({work: workType});
//       console.log('response fetched');
//       res.status(200).json(response);
//     }else{
//       res.status(404).json({error: 'Invalid work type'});
//     }
//   }catch(err) {
//     console.log(err);
//     res.status(500).json({error: 'Internal Server Error'});
//   }
// })


//Inport router files


const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000, () => {
  console.log("App listening on port 3000")
})
