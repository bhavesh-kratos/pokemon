import {pokemonsJSON} from '../../api/poke';

const initialState = {
    data: pokemonsJSON['data'],
    loading: false,
    error: null,
};

const reducer = (state = initialState, action) => {
    return state;
    };

export default reducer;
