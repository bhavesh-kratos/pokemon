import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer'; 
import pokemons from './pokemon';

const rootReducer = combineReducers({  
  pokeData: pokemons
});

export default rootReducer;
