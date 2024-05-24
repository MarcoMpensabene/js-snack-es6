// > Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// > Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// > Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squad = [
    {nome : "inter" , point : 0 , foul : 0},
    {nome : "juve" , point : 0 , foul : 0},
    {nome : "lazio" , point : 0 , foul : 0},
    {nome : "polpettari" , point : 0 , foul : 0},
    {nome : "roma" , point : 0 , foul : 0},
    {nome : "gelatai" , point : 0 , foul : 0}
]

console.log(squad)

function getRandomNumber(min , max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let squadRandom = squad.map(element => {
    let randomNum = getRandomNumber(1, 10)
    if (element.point === 0 && element.foul === 0) {
        return {  point : randomNum , foul : randomNum};
    }
        return element;
    })

console.log(squadRandom)

const newSquad = squad.map(({ nome , point , foul }) => ({ nome, foul : getRandomNumber(1 , 10) }));

console.log(newSquad)