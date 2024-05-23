

const guest = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni',  'George Clooney', 'Amal Clooney', 'Fedez', 'Amadeus', 'Fiorello']

const table = guest.map((vip , i ) => {
    vip = {
        tablenName : "Tavolo Vip" , 
        guestName : vip ,
        place : i + 1,
    }
    return vip
}) ;    
console.log(table)