//Dependencies
const express = require('express');

require('dotenv').config();

//App Setuo
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

//Routes
app.get('/', (req, res) =>{
  res.render('index');
});

//App Start
app.listen(port, (err) => {
  if(err){
    console.log(`Error: ${err}`)
  } else {
    console.log(`Server running on port ${port}`);
  }
});
