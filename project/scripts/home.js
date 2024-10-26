const select = document.querySelector('#park');


parks.forEach((park,index)=>{
    const option = document.createElement('option');
    option.value=index;
    option.innerText = park.name;
    select.appendChild(option);
})

if(selection != -1)
    select.value = selection;

select.addEventListener('change',()=>{
    setSelection(select.value)
    window.location.href='./details.html'
})
