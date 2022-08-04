let nacionalidade = prompt('Qual a sua nacionalidade?').toLowerCase()

if(nacionalidade === 'brasileira' || (nacionalidade === 'brasileiro')) {
    console.log('Sua nacionalidade é: ' + nacionalidade + '!')
}   else if(nacionalidade === 'argentina' || (nacionalidade === 'argentino')) {
    console.log('Sua nacionalidade é: ' + nacionalidade + '!')
}   else if(nacionalidade === 'uruguaia' || (nacionalidade === 'uruguaio')) {
    console.log('Sua nacionalidade é: ' + nacionalidade + '!')
}   else if(nacionalidade === 'chilena' || (nacionalidade === 'chileno')) {
    console.log('Sua nacionalidade é: ' + nacionalidade + '!')
}   else if(nacionalidade === 'colombiana' || (nacionalidade === 'colombiano')) {
    console.log('Sua nacionalidade é: ' + nacionalidade + '!')
}   else {
    console.log('Nacionalidade não encontrada')
}