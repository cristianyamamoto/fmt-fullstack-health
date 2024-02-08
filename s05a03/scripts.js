let year = Number(prompt("Qual é o ano do seu nascimento?"));
let month = Number(prompt("Qual é o mês do seu nascimento?")) - 1;
let day = Number(prompt("Qual é o dia do seu nascimento?"));

function parseAge(year, month, day){
    let today = new Date();
    //console.log(today);
    let birthDate = new Date(year, month, day);
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

alert("Você tem " + parseAge(year, month, day) + " anos.");