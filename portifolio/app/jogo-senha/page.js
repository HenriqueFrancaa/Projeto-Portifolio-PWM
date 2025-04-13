"use client";

import { useState } from "react";
import { Cabecalho } from "../../components/cabecalho";
import { useRouter } from "next/navigation";

export default function JogoSenha() {
    const router = useRouter();
    const [numeroSecreto, setNumeroSecreto] = useState(gerarNumeroSecreto());
    const [palpite, setPalpite] = useState("");
    const [historico, setHistorico] = useState([]);

    function gerarNumeroSecreto() {
        const digitos = [];
        while (digitos.length < 4) {
            const d = Math.floor(Math.random() * 10);
            if (!digitos.includes(d)) digitos.push(d);
        }
        return digitos.join("");
    }

    function verificarPalpite() {
        if (palpite.length !== 4 || new Set(palpite).size !== 4) {
            return alert("Digite um número de 4 dígitos únicos.");
        }

        let touros = 0;
        let vacas = 0;
        const digitosPalpite = palpite.split("");
        const digitosSecretos = numeroSecreto.split("");

        // Primeiro, marcar os Touros
        const unmatchedGuess = [];
        const unmatchedSecret = [];

        for (let i = 0; i < 4; i++) {
            if (digitosPalpite[i] === digitosSecretos[i]) {
                touros++;
            } else {
                unmatchedGuess.push(digitosPalpite[i]);
                unmatchedSecret.push(digitosSecretos[i]);
            }
        }

        
        unmatchedGuess.forEach((digito) => {
            const index = unmatchedSecret.indexOf(digito);
            if (index !== -1) {
                vacas++;
                unmatchedSecret.splice(index, 1); // Remove esse dígito para não contar duas vezes
            }
        });

        setHistorico([{ palpite, touros, vacas }, ...historico]);
        setPalpite("");

        if (touros === 4) {
            alert(`Muito bom, você acertou o número secreto ${numeroSecreto}!`);
            Reiniciar();
        }
    }


    function Reiniciar() {
        setNumeroSecreto(gerarNumeroSecreto());
        setPalpite("");
        setHistorico([]);
    }

    function showSecretNumber() {
        alert(`O número secreto era: ${numeroSecreto}`);
    }

    return (
        <>
            <Cabecalho />
            
            <div className="senha-container">
                <div className="box-senha">
                    <h1>Jogo da Senha</h1>
                    <p>Tente adivinhar o número secreto de 4 dígitos diferentes.</p>
                    <p>A cada palpite, você ganha uma dica.</p>
                    <div className="palpite">
                        <input
                            type="text"
                            value={palpite}
                            onChange={(e) => setPalpite(e.target.value)}
                            maxLength={4}
                            placeholder="Digite sua tentativa"
                        />
                        <button onClick={verificarPalpite}>
                            Adivinhar
                        </button>
                    </div>
                    
                    <ul className="historico">
                        {historico.map((entry, index) => (
                            <li key={index}>
                                <span>{entry.palpite}</span> ( {/* <- separador */}
                                <span>
                                    {entry.touros} Touros, {entry.vacas} Vacas )
                                </span>
                            </li>
                        ))}
                    </ul>
                    
                    <div className="opcoes">
                        <button onClick={showSecretNumber}>
                            Mostrar Resposta
                        </button>
                        <button onClick={Reiniciar}>
                            Reiniciar
                        </button>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
