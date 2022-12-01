const mongoose = require('mongoose');

const URI = 'mongodb+srv://grupo10:<g123456789>@grupo10-instaya.yiflxze.mongodb.net/?retryWrites=true&w=majority'



mongoose.connect(URI)

.then(()=>{console.log('DB connected')})

.catch((error)=>{console.log('error')})



module.exports = mongoose