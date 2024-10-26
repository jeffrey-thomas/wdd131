let filters = {
    benches:false,
    tables:false,
    playLawn:false,
    playground:false,
    pavedTrail:false,
    soccer:false,
    restroom:false,
    waterAccess:false,
    swings:false,
    multiuseField:false,
    halfcourt:false,
    fullcourt:false,
    skatePark:false,
    natureTrail:false,
    waterFountain:false,
    horseshoes:false,
    tennis:false,
    softball:false,
    discGolf:false,
}

let results = getMatchingParks()
createResultsGallery(results)

const checkboxes = document.querySelectorAll('input[type="checkbox"]')
const resultCounter = document.querySelector('#results')
resultCounter.innerHTML = `Results (${results.length})`

checkboxes.forEach((checkbox)=>{
	checkbox.addEventListener('click',()=>{
		toggleFilter(checkbox.id)
		results = getMatchingParks()
		createResultsGallery(results)
		resultCounter.innerHTML = `Results (${results.length})`
	})
	checkbox.nextSibling.innerHTML = `${featureDescriptions[checkbox.id]}`
})

function setFilterOn(feature){
    filters[feature] = true;
}

function setFilterOff(feature){
    filters[feature] = false;
}

function toggleFilter(feature){
    filters[feature] = !filters[feature]
}

function getMatchingParks(){
    return parks.filter((park)=>{
        for(let i=0; i < features.length; i++){
            if(filters[features[i]] && !park.features[features[i]])
                return false;
        }
        return true;
    })
}

function createResultsGallery(parkList){
    //Empty Gallery
    const gallery = document.querySelector("#gallery");
    while(gallery.firstChild)
        gallery.removeChild(gallery.firstChild)

    //Add new parks
    for(let i=0; i < parkList.length; i++){
        const park = parkList[i]
        const div = document.createElement('div');
        div.className='park-card';
        div.innerHTML = `
            <h4>${park.name}</h4>
            <p class='address'>${park.address.replace(/(?:\r\n|\r|\n)/g, '<br>')}</p>
            <img src='./images/${park.image}' alt='${park.name} image' loading='lazy'>
			<p>Click to see details.</p>
        `;
		div.addEventListener('click',()=>{
			setSelection(parks.indexOf(park));
			window.location.href='./details.html'
		})
        gallery.appendChild(div)
    }
}


const filterMenu = document.querySelector('#filterMenu');
const fieldsets = document.querySelectorAll('fieldset')

filterMenu.addEventListener('click',()=>{
    filterMenu.classList.toggle('open');
	fieldsets.forEach((fieldset)=>{
		fieldset.classList.toggle('open')
	})
})