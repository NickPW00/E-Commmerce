import ProdutoPrincipalCard from './ProdutoPrincipalCard/ProdutoPrincipalCard'
import React from 'react';

class ProdutoPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: null
    };
  }

  
  
  fetchDoArquivo = (num) => {
    fetch('/data/produtoPrincipal.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          produto: data[num]
        })
      );
  }
  
  componentDidMount() {
    this.fetchDoArquivo(0)
  }

  render() {
    const { produto } = this.state;
    let numAlea = Math.random();
    let numAval = Math.floor(numAlea*10**5);
    let aval = (numAlea*5).toFixed(2);
    return (
      <>
      {produto === null ?
        null :
        <ProdutoPrincipalCard 
        imgProduto={produto.imagem}
        nomeProduto={produto.codigo_produto}
        avaliacaoProduto={`${aval} (${numAval})`}
        valorAtualProduto={`R$ ${produto.valor_atual}`}
        valorAnteriorProduto={`R$ ${produto.valor_anterior}`}
        rendeVersao1={() => this.fetchDoArquivo(0)}
        rendeVersao2={() => this.fetchDoArquivo(1)}
        rendeVersao3={() => this.fetchDoArquivo(2)}
        />   }
      </>
    );
  }
}

export default ProdutoPrincipal