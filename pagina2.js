function criaCartao (categoria, pergunta,resposta){
    let container =document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML=`
    
    <div class="conteudo-cartao" onclick = "mostraRespota(this)">
      <h3>${categoria}</h3>
      <div class="pertunta-cartao">
      <p>${pergunta}</p>
       </div>
       <div class="reposta-cartao">
      <p>${resposta}</p>
       </div>
  </div>
  `
  
  container.appendChild(cartao);
   }

   function mostraRespota(card){
    const reposta =card.querySelector(' .resposta-cartao' );
      if(resposta.style.display === 'none') {
        reposta.style.display='block';
      }
      else(
        reposta.style.display = 'none';
      )
   }
  