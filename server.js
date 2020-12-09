const express = require('express'); // access express library in node_modules
const app = express(); // express constructor

// Creating object to contain user data
const mockUserData = [
        { name: 'Mark' },
        { name: 'Jill' }
]

// Adding first GET route to system
app.get('/users', (req,res) => {
        res.json({
                sucess: true,
                message: "successfully got users. Nice!",
                users: mockUserData
        })
})
app.get('/users/:id', (req,res) => {
        console.log(req.params.id)
        res.json({
                success: true,
                message: "got one user",
                user: req.params.id 
        })
})


/**
 * ----- Server ------
 * You can reset the server automatically when you make changes using a tool called 
 */
app.listen(8000, () => console.log("server is running")) // start server in port 8000