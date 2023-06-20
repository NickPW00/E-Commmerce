import ComentariosCard from '../../Diversos/ComentariosCard'
import React from 'react';

class Duvidas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: null
    }
  }

  componentDidMount() {
    fetch('/data/duvidas.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          dados: data
        });
      });
  }

  render() {
    const { dados } = this.state
    return (
      <div className='duvidasCard'>
        {dados === null ? null : dados.map(item => {
          const dataInicial = new Date('2021-01-01');
          const dataFinal = new Date('2023-06-22');
          const diferencaMilissegundos = dataFinal - dataInicial;
          const milissegundosAleatorios = Math.floor(Math.random() * diferencaMilissegundos);
          const dataAleatoria = new Date(dataInicial.getTime() + milissegundosAleatorios);
          return(
            <>
            <ComentariosCard
              key={item.usuario}
              nomeComent={item.usuario}
              avaliacaoComent={null}
              dataComent={dataAleatoria.toLocaleDateString()}
              conteudoComent={item.duvida}
              imgComent={item.imagem_usuario}
            />
            <p>{item.resposta}</p>
            </>
          )
        })}
      </div>
    )
  }
}

export default Duvidas