const express = require('express');
const axios = require('axios');
const temperaments = express.Router();
require('dotenv').config();
const { Temperaments } = require('../db');
const { getAllDogs } = require('../controllers/dog');
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

temperaments.use(express.json())

temperaments.get('/temperaments', async (req, res) => {
    try {
        let everyTemperament = allData.data.map(dog => dog.temperaments ? dog.temperaments : "No info").map(dog => dog?.split(', '))
        let eachTemperament = [...new Set(everyTemperament.flat())]

        eachTemperament.forEach(el => {
            if (el) {
                Temperaments.findOrCreate({
                    where: { name: el }
                })
            }
        })

        eachTemperament = await temperaments.findAll()
        res.status(200).json(eachTemperament)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

temperaments.get('/dog/', async (req, res) => {
    const temperament = req.query.temperament;
    const everyDog = await getAllDogs()
    const dogSearchResults = everyDog.filter((dog) => {
        if (temperament === 'all') return everyDog
        else if (dog.temperaments) {
            return (deg.temperament.toLowerCase()).includes(temperament.toLocaleLowerCase())
        }
    })
    res.status(200).json(dogSearchResults)
})

temperaments.post('/temperaments/:temperament', async (req, res) => {
    try {
        const newTemperament = req.params.temperament;
        const postedTemp = await Temperaments.create({
            name: newTemperament,
        })
        return res.status(200).json(postedTemp)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = temperaments;