const menu = document.querySelector('#menu');
const nav = document.querySelector('nav');

menu.addEventListener('click',()=>{
    menu.classList.toggle('open');
    nav.classList.toggle('open');
})

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Seattle Washington Temple",
        location: "Bellevue, Washington, United States",
        dedicated:"1980, November, 17",
        area: 110000,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/400x250/seatlle-temple-lds-933559-wallpaper.jpg"
    },
    {
        templeName: "Portland Oregon Temple",
        location: "Lake Oswego, Oregon, United States",
        dedicated:"1989, August, 19",
        area:80500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/2018/400x250/Portland-Oregon-Temple10.jpg"
    },
    {
        templeName: "Columbia River Washington Temple",
        location: "Richland, Washington, United States",
        dedicated: "2001, November, 18",
        area:16880,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-river-washington/400x250/columbia-river-washington-temple-1143561-wallpaper.jpg"
    }
  ];

function createTempleCards(templeList){
    //Empty Gallery
    const gallery = document.querySelector("#gallery");
    while(gallery.firstChild)
        gallery.removeChild(gallery.firstChild)

    //Add new temple cards
    for(let i=0; i < templeList.length; i++){
        const temple = templeList[i]
        const div = document.createElement('div');
        div.className='temple-card';
        div.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>
                <span class='label'>Location: </span>
                <span class='value'>${temple.location}</span>
            </p>
            <p>
                <span class='label'>Dedicated: </span>
                <span class='value'>${temple.dedicated}</span>
            </p>
            <p>
                <span class='label'>Size: </span>
                <span class='value'>${temple.area} sq ft</span>
            </p>
            <img src='${temple.imageUrl}' alt='${temple.templeName} Image' loading='lazy'>
        `;
        gallery.appendChild(div)
    }
}

createTempleCards(temples)

document.querySelector('#nav-home').addEventListener('click',()=>{
    createTempleCards(temples)
})

document.querySelector('#nav-old').addEventListener('click',()=>{
    createTempleCards(temples.filter((temple)=>temple.dedicated < "1900" ))
})

document.querySelector('#nav-new').addEventListener('click',()=>{
    createTempleCards(temples.filter((temple)=>temple.dedicated > "2000" ))
})

document.querySelector('#nav-large').addEventListener('click',()=>{
    createTempleCards(temples.filter((temple)=>temple.area > 90000 ))
})

document.querySelector('#nav-small').addEventListener('click',()=>{
    createTempleCards(temples.filter((temple)=>temple.area < 10000 ))
})