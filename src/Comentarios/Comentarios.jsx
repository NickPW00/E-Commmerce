import React from 'react'

import styles from './Comentarios.module.css';
import ComentariosCard from '../Diversos/ComentariosCard'


class Comentarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comentarios: null,
      notas: []
    }
  }
  
  componentDidMount() {
    fetch('/data/comentarios.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          comentarios: [...data],
        });
      });
  }
    
  render() {
    const { comentarios, notas } = this.state
    
    let sum = notas.reduce((acum, valAt) => acum + valAt, 0)
    let media = (sum/notas.length).toFixed(2)
    let avaliacoesTotais = Math.round(Math.random()* 10**4)
    return(
      <div className={styles.comentarios}>
        <h2>Avaliações</h2>
        <p className={styles.mediaComentarios}>
          Media: {media} de {avaliacoesTotais} Avaliações
        </p>
        <div className={styles.boxComentarios}>
          {comentarios === null ? null : 
          comentarios.map(perfil => {
            const numAleatorio = (Math.random() * 5),
                  avaliacao = (5 - numAleatorio.toFixed(1)),
                  indice = Math.floor(numAleatorio),
                  comentario = perfil.avaliacoes[indice].comentario,
                  dataInicial = new Date('2021-01-01'),
                  dataFinal = new Date('2023-06-22'),
                  diferencaMilissegundos = dataFinal - dataInicial,
                  milissegundosAleatorios = Math.floor(Math.random() * diferencaMilissegundos),
                  dataAleatoria = new Date(dataInicial.getTime() + milissegundosAleatorios)
            notas.push(avaliacao)
            return(
              <ComentariosCard 
            key={perfil.nome}
            nomeComent={perfil.nome}
            avaliacaoComent={'Nota: '+ avaliacao.toFixed(1)}
            dataComent={dataAleatoria.toLocaleDateString()}
            conteudoComent={comentario}
            imgComent={perfil.img}
          />
            )
          })}
        </div>
      </div>
    )
  }
}

export default Comentarios