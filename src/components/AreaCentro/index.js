import React, { useState, useEffect } from 'react';
import AreaPesquisa from "../AreaPesquisa";
import AreaResultado from "../AreaResultado";
import { getCarros } from "../../services/carros.js";

export default function AreaCentro() {
    const [carros, setCarros] = useState([]);
    const [carrosPesquisados, setCarrosPesquisados] = useState([]);

    useEffect(() => {
        fetchCarros();
    }, []);

    async function fetchCarros() {
        try {
            const carrosAPI = await getCarros();
            setCarros(carrosAPI);
        } catch (error) {
            console.error('Erro ao buscar carros', error);
        }
    }

    return (
        <div className="w-11/12 h-10/12 bg-white rounded-3xl mb-5 mt-5 flex flex-col justify-center items-center cursor-default xl:w-8/12 xl:h-[65%] lg:flex-row lg:my-auto">
            <AreaPesquisa setCarrosPesquisados={setCarrosPesquisados} carros={carros} />
            {carrosPesquisados.map((carro, index) => (
                <AreaResultado key={index} nome={carro.nome} marca={carro.marca} modelo={carro.modelo} imagem={carro.imagem} />
            ))}
        </div>
    );
}