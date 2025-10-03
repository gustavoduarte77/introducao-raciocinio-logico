// Exemplo do conector NOT (!)

// Este conector INVERTE o valor lógico da condição.
// Se a condição é verdadeira, o '!' a torna falsa, e vice-versa.

// Eu posso dirigir caso:
// Maior de idade
// Possuir habilitação
// ser brasileiro
//-------------------------------//
//--------------Contexto de Validação-----------------//
//-------------------------------//
let idade = 18
let possuocnh= true
nacionalidade = 'brasileiro'
//-------------------------------//
//--------------Contexto de Validação-----------------//
//-------------------------------//
if(!(idade>=18 && possuocnh == true && nacionalidade== "brasileiro")){
console.log("eu posso dirigir")
}else {
  console.log("eu não posso dirigir")
}