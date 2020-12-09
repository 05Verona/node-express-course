const express = require('express'); // access express library in node_modules
const bodyParser = require('body-parser');
const app = express(); // express constructor
app.use(bodyParser.json());


// Creating object to contain user data
const mockUserData = [
        { name: 'Mark' },
        { name: 'Jill' }
]

// Adding first GET route to system
app.get('/users', (req, res) => {
        res.json({
                sucess: true,
                message: "successfully got users. Nice!",
                users: mockUserData
        })
})

/**
   * Here, ':id is treated as a variable' 
   * You can use dynamic variables to search for specific data associated with an id in your database, and return that (instead of just returning the id)
 */
app.get('/users/:id', (req, res) => {
        console.log(req.params.id)
        res.json({
                success: true,
                message: "got one user",
                user: req.params.id
        })
})

// Handling POST request to 'login' endpoint
app.post('/login', (req, res) => {
        // Typically passwords are encrypted using something like bcrypt before sending to database
        const username = req.body.username;
        const password = req.body.password;

        // This should come from db
        const mockUsername = "BillyTheKid"
        const mockPassword = "superSecret"

        if (username === mockUsername && password === mockPassword) {
                // In practice, use JSON web token sign method here to make an encrypted token
                res.json({
                        sucess: true,
                        message: 'password and username match!',
                        token: 'encrypted token goes here'
                })
        } else {
                res.json({
                        sucess: false,
                        message: 'password and username do not match'
                })
        }
})

/**
 * ----- Server ------
 * You can reset the server automatically when you make changes using a tool called nodemon
 */
app.listen(8000, () => console.log("server is running")) // start server in port 8000