import styles from './InformacoesCard.module.css'
import React from 'react'

class InformacoesCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      infoExposto: false
    }
  }

  exportItem = () => {
    this.setState(prevState => ({
      infoExposto: !prevState.infoExposto
    }))
  }
  
  render() {
    const { infoExposto } = this.state
    const girar = {  
      "rotate": "-90deg"
    }
    
    return(
      <div className={styles.cardInformacoes}>
        <div onClick={this.exportItem} className={styles.descCard}>
          <h2>{this.props.nome}</h2>
          <img style={!infoExposto ? girar : null} src='./src/arrow.svg'/>
        </div>
        {infoExposto ? 
        <div className={styles.infosCard}>
          {this.props.infos}
        </div> :
        null}
      </div>
    )
  }
}

export default InformacoesCard