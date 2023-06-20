import React from 'react';

import styles from './ProdRelacionados.module.css';
import ProdRelacionadosCard from './ProdRelacionadosCard/ProdRelacionadosCard';

class ProdRelacionados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      produtos: null
    };
  }

  componentDidMount() {
    fetch('/data/produtos.json')
      .then(response => response.json())
      .then(data =>
        this.setState({
          produtos: data
        })
      );
  }

  render() {
    const { produtos } = this.state;

    return (
      <section className={styles.ProdRel}>
        <h2>Produtos Recomendados</h2>
        <div className={styles.Pai}>
          {produtos !== null ? (
            Object.entries(produtos).map(([chave , value]) => (
              <ProdRelacionadosCard 
                imgProduto={value.img}
                nomeProduto={value.nome}
                valorProduto={value.valor}
                key={value.key}
              />
            ))
          ) : (
            <p>Carregando Informações...</p>
          )}
        </div>
      </section>
    );
  }
}

export default ProdRelacionados;