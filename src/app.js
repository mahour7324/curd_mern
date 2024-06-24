const express =  require("express");
const app = express();
// console.log(typeof app) // function
const PORT = process.env.PORT || 3000
// console.log(typeof )
app.listen(PORT,()=>{
    console.log(`connected on this server=> http://localhost:${PORT}`)
})