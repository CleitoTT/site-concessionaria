import React, { useEffect, useState } from 'react';
import Inputs from "../Inputs";
import Button from "../Button";
import { getCarros } from "../../services/carros.js";

const input = ['Nome', 'Marca', 'Modelo'];

export default function AreaPesquisa({ setCarrosPesquisados, carros }) {
    const [termosPesquisa, setTermosPesquisa] = useState({
        Nome: '',
        Marca: '',
        Modelo: ''
    });

    const salvarTexto = (evento, campo) => {
        const textoDigitado = evento.target.value;
        setTermosPesquisa({
            ...termosPesquisa,
            [campo]: textoDigitado
        });
    };

    function pesquisa() {
        // Verificar se há algum texto nos campos de pesquisa
        const { Nome, Marca, Modelo } = termosPesquisa;
        if (Nome.trim() === '' && Marca.trim() === '' && Modelo.trim() === '') {
            // Se nenhum campo tiver texto, limpar os resultados de pesquisa
            setCarrosPesquisados([]);
            return;
        }
    
        // Filtrar carros com base nos termos de pesquisa não vazios
        const resultadoPesquisa = carros.filter(carro =>
            (Nome === '' || carro.nome.includes(Nome)) &&
            (Marca === '' || carro.marca.includes(Marca)) &&
            (Modelo === '' || carro.modelo.includes(Modelo))
        );
    
        // Atualizar os resultados de pesquisa
        setCarrosPesquisados(resultadoPesquisa);
    }

    return (
        <div className="w-5/6 flex flex-col justify-center items-center mt-5 ml-5 lg:w-3/6 lg:mb-5">
            <h1 className="font-bold text-3xl text-[#E10029] mb-3 font-sans text-center">Encontre seu carro dos sonhos!</h1>
            <p className="text-[#E10029] text-lg text-center mb-6">Procure pela marca, modelo ou pelo <br /> nome do carro que deseja!!</p>
            {input.map((campo, index) => (
                <Inputs key={index} placeholder={campo} onBlur={(evento) => salvarTexto(evento, campo)} />
            ))}
            <Button nome={"PESQUISAR"} onClick={pesquisa} />
        </div>
    );
}
