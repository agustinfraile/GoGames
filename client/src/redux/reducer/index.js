import { GET_GAME, GET_GAMES, GET_GENRE } from "../actions";

const initialState = {
    games: [],
    game: [],
    gamesFiltered: [],
    genres: [],
    gamesDetail: {},
    platforms: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload
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
        
    }
}

export default rootReducer;