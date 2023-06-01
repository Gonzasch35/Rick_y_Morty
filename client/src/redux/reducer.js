import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
/*             return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            } */
        case REMOVE_FAVORITE:
            return { ...state, myFavorites: action.payload};
            /* return{ ...state, myFavorites: state.myFavorites.filter(char =>char.id !== action.payload), allCharacters: state.allCharacters.filter(char =>char.id !== action.payload)} */
        
        case FILTER:
            const allCharactersFilter = state.allCharacters.filter(char => char.gender === action.payload)
            return{...state, myFavorites: action.payload === 'selectGender' ? state.allCharacters : allCharactersFilter}
        case ORDER:
            const allCharactersOrder = [...state.myFavorites]
            return {...state, myFavorites: action.payload === 'Ascendente' 
            ? allCharactersOrder.sort((a, b) => a.id - b.id)
            : allCharactersOrder.sort((a, b) => b.id - a.id)}
        default:
            return{
                ...state,
            }
    }
}
  
export default rootReducer