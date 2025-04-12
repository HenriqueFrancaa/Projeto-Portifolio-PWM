import Image from "next/image";
import styles from "./page.module.css";
import { Cabecalho } from "@/components/cabecalho";

export default function Home() {
  return (
    <>
    <Cabecalho />

    <div className="centralize">
      <img className="foto-perfil pic" src="/minha-foto.jpeg"/>
        <div className="text-content">
          <h1>Um pouco sobre mim</h1>
          <p>
              Sou estudante de Ciência da Computação e atualmente estou no 5º período do curso. 
              Tenho uma grande paixão por aprender coisas novas — seja linguagens de programação, algoritmos ou explorar o mundo em constante evolução da tecnologia. Gosto de registrar tudo o que aprendo ao longo dessa jornada.
              Também faço parte do grupo de Programação Competitiva da UNICAP, onde estudamos algoritmos voltados para a resolução de problemas.
              É um desafio empolgante e algo que considero verdadeiramente fascinante!
          </p>
        </div>
    </div>

      <div className="text-content">
        <h1>Meus Projetos</h1>      
      </div>

      <div className="projects">

        <div className="project-box pic">
          <h1>Workshop de Programação Competitiva</h1>
          <img src="/maratona.webp" />
          <p>
            Evento de duas semanas organizado pelos próprios membros da equipe de Maratona de Programação, voltado para alunos iniciantes do 1º e 2º períodos do curso de Ciência da Computação. 
            <br/><br/>O workshop abordou desde os conceitos básicos de programação até algoritmos mais avançados. 
            Durante o evento, cada integrante da equipe ministrou aulas, e os participantes puderam colocar seus conhecimentos em prática por meio de competições realizadas ao longo das semanas.
          </p>
        </div>
    
        <div className="project-box pic">
          <h1>Jogo da senha</h1>
          <img src="/biblioteca.png"/>
          <button>Jogar</button>
        </div>

        <div className="project-box pic">
          <h1>Quiz de Ciência da Computação</h1>
          <img src="/quizc3.webp"/>
          <p>
            O projeto consiste em um quiz voltado para alunos de Ciência da Computação, do 1º ao 5º período, com perguntas baseadas nos conteúdos das disciplinas. 
            <br/><br/>A proposta é utilizar a gamificação como ferramenta para tornar o aprendizado mais leve, divertido e interativo, incentivando os estudantes a revisarem os conteúdos de forma mais engajada e motivadora
          </p>

        </div>

      </div>

      <div className="skills-tools">
        <div className="text-content">
          <h1>Linguagens de Programação</h1>
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
            <h1>Ferramentas</h1>
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



    </>
  );
}
