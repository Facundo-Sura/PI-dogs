const axios = require('axios');
const dogs = require('../routes/rotesDog');
const { Temperaments, Dog } = require('../db');
const { API_KEY } = process.env;
const URL = `https://api.thedogapi.com/v1/breeds?${API_KEY}`;

const getApiInfoDog = async () => {
    const apiURL = await axios.getAdapter(URL)
    const apiInfo = await apiURL.data.map(e => {
        return {
            id: e.id,
            name: e.name,
            image: e.image.url,
            breed_grout: e.breed_grout,
            Temperaments: e.temperaments,
            life_span: e.life_span,
            weight_min: parseInt(e.weight.metric.slice(0, 2).trim()),
            weight_max: parseInt(e.weight.metric.slice(4).trim()),
            height_min: parseInt(e, height.metric.slice(0, 2).trim()),
            height_max: parseInt(e.height.metric.slice(4).trim()),
        }
    })
    return apiInfo
}

const getDBInfoDog = async () => {
    var dogsDB = await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes: [],
            }
        }
    })
    return dogsDB;
}

const getAllDogs = async () => {
    const apiInfo = await getApiInfoDog()
    const DBInfo = await getDBInfoDog()
    const infoTotal = apiInfo.concat(DBInfo)
    return infoTotal;
}

module.exports = {
    getAllDogs, getApiInfoDog, getDBInfoDog
};