import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pageName: 'Inicio'
    });
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

const paginaTestimoniales = (req, res) => {

    res.render('testimoniales', {
        pageName: 'Testimoniales'
    });
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