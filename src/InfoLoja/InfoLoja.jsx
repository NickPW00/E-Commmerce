import styles from './InfoLoja.module.css'
import InfoLojaCard from './InfoLojaCard/InfoLojaCard'

export default function InfoLoja(props) {
  return (
    <div className={styles.infoLoja}>
      <h2>Informações da Loja</h2>
      <div>
        <div className={styles.infoPrimarioLoja}>
          <div className={styles.infoPrimarioLoja1}>
            <img src="./src/logo.svg"/>
            <h3>Loja</h3>
          </div>
          <div className={styles.infoPrimarioLoja2}>
            <p>email: {props.email}</p>
            <p>Tel: {props.telefone}</p>
          </div>
        </div>
        <div className={styles.infosSecondariasLoja}>
          <InfoLojaCard 
            infoPrincipalSubCard={'+25 mil'}
            infoSubCard={'Clinetes Satisfeitos'}
            />
          <InfoLojaCard 
            infoPrincipalSubCard={'4.7'}
            infoSubCard={'Atendimento Excepcional'}
            />
          <InfoLojaCard 
            infoPrincipalSubCard={'+25 mil'}
            infoSubCard={'Entregas dentro do prazo'}
            />
        </div>
      </div>
    </div>
  )
}