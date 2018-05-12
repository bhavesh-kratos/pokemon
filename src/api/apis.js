import axios from 'axios';
const API_BASE_URL = 'https://raw.githubusercontent.com/'; 

const instance = axios.create({
  baseURL: API_BASE_URL,
//   headers: { 'Access-Control-Allow-Origin': '*' }
});

export const fetchPokemonImages = pokeId =>
  axios.post(`PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`).then(res => res.data);

export const fetchPokemonImages = pokeId =>
  axios.post(`PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`).then(res => res.data);
