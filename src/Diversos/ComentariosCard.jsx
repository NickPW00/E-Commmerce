import styles from './ComentariosCard.module.css'

export default function ComentariosCard(props) {
  return(
    <div className={styles.comentariosCard}>
      <div className={styles.infosComent}>
        <div className={styles.infosPerfil}>
          <img className={styles.perfilComent} src={props.imgComent} />
          <span>{props.nomeComent}</span> 
          <span>{props.avaliacaoComent}</span>
        </div>
        <span>{props.dataComent}</span>
      </div>
        <p>{props.conteudoComent}</p>
    </div>
  )
}
