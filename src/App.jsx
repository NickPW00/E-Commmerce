import './App.css'
import React from 'react';
import Informacoes from './Informacoes/Informacoes';
import ProdRelacionados from './ProdRelacionados/ProdRelacionados'
import Comentarios from './Comentarios/Comentarios'
import ProdutoPrincipal from './ProdutoPrincipal/ProdutoPrincipal';
import InfoLoja from './InfoLoja/InfoLoja'
import Header from './Header/Header'

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
