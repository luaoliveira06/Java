let idade = Math.random()*10;
let idadeInteira = idade.toFixed(2) * idade.toFixed(0);

console.log(idade)
console.log(idadeInteira)

if (idadeInteira < 18){
    console.log( 'idade '+idadeInteira+' '/n'+'pessoa menor de idade');
}
else if (idadeInteira < 59){
    console.log('pessoa adulta')
}
else {
    console.log('pessoa de terceira idade ')
}