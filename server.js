const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database');

const apiRoutes = require('./routes/apiRoutes');

// USE apiRoutes
app.use('/api', apiRoutes);

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default Response for Req NOT found (catch all)
app.use((req, res) => {
    res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});