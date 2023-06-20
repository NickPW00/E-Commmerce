import './App.css'
import React from 'react';
import Informacoes from './Informacoes/Informacoes';
import ProdRelacionados from './ProdRelacionados/ProdRelacionados'
import Comentarios from './Comentarios/Comentarios'
import ProdutoPrincipal from './ProdutoPrincipal/ProdutoPrincipal';
import InfoLoja from './InfoLoja/InfoLoja'

// 1. Fazer o box do Detalhes, Ficha tecnica, Dúvidas
// 2. Fazer card de produtos relacionados e sua area
// 3. Fazer Menu principal, por links para serem simulados, como links para produtos, ....
// 4. Fazer o json da ficha tecnica
// 4. Fazer Parte de venda do produto
// 5. Fazer comentários em Avaliação do Cliente
// 6. Fazer o tópico 6 dentro do Duvidas frequentes

// Detalhes finais: Remodelar a distribuição para mobile de produtos relacionados.
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
