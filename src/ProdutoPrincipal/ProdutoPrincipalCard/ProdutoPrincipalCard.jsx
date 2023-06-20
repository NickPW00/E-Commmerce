import styles from './ProdutoPrincipalCard.module.css'

export default function ProdutoPrincipalCard(props) {
  return (
    <div className={styles.produtoPrincipal}>
      <img src={props.imgProduto} className={styles.imgProduto} />
      <div className={styles.infosProduto}>
        <h2 className={styles.nomeProduto}>{props.nomeProduto}</h2>
        <span>Avaliação do produto</span> <span>{props.avaliacaoProduto}</span>
        <div className={styles.versoesImgProduto}>
          <button onClick={props.rendeVersao1}>Versão 1</button>
          <button onClick={props.rendeVersao2}>Versão 2</button>
          <button onClick={props.rendeVersao3}>Versão 3</button>
        </div>
        <div className={styles.valoresProduto}>
          <span className={styles.valoresProduto1}>{props.valorAtualProduto}</span>
          <span className={styles.valoresProduto2}>{props.valorAnteriorProduto}</span>
        </div>
        <div className={styles.comprarProduto}>
          <button>Comprar</button>
          <button>Adicionar Ao Carrinho</button>
        </div>
      </div>
    </div>
  )
}