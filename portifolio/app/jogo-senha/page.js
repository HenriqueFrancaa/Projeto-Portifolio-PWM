"use client";

import { useState } from "react";
import { Cabecalho } from "../../components/cabecalho";
import { useRouter } from "next/navigation";

export default function JogoSenha() {
    const router = useRouter();
    const [secretNumber, setSecretNumber] = useState(generateSecretNumber());
    const [guess, setGuess] = useState("");
    const [feedback, setFeedback] = useState([]);

    function generateSecretNumber() {
        const digits = [];
        while (digits.length < 4) {
            const d = Math.floor(Math.random() * 10);
            if (!digits.includes(d)) digits.push(d);
        }
        return digits.join("");
    }

    function handleGuess() {
        if (guess.length !== 4 || new Set(guess).size !== 4) {
            return alert("Digite um número de 4 dígitos únicos.");
        }

        const bulls = [...guess].filter((d, i) => d === secretNumber[i]).length;
        const cows = [...guess].filter(
            (d, i) => d !== secretNumber[i] && secretNumber.includes(d)
        ).length;

        setFeedback([{ guess, bulls, cows }, ...feedback]);
        setGuess("");

        if (bulls === 4) {
            alert(`Parabéns! Você acertou o número secreto ${secretNumber}!`);
            resetGame();
        }
    }

    function resetGame() {
        setSecretNumber(generateSecretNumber());
        setGuess("");
        setFeedback([]);
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
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            maxLength={4}
                            placeholder="Digite sua tentativa"
                        />
                        <button onClick={handleGuess}>
                            Adivinhar
                        </button>
                    </div>
                    
                    <ul>
                        {feedback.map((entry, index) => (
                            <li key={index}>
                                <span>{entry.guess}</span>
                                <span>
                                    {entry.bulls} Touros, {entry.cows} Vacas
                                </span>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </>
    );
}
