const mongoose = require('mongoose');

const url ='mongodb+srv://Suryansh:1234567890@cluster0.dluqraz.mongodb.net/my_database?retryWrites=true&w=majority'

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});

module.exports=mongoose;

