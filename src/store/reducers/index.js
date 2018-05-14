import { combineReducers } from 'redux';
import pokemons from './pokemon';

const rootReducer = combineReducers({  
  pokeData: pokemons
});

export default rootReducer;
