let idade = (prompt('Qual sua idade?'));
if (idade >= 18) {
    alert('Você é maior de idade!')
}   else{
	alert('Vocé é menor de idade!')
}   

let ensinoMedio = confirm('Você terminou o ensino médio? Se sim aperte OK, Caso contrário em CANCELAR!');
if(ensinoMedio === true) {
    alert('Terminei o ensino médio!')
}   else{
    alert('Não terminei o ensino médio!')
}

let isCursandoOutraFaculdade = confirm('Você está cursando alguma faculdade? Se sim aperte OK, caso conntrário em CANCELAR!');
if(isCursandoOutraFaculdade === true) {
    alert('Você está cursando uma faculdade!')
}   else {
    alert('Você não está cursando outra faculdade!')
}
