const {Router} = require("express");
const activitiesRouter = Router();
const { getActivities, newActivity } = require("../controllers/activitiesController");

activitiesRouter.get("/", (req, res) => {
    // Obtiene un arreglo de objetos, donde cada objeto es una actividad turística
    res.status(200).send("Muestro la actividad turística");
});

activitiesRouter.post("/", (req, res) => {
    // Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
    // Toda la información debe ser recibida por body.
    // Debe crear la actividad turística en la base de datos, y esta debe estar relacionada con los países indicados (al menos uno).
    res.status(201).send("Creo una actividad turística");
});

module.exports = activitiesRouter;