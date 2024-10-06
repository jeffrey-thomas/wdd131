const windchill = document.querySelector('#windchill');

const temperature = 65;
const windspeed = 5;

function calculateWindchill(temperature, windspeed){
    return 35.74 + 0.6215*temperature - 35.75*(windspeed**0.16) + 0.4275*temperature*(windspeed**0.16)
}

const factor = (temperature<=50 && windspeed>3) ? calculateWindchill(temperature, windspeed) : 'N/A'

windchill.innerHTML = `${factor}`