import Image from "next/image";
import styles from "./page.module.css";
import { Cabecalho } from "@/components/cabecalho";
import { Rodape } from "@/components/rodape"; 
import Link from "next/link";

export default function Home() {
  return (
    <>
    <Cabecalho />

    <div className="centralize">
      <img className="foto-perfil pic" src="/minha-foto.jpeg"/>
        <div className="text-content">
          <h1>Um pouco sobre mim</h1>
          <p>
            Sou estudante de Ciência da Computação na Universidade Católica de Pernambuco (UNICAP) e atualmente estou no 5º período do curso. Tenho grande interesse em aprender coisas novas — seja explorando linguagens de programação, algoritmos ou desbravando o universo da tecnologia.

            Faço parte do grupo de Programação Competitiva da UNICAP, onde estudamos algoritmos aplicados à resolução de problemas diversos. É um desafio empolgante e algo que considero extremamente fascinante.

            Além disso, participo de um projeto de Iniciação Científica na UNICAP, sob orientação do professor Diego Pinheiro.
          </p>
          <h3>Entre em contato comigo</h3>
          <div className="contato">
          <a href="https://www.instagram.com/henriq.francaa" target="_blank">
            <button className="insta pic">Instagram</button>
          </a>
            <a href="https://www.linkedin.com/in/henrique-franca-16390125b/" target="_blank">
            <button className="linkedin pic">Linkedin</button>
          </a>
            <a href="https://github.com/HenriqueFrancaa" target="_blank">
            <button className="github pic">Github</button>
          </a>
          <a href="mailto:henrique23.franca@gmail.com">
            <button className="email pic">Email</button>
          </a>
          </div>

        </div>
    </div>

      <div className="text-content">
        <h1>Meus Projetos</h1>      
      </div>

      <div className="projects">

        <div className="project-box">
          <h1>Workshop de Programação Competitiva</h1>
          <img src="/maratona.webp" />
          <p>
            Evento de duas semanas organizado pelos próprios membros da equipe de Maratona de Programação, voltado para alunos iniciantes do 1º e 2º períodos do curso de Ciência da Computação. 
            <br/><br/>O workshop abordou desde os conceitos básicos de programação até algoritmos mais avançados. 
            Durante o evento, cada integrante da equipe ministrou aulas, e os participantes puderam colocar seus conhecimentos em prática por meio de competições realizadas ao longo das semanas.
          </p>
          <a href="https://www.instagram.com/p/DGT9qqPy9I9/" target="_blank">
            <button className="pic">Saiba mais!</button></a>
        </div>
    
        <div className="project-box">
          <h1>Jogo da senha</h1>
          <img src="/senha.png"/>
          <p>
            O Jogo da Senha (Touros e Vacas) consiste em adivinhar uma sequência secreta de 4 números únicos.<br/>
            A cada palpite, o jogo irá te dar dois tipos de feedback: Touros, que indicam números corretos na posição certa, e Vacas, que indicam números corretos, mas na posição errada. 
            O objetivo é acertar todos os números na ordem correta com o menor número de tentativas.
            Boa sorte e divirta-se!
          </p>

          <a href="/jogo-senha" target="_blank">
          <button className="pic">Jogar</button></a>
        </div>

        <div className="project-box">
          <h1>Quiz de Ciência da Computação</h1>
          <img src="/quizc3.webp"/>
          <p>
            O projeto consiste em um quiz voltado para alunos de Ciência da Computação, do 1º ao 5º período, com perguntas baseadas nos conteúdos das disciplinas. 
            <br/><br/>A proposta é utilizar a gamificação como ferramenta para tornar o aprendizado mais leve, divertido e interativo, incentivando os estudantes a revisarem os conteúdos de forma mais engajada e motivadora
          </p>
          <a href="https://projeto-web-mobile-seven.vercel.app/" target="_blank">
            <button className="pic">Jogar</button></a>
        </div>

      </div>

      <div className="skills-tools">
        <div className="text-content">
          <h1>Linguagens de Programação utilizadas</h1>
          <div className="skills skills-icons">
            <h3 className="pic">C++</h3>
            <h3 className="pic">C</h3>
            <h3 className="pic">Python</h3>
            <h3 className="pic">Java</h3>
            <h3 className="pic">HTML</h3>
            <h3 className="pic">CSS</h3>
            <h3 className="pic">JavaScript</h3>
            <h3 className="pic">SQL</h3>
          </div>
        </div>
          
          <div className="text-content">
            <h1>Ferramentas utilizadas</h1>
            <div className="tools tools-icons">
              <h3 className="pic">Git</h3>
              <h3 className="pic">Vim</h3>
              <h3 className="pic">VsCode</h3>
              <h3 className="pic">React</h3>
              <h3 className="pic">Notion</h3>
              <h3 className="pic">Figma</h3>
              <h3 className="pic">MySQL</h3>


            </div>
          </div>
      </div>
      <Rodape />
    </>
  );
}
