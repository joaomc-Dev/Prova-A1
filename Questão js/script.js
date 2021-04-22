const botao = document.querySelector('#btn1');
const input = document.querySelector('#item');

input.focus();
botao.addEventListener("click", function() {
        
    if (input.value){
        const lista = document.querySelector('#pokemons');
        const item = document.createElement('li');
        const botaoLista= document.createElement('button');
        const span = document.createElement('span');
    
        
        
        item.textContent = input.value;
        botaoLista.textContent = 'Excluir';
        lista.appendChild(item);
        lista.appendChild(botaoLista); 
        lista.appendChild(span);       
        input.value = '';
      
       

        botaoLista.addEventListener("click", function() {
            lista.removeChild(item);
            lista.removeChild(botaoLista);
         
        })
    }
    else{
        alert("Digite o nome do Pokemon que deseja adicionar")
        
    }
    input.focus(); 
});