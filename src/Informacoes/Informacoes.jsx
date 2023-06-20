import React from 'react'
import InformacoesCard from './InformacoesCard/InformacoesCard'
import Duvidas from './Duvidas/Duvidas'

const descricao = "A televisão 8K é uma obra-prima tecnológica que oferece uma experiência visual impressionante. Com uma resolução quatro vezes superior à das TVs 4K e 16 vezes maior que a das TVs Full HD, essa televisão proporciona uma nitidez inigualável e uma clareza de detalhes incrível. Cada cena ganha vida com cores vibrantes, contraste aprimorado e uma profundidade de imagem impressionante. <br />Equipada com tecnologia de ponta, essa televisão conta com recursos avançados, como HDR (High Dynamic Range) e Dolby Vision, que ampliam ainda mais a gama de cores e a faixa dinâmica, tornando cada frame uma obra de arte visual. <br /> Além disso, o painel OLED oferece pretos profundos e um contraste excepcional, garantindo imagens mais realistas e vívidas. Essa TV também é uma Smart TV, permitindo acesso a uma infinidade de conteúdos e aplicativos de streaming populares. Com conexão Wi-Fi integrada e compatibilidade com assistentes de voz, como Amazon Alexa e Google Assistant, você pode controlar a TV e explorar seus recursos com facilidade.<br /> Com design elegante e bordas ultrafinas, essa televisão 8K não apenas proporciona uma qualidade de imagem extraordinária, mas também se destaca como um elemento de decoração moderno em qualquer ambiente. Prepare-se para uma experiência imersiva sem precedentes, mergulhando em um mundo de detalhes deslumbrantes e cores exuberantes com essa deslumbrante televisão 8K."

export default function Informacoes() {
  return (
    <div>
      <InformacoesCard nome="Detalhes" infos={descricao} />
      <InformacoesCard nome="Ficha Tecnica" infos="aaaaa" />
      <InformacoesCard nome="Dúvidas Frequentes" infos={<Duvidas />} />
    </div>)
}