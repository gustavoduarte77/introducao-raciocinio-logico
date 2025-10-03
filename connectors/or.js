// Exemplo do conector OR (||)

// Este conector retorna 'true' se PELO MENOS UMA das condições forem verdadeiras.

// eu posso votar caso:
//  eu seja Homem ou Mulher
// Tenha mais de 16 anos 
// Tenha título de eleitor
//-------------------------------------------//
//-------- CONTEXTO DE ATRIBUIÇÃO ------------//
let sexo= 'M' // ou 'M'
let idade= 17
let  possuiTitulodeEleitor = true

  //--------------------------------------------//
 //-------- CONTEXTO DE VALIDAÇÃO -------------//
//--------------------------------------------//
if((sexo== 'H' || sexo== 'M') && idade>=16 && possuiTitulodeEleitor == true){
    console.log('Você pode votar')
} else{
    console.log('Você não pode votar')
}