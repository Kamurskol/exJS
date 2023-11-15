
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    //a var fano pegará o valor do elemento com id "txtano"
    var fano = document.getElementById('txtano')
    var res = document.getElementById( 'res')
//var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano){
        alert('[ERRO] Acho que você informou algo errado.')
    }else{
//está pegando o elemento por nome, pq fsex tem id diferentes
        var fsex = document.getElementsByName('radsex')
//usa Number para transformar o fano.value em num para a var idade
        var idade = ano - Number(fano.value)
        var gênero = ''

//vai criar a img no html
        var img = document.createElement('img')
//os atributos q a img vai ter
        img.setAttribute('id', 'foto')
        


        if (fsex[0].checked){
            gênero = 'um homem'
            
            if (idade >= 0 && idade <= 11){
                //criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        }
        else{
            gênero = 'uma mulher'
             
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.innerHTML = `Você é ${gênero} de ${idade} anos`
        res.appendChild(img)
        
    }
}