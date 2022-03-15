import express from 'express';
import router from './routes/index.js';

const app = express();

// Define the port to run on
const port = process.env.PORT || 4000;

// Agregar router
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})