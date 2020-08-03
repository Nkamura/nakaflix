import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/gustavo-riodi-nakamura-8004341b3/">
        <img src="https://i.pinimg.com/originals/3f/17/34/3f173486753fa3dca648e290d8015cc9.gif" alt="Linkedin" />
      </a>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura (2020)
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
