//Crie a const para a frase aqui

const fraseDada = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
let fraseDadaModificada = fraseDada.replace("verde", "rosa")
let fraseDadaModificada2 = fraseDadaModificada.replace("azul", "laranja")
console.log(fraseDadaModificada2)
console.log(`A string com replace inclui as palavras "verde" e "laranja"?`,
            fraseDadaModificada2.includes("verde" && "laranja"))