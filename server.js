const express = require("express");
const app = new express();




// Lauch the server
const PORT = process.env.PORT || 1000;
app.listen(PORT, function(){
    console.log(`Server Running on PORT ${PORT}`);
});