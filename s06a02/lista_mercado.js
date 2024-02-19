const list = document.querySelector('select'); // change ul to select
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  if(myItem){
        const listItem = document.createElement('option'); // change li to option
        const listText = document.createElement('span');
        // const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        // listItem.appendChild(listBtn); 
        // listBtn.textContent = 'Delete'; 
        list.appendChild(listItem);

        // listBtn.addEventListener('click', () => {
        // list.removeChild(listItem);
        // });

        input.focus();
    }
    else{
        alert("Campo de texto vazio, por favor preencher.")
    }
});