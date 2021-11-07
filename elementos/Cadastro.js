import React from "react";
import imgdoreact from '../imagem/imgReact.png'
import '../elementos/Cadastro.css'


function Cadastro(){
    return(
        <main>
            <section className="primeiraSele">
                <form>
                <div>
                <h1 className="inf">Cadastro</h1>
                <p className="inf">Preencha os dados a baixo para começar</p>
                </div>
                      <input className="inf2" type="text" placeholder="Nome" />
                      <input className="inf2" type="text" placeholder="Sobrenome" />
                      <input className="inf2" type="email" placeholder="E-mail" />
                      <input className="inf2" type="password" placeholder="Senha"/>
                      <input type="button" value="Concluir cadastro"/>
                </form>
            </section>
            <section>
                 <img src={imgdoreact} alt="."/> 
            </section>
        </main>
    );
}

export default Cadastro;
