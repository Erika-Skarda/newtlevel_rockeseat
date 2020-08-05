import React from 'react';
import TeacherList from '../../pages/TeacherList';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {

    return (
        <article className="teacher-item">
              <header>
                <img src="https://avatars1.githubusercontent.com/u/60902843?s=460&u=fca9219fa3416ab4b849077b9248f71d44133283&v=4" alt="Erika"/>  
                <div>
                  <strong>Erika</strong>
                  <span>Matemática</span>
                </div>
              </header>
                <p>
                  Entusiasta das melhores tecnologias
                  <br /><br />
                  Apaixonada por desenvolvimento
                </p>
                <footer>
                  <p>
                    Preço/hora
                    <strong>R$100,00</strong>
                  </p>
                  <button type="button">
                    <img src={whatsappIcon} alt="Entrar em contato" />
                      Entrar em contato
                  </button>
                </footer>
            </article>


    )
}

export default TeacherItem