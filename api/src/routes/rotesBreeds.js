const express = require('express');
const breeds = express.Router();
const { Temperaments, Dog } = require('../db');
const { getAllDogs } = require('../controllers/dog')

breeds.use(express.json());

breeds.get('/breedGroups', async (req, res) => {
    try {
        const everyDog = await getAllDogs();
        const everyBreedGroup = everyDog?.map((dog) => {
            if (!dog.breed_group) {
                "No info";
            } else {
                return dog.breed_group;
            }
        });
        const eachBreedGroup = [...new Set(everyBreedGroup.flat())]
        res.status(200).json(eachBreedGroup.sort())
    } catch (error) {
        res.status(400).send(error.message);
    }
});

breeds.get('/breedGroup', async (req, res) => {
    const breedGroup = req.query.breedGroup;
    const everyDog = await getAllDogs();
    const dogsearchResult = everyDog.filter((dog) => {
        if (breedGroup === 'all') return everyDog;
        else if (dog.breed_group !== undefined) {
            return (dog.breed_group.toLowerCase()).includes(breedGroup.toLocaleLowerCase());
        }
    });
    res.status(200).json(dogsearchResult);
});

module.exports = breeds;