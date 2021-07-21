import basededatos from './basededatos.js';

const pelis = basededatos.peliculas;
const directores = basededatos.directores;
const paises = basededatos.paises;
const generos = basededatos.generos;
const criticos = basededatos.criticos;
const calif = basededatos.calificaciones;
/**
* Devuelve el promedio de anios de estreno de todas las peliculas de la base de datos.
*/
export const promedioAnioEstreno = () => {
    // Ejemplo de como accedo a datos dentro de la base de datos
    // console.log(basededatos.peliculas);
    let promedio = pelis.reduce((acum, item) => {
        acum += item.anio;
        return acum
    }, 0);
    promedio = promedio / pelis.length;
    //console.log(promedio);    
    return [promedio];
};

/**
* Devuelve la lista de peliculas con promedio de critica mayor al numero que llega
* por parametro.
* @param {number} promedio
  */
export const pelicuasConCriticaPromedioMayorA = (promedio) => {
    //Crear un array con id de pelicula donde dentro agrupa las calificaciones de la misma
    const grupoPeliculas = calif.reduce((grupoPelis,item)=>{
        const idPeli = item.pelicula
        //console.log(idPeli)
        if (grupoPelis[idPeli] == null) grupoPelis[idPeli]=[]
        grupoPelis[idPeli].push(item)
        return grupoPelis
    }, {})
    //console.log (grupoPeliculas);
    // Arma array con peli y putuacion promedio
    const lista=[];
    for (var i in grupoPeliculas){
        //calcula promedio de una pelicula
        const rta = grupoPeliculas[i].reduce((promedioXPeli, item)=> {
            //console.log(item)
               return promedioXPeli += item.puntuacion / grupoPeliculas[1].length
        },0)
        lista.push({idPelicula: i, puntuacionPromedio: rta})
    }
    console.log(lista)
    //aplicar filtro para saber cuales pelis tienen puntuacionPromedio mayor a promedio
    const pelisSeleccionadas = lista.filter((unObj)=>{
        return unObj.puntuacionPromedio > promedio
    });
    console.log(pelisSeleccionadas)
    return [];
};


/**promedio por pelicula */
//const promxpeli = calif.map

/**
* Devuelve la lista de peliculas de un director
* @param {string} nombreDirector
*/
export const peliculasDeUnDirector = (nombreDirector) => {
    
    return [];
};

/**
* Devuelve el promdedio de critica segun el id de la pelicula.
* @param {number} peliculaId
*/
export const promedioDeCriticaBypeliculaId = (peliculaId) => {
    return [];
};

/**
 * Obtiene la lista de peliculas con alguna critica con
 * puntuacion excelente (critica >= 9).
 * En caso de no existir el criticas que cumplan, devolver un array vacio [].
 * Ejemplo del formato del resultado: 
 *  [
        {
            id: 1,
            nombre: 'Back to the Future',
            anio: 1985,
            direccionSetFilmacion: {
                calle: 'Av. Siempre viva',
                numero: 2043,
                pais: 'Colombia',
            },
            directores: [1],
            generos: [1, 2, 6]
        },
        {
            id: 2,
            nombre: 'Matrix',
            anio: 1999,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Argentina'
            },
            directores: [2, 3],
            generos: [1, 2]
        },
    ],
 */
export const obtenerPeliculasConPuntuacionExcelente = () => {
    // Ejemplo de como accedo a datos dentro de la base de datos
    // console.log(basededatos.peliculas);
    return [];
};

/**
 * Devuelve informacion ampliada sobre una pelicula.
 * Si no existe la pelicula con dicho nombre, devolvemos undefined.
 * Ademas de devolver el objeto pelicula,
 * agregar la lista de criticas recibidas, junto con los datos del critico y su pais.
 * Tambien agrega informacion de los directores y generos a los que pertenece.
 * Ejemplo de formato del resultado para 'Indiana Jones y los cazadores del arca perdida':
 * {
            id: 3,
            nombre: 'Indiana Jones y los cazadores del arca perdida',
            anio: 2012,
            direccionSetFilmacion: {
                calle: 'Av. Roca',
                numero: 3023,
                pais: 'Camboya'
            },
            directores: [
                { id: 5, nombre: 'Steven Spielberg' },
                { id: 6, nombre: 'George Lucas' },
            ],
            generos: [
                { id: 2, nombre: 'Accion' },
                { id: 6, nombre: 'Aventura' },
            ],
            criticas: [
                { critico: 
                    { 
                        id: 3, 
                        nombre: 'Suzana Mendez',
                        edad: 33,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 5 
                },
                { critico: 
                    { 
                        id: 2, 
                        nombre: 'Alina Robles',
                        edad: 21,
                        pais: 'Argentina'
                    }, 
                    puntuacion: 7
                },
            ]
        },
 * @param {string} nombrePelicula
 */
export const expandirInformacionPelicula = (nombrePelicula) => {
    return {};
};
