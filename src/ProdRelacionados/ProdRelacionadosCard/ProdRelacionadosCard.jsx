import styles from './ProdRelacionadosCard.module.css'

export default function ProdRelacionadosCard(props) {
  let quantAvaliacao = Math.round(Math.random() * 10**4)
  let avaliação = (Math.random() * 5).toFixed(1)
  return (
    <div className={styles.cardProdutosRelacionados}>
      <img className={styles.imagemCard} src={props.imgProduto} />
      <div className={styles.infosCard}>
        <div>
          <h3>{props.nomeProduto}</h3>
          <span>Nota: {avaliação}</span> / <span>{quantAvaliacao} avaliações</span>
        </div>
        <div className={styles.valorCard}>R${props.valorProduto}</div>
      </div>
    </div>
  )
}