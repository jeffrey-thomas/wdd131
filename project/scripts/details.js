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
    updatePark()
})

const parkName = document.querySelector('#parkName')
const map = document.querySelector('#map')
const info = document.querySelector('#info')
updatePark()

function urlFormatAddress(address){
	return address.replace(' ','%20').replace(',','%2c');
}

function updatePark(){
    console.log(selection)
    const park = parks[selection]
    parkName.innerText = park.name
    map.innerHTML =
    `<div>
        <iframe 
            src="https://maps.google.com/maps?output=embed&amp;hl=en&amp;q=${urlFormatAddress(park.address)}&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B"
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0">
        </iframe>
    </div>`

    let description = 
    `
        <img src='./images/${park.image}' alt='${park.name} image'>
        <p>${park.address.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
        <br>
        <p>Size: ${park.size}</p>
        <ul>
    `
    features.forEach((feature)=>{
        if(park.features[feature])
            description += `<li>${featureDescriptions[feature]}</li>`;
    })

    description += `</ul>`

    info.innerHTML=description

}