import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

const App= () => {
  return (
    <><Header>
      <title>Lil Lemon Resturante
      <meta name="og:description" content="Food"/>
        <meta property="og:title" content="Lil Lemon" />
        <meta property="og:type" content="cafe webpage" />
        <meta property="og:url" content="https://www.github.com/ch3ls3a-r3v3/lil-lemon" />
<meta property="og:image" content="https://github.com/ch3ls3a-r3v3/lil-lemon" />
        </title>
        <Img></Img>
        </Header>
    <Nav></Nav>
    <Main>
      <p>Homepage</p>
    </Main><Footer>
      </Footer></>
  );
};

export default App;
