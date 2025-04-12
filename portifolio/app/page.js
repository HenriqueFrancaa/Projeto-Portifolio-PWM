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

    <div>
      <div className="text-content">
        <h1>asdasd</h1>
      </div>
    </div>

    </>
  );
}
