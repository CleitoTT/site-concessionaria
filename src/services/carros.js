import axios from "axios";

const carrosAPI = axios.create({baseURL:"https://api-concessionaria.vercel.app"})

async function getCarros(){
    const response = await carrosAPI.get("/carros")

    return response.data
}

export { getCarros }