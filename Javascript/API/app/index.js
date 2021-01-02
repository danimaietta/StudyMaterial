import { getAllMovies } from './APIs/movies'
import { getAPOD, getEarth } from './APIs/nasa'

/*
    movies api
*/
getAllMovies().then(movies => console.log('movies', movies))

/*
    nasa api
*/

// this example is meant to fail
// earth: lon, lat, date, dim
getEarth(-95, 29.78, '2018-01-01', 0.10).then(earth => console.log('earth', earth)) 

// apod, sometimes fails for date
getAPOD().then(apod => console.log('apod', apod))