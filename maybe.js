const main = require("./simple");
const express = require("express");
const app = express();
const PORT = 3000;


app.get("/songs/:name",async (req,res)=>{ 
     const name = req.params.name;
     const result = await main(name);
     res.json(result)
})

app.listen(PORT,()=>{
     console.log(`listening on port ${PORT}`)
})






