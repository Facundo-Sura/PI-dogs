const express = require('express');
const dogs = express.Router();
const { Temperament, Dog } = require('../db');
const { getAllDogs } = require('../controllers/dog');
const { defult: axios } = require('axios');

dogs.use(express.json());

dogs.get('/dogs', async (req, res) => {
    const name = req.query.name;
    try {
        let dogsTotal = await getAllDogs();
        if (name) {
            let dogName = await dogsTotal.filter(
                dog => dog.name.toLowerCase().includes(name.toLowerCase())
            );
            dogName.length ?
                res.status(200).send(dogName) :
                res.status(400).send("Couldn't find the dog with the name you are looking for")
        } else {
            res.status(200).json(dogsTotal);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

dogs.post('/dogs', async (req, res) => {
    var {
        name,
        height,
        weight,
        age,
        temperament,
        image,
    } = req.body;

    if (!image) {
        try {
            image = await (await axios.get('https://dog.ceo/api/breeds/image/random')).data.message;
        } catch (error) {
            console.log(error);
        }
    }

    if (name && height && weight && temperament && image) {
        const createDog = await Dog.create({
            name: name,
            height: parseFloat(height),
            weight: parseFloat(weight),
            age: parseInt(age),
            image: image || 'https://dog.ceo/api/breeds/image/random',
        });
        temperament.map(async el => {
            const findTemp = await Temperament.findAll({
                where: { name: el }
            });
            createDog.addTemperament(findTemp);
        });
        res.status(200).send(createDog);
    } else {
        res.status(400).send(error.message);
    }
})

dogs.get('/dogs/:idRaza', async (req, res) => {
    try {
        const { idRaza } = req.params
        const allDogs = await getAllDogs()

        if (!idRaza) {
            res.status(400).json("Couldn't find name")
        } else {
            const dog = allDogs.find(dogui => dogui.id.toString() === idRaza)
            res.status(200).json(dog)
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = dogs;