const axios = require('axios')

const API_URL = 'http://localhost:3000'

async function saveHouseData(formData) {
    try {
        const response = await axios.post(`${API_URL}/save-houses`, {
            data: formData,
        })
        return response.data
    } catch (error) {
        console.error('Erro ao salvar os dados:', error.message)
        throw new Error('Erro ao salvar os dados.')
    }
}

async function getAllHouses() {
    try {
        const response = await axios.get(`${API_URL}/houses/teste`)
        return response.data
    } catch (error) {
        console.error('Erro ao obter as casas:', error.message)
        throw new Error('Erro ao obter as casas.')
    }
}

module.exports = {
    saveHouseData,
    getAllHouses,
}
