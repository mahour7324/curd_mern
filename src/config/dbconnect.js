const mongoose =  require("mongoose");
const connection = mongoose.connect(`mongodb://localhost:27017/mern_crud`)
mongoose.connection.on("connected", ()=>{
    console.log(`db is connected`)

})
mongoose.connection.on("error",()=>{
    console.log(`db is not connect`)
})
console.log( module.exports)
module.exports = mongoose
