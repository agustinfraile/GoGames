import {    
    GET_GAME, 
    GET_GAMES, 
    GET_GENRE, 
    GAMES_FILTERED_BY_GENRES,
    GAMES_FILTERED_BY_CREATION,
    ORDER_GAME,
    GET_GAME_NAME,
    GAME_POST,
    RESET_GAME_DETAIL
} from "../actions";

const initialState = {
    games: [],
    allGames: [],
    game: [],
    genres: []
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
            const allVideogamesFilter = state.allGames;
            const filterCreated = action.payload === 'Creados'
            ? allVideogamesFilter.filter(game => game.createInDb)
            : allVideogamesFilter.filter(game => !game.createInDb)

            return {
                ...state,
                games: action.payload === 'Todos' ? state.allGames : filterCreated
            }
        case ORDER_GAME : {
            let allGamesOrder = [...state.allGames];
            let allOrder;

            switch(action.payload) {
                case 'Todos': 
                    allOrder = [...state.allGames];
                    break;
                case "Asc":
                    allOrder = allGamesOrder.sort((a,b) => {
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return 1;
                        }
                        if(a.name.toLowerCase() < b.name.toLowerCase()){
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "Des":
                    allOrder = allGamesOrder.sort((a,b) => {
                        if(a.name.toLowerCase() < b.name.toLowerCase()){
                            return 1;
                        }
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "Peor":
                    allOrder = allGamesOrder.sort((a, b) => {
                        return a.rating - b.rating;
                    });
                    break;
                case "Mejor":
                    allOrder = allGamesOrder.sort((a, b) => {
                        return b.rating - a.rating;
                    });
                    break;
                default:
                    allOrder = allGamesOrder
                    break;
            }
            return {
                ...state,
                allGames: allOrder,
                games: allOrder
            }
        }
        case GAME_POST:
            return {
                ...state,
            }
        case RESET_GAME_DETAIL:
            return {
                ...state,
                game: []
            }
        default:
            return {
                ...state,
            } ;
    }
}

export default rootReducer;