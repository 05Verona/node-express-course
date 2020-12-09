const express = require('express'); // access express library in node_modules
const app = express(); // express constructor

app.listen(8000, () => console.log("server is running")) // start server in port 8000