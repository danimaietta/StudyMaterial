const URL = 'https://api.nasa.gov'
const CLIENT_ID = '529kkVQ3A0zFOqvGccKpEq21sRHEOHjJY9f2vPfN'

// APOD: Astronomy Picture Of the Day
export function getAPOD(){
    return fetch(`${URL}/planetary/apod?api_key=${CLIENT_ID}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('NASA getAPOD service', error))
}

// Earth: satelital img and info from accordin to date and coordinates of the earth
export function getEarth(lon, lat, date, dim){
    return fetch(`${URL}/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=${dim}&api_key=${CLIENT_ID}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log('NASA getEarth service', error))
}

// fetch es una función asincronica