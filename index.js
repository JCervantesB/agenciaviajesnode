import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Conectar la base de datos
db.authenticate()
    .then( () => console.log('Conexión exitosa a la base de datos'))
    .catch( err => console.log('Error al conectar a la base de datos: ', err));

// Define the port to run on
const port = process.env.PORT || 4000;

// enable pug
app.set('view engine', 'pug');

// obtain the year of the current date
app.use( (req, res, next) => {
    const year = new Date();
    res.locals.currentYear = year.getFullYear();
    res.locals.siteName = "Agencia de Viajes";
    next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// define the public folder
app.use(express.static('public'));

// add router
app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})