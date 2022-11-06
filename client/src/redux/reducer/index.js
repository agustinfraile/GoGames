import {    
    GET_GAME, 
    GET_GAMES, 
    GET_GENRE, 
    GAMES_FILTERED_BY_GENRES,
    GAMES_FILTERED_BY_CREATION,
    NAME_BY_ORDER, 
    GET_GAME_NAME,
    GAME_POST
} from "../actions";

const initialState = {
    games: [],
    allGames: [],
    game: [],
    genres: [],
    gamesDetail: {},
    platforms: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload,
                allGames: action.payload
            };
        case GET_GAME:
            return {
                ...state,
                games: action.payload
            }
        case GET_GENRE:
            return {
                ...state,
                genres: action.payload
            }
        case GET_GAME_NAME:
            return {
                ...state,
                games: action.payload
            }
        case GAMES_FILTERED_BY_GENRES:
            const allVideogames = state.allGames;
            const genresFiltered = action.payload === 'Todos' 
            ? allVideogames
            :  allVideogames.filter(
                game => game.genres?.includes(action.payload))
            return {
                ...state,
                games: genresFiltered
            }
        case GAMES_FILTERED_BY_CREATION:
            // const allVideogamesFilter = state.allVideogamesFilter;
            const filterCreated = action.payload === 'Creados'
            ? state.allGames.filter(game => game.createInDb)
            : state.allGames.filter(game => !game.createInDb)
            return {
                ...state,
                games: filterCreated
            }
        case GAME_POST:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            } ;
    }
}

export default rootReducer;