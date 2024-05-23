

const students = [
    {Id : 213 , Name : "Giuseppina della Rovere" , Grades : 78},
    {Id : 110 , Name : "Paola Cortellessa" , Grades : 96},
    {Id : 250 , Name : "Andrea Mantegna" , Grades : 48},
    {Id : 145 , Name : "Gaia Borromini" , Grades : 74},
    {Id : 196 , Name : "Luigi Grimaldello" , Grades : 68},
    {Id : 102 , Name : "Piero della Francesca" , Grades : 50},
    {Id : 120 , Name : "Francesca da Polenta" , Grades : 84},
];

console.log(students)

const studentsUpperCase = students.map(studentsUp => {
    return  studentsUp.Name.toUpperCase() // > RICORDA DI INSERIRE LE PARENTESI GRAZIE MILLE ME DEL FUTURO 
})

console.log(studentsUpperCase)

const goodStudents = students.filter(studentsG => {
    if (studentsG.Grades > 70){
        return true
    }
})

console.log(goodStudents)

const goodStudentsId = students.filter(studentsGiD => {
    if (studentsGiD.Grades > 70 && studentsGiD.Id > 120){
        return true
    }
})

console.log(goodStudentsId)

