import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/4248081?s=460&u=98a643ad7f90c7950d9311e4b5a762fe77af8ada&v=4" alt="Filipe Deschamps"/>
            <div>
                <strong>Filipe Deschamps</strong>
                <span>Web Design</span>
            </div>
        </header>

        <p>
            Esse texto aqui é só um teste, nào considere le como resultado final
            <br/><br/>
            Se você considerou o texto de antes, reveja seus conceitos
        </p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ 120,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
  )
}

export default TeacherItem;