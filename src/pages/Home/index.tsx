import React from 'react';

import { Container, Title, ColOne, MenuPrincipal } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <ColOne>
        <div>
          <img
            src="https://avatars0.githubusercontent.com/u/14322173?s=460&u=9d7d91326a439baf67d68d08c0b3d81a56234bcc&v=4"
            alt="Jander"
          />
        </div>
        <div>
          <Title>Jander</Title>
        </div>
        <MenuPrincipal>
          <ul>
            <li>
              <a href="home">Home</a>
            </li>
            <li>
              <a href="sobre">Sobre</a>
            </li>
            <li>
              <a href="portfolio">Portfolio</a>
            </li>
            <li>
              <a href="contato">Contact</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
          </ul>
        </MenuPrincipal>
      </ColOne>
    </Container>
  );
};

export default Home;
