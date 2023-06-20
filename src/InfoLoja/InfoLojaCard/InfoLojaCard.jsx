import styles from './InfoLojaCard.module.css'

export default function InfoLojaCard(props) {
  return (
  <div className={styles.infoLojaSubCard}>
    <div 
      className={styles.infoPrincipalSubCard}>
      {props.infoPrincipalSubCard}
    </div>
    <p className={styles.infoSubCard}>{props.infoSubCard}</p>
  </div>
  )
}