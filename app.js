const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

//Routers 
const userRouter = require('./routes/userRoutes');

// Configs
const app = express();
dotenv.config({ path: './config.env' });

// Middleware functions 
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/users', userRouter);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})