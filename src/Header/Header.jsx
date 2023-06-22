import "../App.css";

const itens = ['Recomendados', 'Eletronicos', 'Eletrodomesticos', 'Smartphones', 'Televisões', 'Diversos']
 
export default function Header() {
  const itemHeader = document.querySelectorAll('.itemHeader');
  
  function toggleColapsar() {
    itemHeader.forEach(item => item.classList.toggle('colapsar'))
  }
  
  return (
    <header className="header">
      <ul className="itensMenuHeader">
        <li className="logoHeader"><img src='./src/logo2.svg' /></li>
        <li className="inputHeader"><input type='text' /></li>
        <li className="menuHeader"><img src='./src/menu.svg' onClick={toggleColapsar}/></li>
        {itens.map((item, index) => <li className="itemHeader" key={index}>{item}</li>)}
      </ul>
    </header>
  )
}