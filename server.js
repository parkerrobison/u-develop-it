const express = require('express');
const db = require('./db/database');

const PORT = process.env.PORT || 3001;
const app = express();

// here we don't have to specify/index.js in the path because 
// node.js will look for an index.js file automatically.
const apiRoutes = require('./routes/apiRoutes');

//express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);

// Default response for any other request(Not Found) Catch all
// This route should be last. It will override all others. 
app.use((req, res) => {
    res.status(404).end();
});

// function that starts express.js server.
// start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}); 