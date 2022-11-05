import {    
    GET_GAME, 
    GET_GAMES, 
    GET_GENRE, 
    GAMES_FILTERED_BY_GENRES,
    NAME_BY_ORDER 
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
                game: action.payload
            }
        case GET_GENRE:
            return {
                ...state,
                genres: action.payload
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
        default:
            return {
                ...state,
            } ;
    }
}

export default rootReducer;