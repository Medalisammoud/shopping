//require mongoose
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URI, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        });
        console.log("DataBase Connected successfully");
      } catch (error) {
        console.log("database can not connect", error);
      }
}

module.exports = connectDB;