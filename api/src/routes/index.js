const { Router } = require('express');
const { allGames, allGenres, filterById, filterByName } = require('../controllers');
const router = Router();
const { Videogame, Genre } = require("../db");

router.get("/videogames", async (req, res) => {
    
    const { name } = req.query;
    const gamesAPI_DB = await allGames()

    try {
        if(name) {
            const gamesFilter = gamesAPI_DB.filter((game) =>
            game.name.toLowerCase().includes(name.toLowerCase()));

            gamesFilter.length 
            ? res.status(200).json(gamesFilter)
            : res.status(404).send({error: "No se encontraron videojuegos con ese nombre"});
        } else {
            res.status(200).json(gamesAPI_DB);
        };

    } catch (error) {
        res.status(500).send({error: "Datos invalidos"});
    };
});

router.get("/videogame/:id", async (req, res) => {
    const { id } = req.params;

    try {
        if(id) {
            const idFilter = await filterById(id);
            return res.status(200).json(idFilter);
        } 
    } catch (error) {
        res.status(404).send({error: 'Proporcione un id valido'})
    }
});

router.get("/genres", async (req, res) => {
    try {
        const genApi = await allGenres() 
        res.status(200).json(genApi);
      } catch(error) {
          console.log(error)
      }
});


router.post("/videogames", async (req, res) => {
    const { 
        name, 
        description, 
        image, 
        released, 
        rating, 
        platforms, 
        genres, 
        createInDb 
    } = req.body;
  
    if(!name || !description || !platforms || !genres) {
      res.status(404).send({message: "Error, no se puede crear el videojuego porque faltan datos"});
    }
  
    try {
      let game = await Videogame.create({
        name,
        description,
        image,
        released,
        rating,
        platforms,
        createInDb
      });
    
      let genreDB = await Genre.findAll({
        where: { name: genres },
      });
  
      game.addGenres(genreDB);
      res.status(200).send('Videojuego creado exitosamente');
  
    } catch (error) {
      res.status(500).send('Hubo un problema con el post');
    }
  
});


module.exports = router;
