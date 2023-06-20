import './App.css'
import React from 'react';
import Informacoes from './Informacoes/Informacoes';
import ProdRelacionados from './ProdRelacionados/ProdRelacionados'
import Comentarios from './Comentarios/Comentarios'
import ProdutoPrincipal from './ProdutoPrincipal/ProdutoPrincipal';
import InfoLoja from './InfoLoja/InfoLoja'


const itens = ['Recomendados', 'Eletronicos', 'Eletrodomesticos', 'Smartphones', 'Televisões', 'Diversos']
 

function Header() {
  const menuHeader = document.querySelector('.menuHeader');
  const itemHeader = document.querySelectorAll('.itemHeader');
  
  function toggleColapsar() {
    itemHeader.forEach(item => item.classList.toggle('colapsar'))
  }
  
  return (
    <header className="header">
      <ul className="itensMenuHeader">
        <li className="logoHeader"><img src='./src/logo2.svg' /></li>
        <li className="inputHeader"><input type='text' /></li>
        <li className="menuHeader" onClick={toggleColapsar}><img src='./src/menu.svg' /></li>
        {itens.map(item => <li className="itemHeader">{item}</li>)}
      </ul>
    </header>
  )
}

export default function App() {
  return (
    <div>
    <Header />
    <main>
      <ProdutoPrincipal />
      <Informacoes />
      <InfoLoja 
        email={'(99) 912121212'}
        telefone={'jakslçdfjçasj@gmail.com'}
        />
      <Comentarios />
      <ProdRelacionados />
    </main>
    </div>
  )
}
