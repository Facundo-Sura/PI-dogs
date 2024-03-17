const { Router } = require('express');
require('dotenv').config();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./rotesDog');
const temperaments = require('./routesTemperaments');
const breeds = require('./rotesBreeds');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', dogs);
router.use('/', temperaments);
router.use('/', breeds);

module.exports = router;
