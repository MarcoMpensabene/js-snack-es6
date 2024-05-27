// BONUS 1:  SNACK 5
// > Abbiamo questa lista di articoli di moda:
// name        type      color
// Poppy       tshirt    red
// Jumping     occhiali  blue
// CrissCross  scarpe    black
// Jenny       borsa     pink
// > Questi articoli sono inseriti in un array di oggetti.
// > Dobbiamo attaccare a ognuno un cartellino position con una lettera dell'alfabeto generata casualmente e inserire gli oggetti così modificati in un nuovo array di oggetti.


const article = [
    {
        "name" : "Poppy" , "type" : "t-shirt" , "color" : "red"
    },
    {
        "name" : "Jumping" , "type" : "occhiali" , "color" : "blue"
    },
    {
        "name" : "CrissCross" , "type" : "scarpe" , "color" : "black"
    },
    {
        "name" : "Jenny" , "type" : "borsa" , "color" : "pink"
    },
]


const newArray = article.map((element , random) => {
    random = () => String.fromCharCode(0|Math.random()*26+97)
    element ={
        "name" : element.name ,
        "type" : element.type ,
        "color" : element.color ,     
        "position" : random() , 
    }
    return element;
}) 



console.log(article)
console.log(newArray)