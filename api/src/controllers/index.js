const axios = require('axios');
const e = require('express');
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env;

// funcion para traer todos los juegos de la API
const getGamesApi = async () => {

    const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;
    let videogamesAPI = [];
    
    if(URL) {
        for(let i = 1; i <= 5; i++) {
            let respApi = await axios.get(`${URL}&page=${i}`);
            respApi.data.results.map(game => {
                videogamesAPI.push({
                    id: game.id,
                    image: game.background_image,
                    name: game.name,
                    rating: game.rating,
                    genres: game.genres?.map(gen => gen.name),
                    platforms: game.platforms?.map(platfs => platfs.platform.name)
                });
            });
        };

        return videogamesAPI;
    } else {
        let error = new Error('No se pudo traer los juegos de la API');
        throw error;
    }
};

// funcion para traer los juegos de la base de datos 
const getGamesDB = async () => {

    const videogamesDB = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"]
        },
    });

    if(videogamesDB) {
        return videogamesDB;
    } else {
        let error = new Error('No se pudo traer los juegos de la base de datos');
        throw error;
    };
};

// funcion para concatenar los juegos de la api con los de la base de datos 
const allGames = async () => {
    const infoAPI = await getGamesApi();
    const infoDB = await getGamesDB();
    if( infoAPI || infoDB ){
        const totalVideogames = infoDB.concat(infoAPI);
        return totalVideogames;

    } else{
        let error = new Error('No se pudo traer ningun juegos');
        throw error;
    };
};


// funcion para traer todos los generos de la API
const allGenres = async () => {
 
    // llamo directamente a la API en la parte que estan los genres
    const infoGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    
    if(infoGenres) {
        // recorroe el array
        infoGenres.data.results.map(genre => {
          Genre.findOrCreate({
            where: {
              name: genre.name,
            },
          });
        });
    
        // guardo en la base de datos
        const genresDB = await Genre.findAll();
    
        return genresDB;
    } else {
        let error = new Error('No se pudo traer ningun genero');
        throw error;
    }
};

// funcion para encontrar un juego mediante su id
const filterById = async (id) => {
    if(id) {
        if(!Number(id)) {
            const gameDB = await Videogame.findOne({
              include: {
                model: Genre,
                attributes: ["name"]
              },
              where: {
                id: id,
              },
            });
            return(gameDB);
        } 
        else {
            const idGameAPI = ( 
              await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            ).data;
            const gameAPI = {
              name: idGameAPI.name,
              description: idGameAPI.description,
              image: idGameAPI.background_image,
              released: idGameAPI.released,
              rating: idGameAPI.rating,
              platforms: idGameAPI.platforms.map((e) => e.platform.name),
              genres: idGameAPI.genres.map((e) => e.name),
            }
            return(gameAPI)
        }
    } else {
        let error = new Error('No se pudo traer ningun juego');
        throw error;
    }
};

module.exports = {
    getGamesApi,
    getGamesDB,
    allGames,
    allGenres,
    filterById,
}