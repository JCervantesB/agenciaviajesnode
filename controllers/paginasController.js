import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimoniales.js";	

const paginaInicio = async (req, res) => {
    // Consultar 3 viajes del modelo Viaje
    const promiseDB = [];
    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pageName: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error)
    }
};

const paginaNosotros = (req, res) => {

    res.render('nosotros', {
        pageName: 'Nosotros'
    });
};    

const paginaViajes = async (req, res) => {
    // Consultar base de datos
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pageName: 'Próximos Viajes',
        viajes
    });
};

const paginaDetalleViaje = async (req, res) => {
    
    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne({ where : { slug } });
        res.render('viaje', {
            pageName: 'Información del viaje',
            viaje
        })

    } catch (error) {
        
    }
};

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pageName: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaContacto = (req, res) => {
    res.render('contacto');
};

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaContacto,
    paginaDetalleViaje
}