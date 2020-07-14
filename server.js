const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Default response for any other request(Not Found) Catch all
// This route should be last. It will override all others. 
app.use((req, res) => {
    res.status(404).end();
});

// function that starts express.js server. 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});