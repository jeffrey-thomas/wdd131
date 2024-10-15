const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach((chapter)=>{
    displayList(chapter);
})

button.addEventListener('click', function () {
    if (input.value.trim() != '') {
        displayList(input.value);
        chaptersArray.push(input.value);

        setChapterList();
        input.value = '';
        input.focus();

        


    }
    else {
        input.placeholder = 'Enter chapter here.'
    }
    input.focus();
});

function displayList(item){
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');

        listItem.textContent = item;
        deleteButton.textContent = '❌';
        listItem.append(deleteButton);
        list.append(listItem);

        deleteButton.addEventListener('click',function(){
            list.removeChild(listItem);
            deleteChapter(listItem.textContent);
            input.focus();
        });
}

function setChapterList(){
    localStorage.setItem('chapter-list',JSON.stringify(chaptersArray))
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('chapter-list'))
}

function deleteChapter(chapter){
    chapter = chapter.slice(0,chapter.length-1)
    chaptersArray = chaptersArray.filter((item)=>item!==chapter)
    setChapterList()
}