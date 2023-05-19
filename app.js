const express = require('express');
const morgan = require('morgan');

//Routers 
const userRouter = require('./routes/userRoutes');

const app = express();

// Middleware functions 
app.use(morgan('dev'));

app.use('/api/v1/users', userRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})