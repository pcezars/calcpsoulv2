function calcularBroke () {
    let pokeball = document.getElementById('balls').value;
    let pokeballInt = parseInt(pokeball);
    let breaks = document.getElementById('used').value;
    let breaksInt = parseInt(breaks);
    let trevo = document.getElementById('trevo').checked;

    if (pokeball !== '#'){
        if (trevo == true) {
            let porcentagem = 0.10;
            let calculo = pokeball * breaks * 7.8 * porcentagem;
            let pontos = pokeball * breaks * 7.8 - calculo;
            let final = Math.ceil(pontos);
    
            document.getElementById("resultado").innerHTML = "<center>Resultado já reduzido os 10% e arredondado para cima <br>(Ex: 305.7 > 306):<br><strong> " + final + " pontos.</strong></center>";        
    
        } else {
            let pontos = pokeball * breaks * 7.8;
            
            let final = Math.ceil(pontos);
            document.getElementById("resultado").innerHTML = "<center>Resultado arredondado para cima:<br><strong> " + final + " pontos.</strong></center>";
    
        } 
    } else {
        document.getElementById("resultado").innerHTML = "<center><strong>Por favor, selecione o tipo de pokébola usado.</strong></center>"; 
    }
    
               

    
}

function limparCampos() {
    location.reload();
}

function calcular (){
    let pontos = document.getElementById('pontos').value;
    let poke = document.getElementById('pokeball').value;
    let great = document.getElementById('greatball').value * 2;
    let ultra = document.getElementById('ultraball').value * 3;

    let pontosTotal = (Number(poke) + Number(great) + Number(ultra));

    document.getElementById('totalPontos').value = pontosTotal

    if(pontosTotal == pontos) {
        let total = document.getElementById('totalPontos');
        total.className += ' bg-success';
    } else if (pontosTotal > pontos) {
        let total = document.getElementById('totalPontos');
        total.className += ' bg-danger';
    } else if(pontosTotal < pontos) {
        const total = document.getElementById('totalPontos');
        const removeClass = total.classList;
        removeClass.remove('bg-success', 'bg-danger')
    }
}