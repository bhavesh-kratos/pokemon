import React from 'react';
import { addPokeSkills, calcRating } from '../lib/helpers';
import { Rating } from 'semantic-ui-react';

const PokemonCard = (props) => {
    const { pokemon, handleDimmerOpen, totalRange, ribbonPosn, generatePlayer, playerType } = props;
    const isSpecialPokemon = (pokeType) => (pokeType === 'MYTHIC' || pokeType === 'LEGENDARY');
    const closePosn = () => {
        if (ribbonPosn === 'right') {
            return ['left', 'right'];
        }
        return ['right', 'left'];
    }
    return (
        <div>
            <div className="ui card segment stacked tall" style={{
                margin: "auto auto",
            }}>
                <a className="image">
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon['PkMn']}.png`} alt={pokemon['Identifier']} />
                </a>
                {isSpecialPokemon(pokemon['EvolutionPips']) && <a class={`ui orange ${ribbonPosn} ribbon label`}>{pokemon['EvolutionPips']}</a>}
                <div className="content">
                    <a className="header" style={{ fontFamily: "Pokemon", marginBottom: '3px' }}>{pokemon['Identifier']}</a>
                    <div className="meta Test">
                        <Rating maxRating={5} rating={calcRating(addPokeSkills(pokemon), totalRange.max, totalRange.min)} icon='star' size='huge' disabled /><br />

                        <button className={`circular ui icon button ${closePosn()[0]} floated`} onClick={() => generatePlayer(pokemon['PKMn'], playerType)}>
                            <i className="icon close"></i>
                        </button>
                        <button className={`circular ui icon button ${closePosn()[1]} floated`} onClick={() => handleDimmerOpen(pokemon['PkMn'])}>
                            <i className="icon calculator"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PokemonCard;
