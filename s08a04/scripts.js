
function getMorty(event){
    event.preventDefault();

    let idPersonagem = Number(document.querySelector("#idPersonagem").value);

    fetch(`https://rickandmortyapi.com/api/character/${idPersonagem}`)
        .then(response => {
            if(response.status == 200){
                console.log(response);
                return response.json();
            }
            return {image: "https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"};

        })
        .then(dados => {
            console.log(dados);
            let div = document.querySelector("#dadosPersonagem");
            div.innerHTML = JSON.stringify(dados);

            let img = document.querySelector("img");
            img.src = dados.image;
            console.log(dados.image);
        })
        .catch(reject => {
            console.log("ENTROU NO CATCH");
            console.log(reject);
        });

}

let formularioPersonagens = document.querySelector("#formularioPersonagens");
formularioPersonagens.addEventListener("submit", getMorty);
