const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

button.addEventListener('click', function () {
    if (input.value.trim() != '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = input.value;
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click',function(){
            list.removeChild(listItem);
            input.focus();
        });

        input.value = '';

        listItem.append(deleteButton);

        list.append(listItem);
    }
    else {
        input.placeholder = 'Enter chapter here.'
    }
    input.focus();
});