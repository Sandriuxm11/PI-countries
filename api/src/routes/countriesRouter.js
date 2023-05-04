const { Router } = require("express");
const countriesRouter = Router();
const { getCountries, getOneCountry, getCountryByName } = require("../controllers/countriesController");

countriesRouter.get("/", (req, res) => {
    // Obtiene un arreglo de objetos, donde cada objeto es un país con toda su información
    res.status(200).send("Te envio la lista completa de paises");
})

countriesRouter.get("/:id", (req, res) => {
    //Esta ruta obtiene el detalle de un país específico. Es decir que devuelve un objeto con la información pedida en el detalle de un país.
    // El país es recibido por parámetro (ID de tres letras del país).
    // Tiene que incluir los datos de las actividades turísticas asociadas a este país.
    res.status(200).send("Te muestro el pais que buscaste por ID");
})

countriesRouter.get("/name", (req, res) => {
    // Esta ruta debe obtener todos aquellos países que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
    // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    // Si no existe el país, debe mostrar un mensaje adecuado.
    res.status(200).send("Pais buscado por nombre");
})

module.exports = countriesRouter;

