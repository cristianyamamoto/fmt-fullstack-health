// let year = prompt("Qual é o ano do seu nascimento?");
// let month = prompt("Qual é o mês do seu nascimento?");
// let day = rompt("Qual é o dia do seu nascimento?");

let birthDate = prompt("Qual é data do seu nascimento? (FORMATO YYYY/MM/DD)")
let splitDate = birthDate.split("/");
let year = splitDate[0];
let month = splitDate[1];
let day = splitDate[2];

function calculateAge(year, month, day){
    console.log(`${year}/${month}/${day}`);
    if (!moment(`${year}/${month}/${day}`, 'YYYY/MM/DD',true).isValid()) {
        alert("A data inserida não é válida.");
        return 0
    }
    let today = new Date();
    //console.log(today);
    let birthDate = new Date(Number(year), Number(month) - 1, Number(day));
    //console.log(birthDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    //console.log(age);
    let monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference == 0 && today.getDate() < birthDate.getDate()) ) {
        age--;
    }
    //console.log(age);
    return age;
}

let age = calculateAge(year, month, day);
age ? alert("Você tem " + age + " anos.") : alert("Não foi possível calcular sua idade.");
