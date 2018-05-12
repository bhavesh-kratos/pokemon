import React, { Fragment } from 'react';
import { Header, Button, Popup, Grid } from 'semantic-ui-react';

const pokemonsList = ({ pokemons }) => {
    const pages = Math.ceil(pokemons.length % 40);
    console.log('length', pages);

    return (
        <Popup
            trigger={<div className="ui icon button">
                <i className="list ul icon" />
            </div>}
            flowing
            hoverable
        >
            <Grid centered className="fluid" divided columns={16}>
                <Grid.Column textAlign='center'>
                    {pokemons.map(pokemon => {
                        return (
                            <div style={{ color:"red" }}>{pokemon.Identifier}</div>
                        );
                    })}
                </Grid.Column>

            </Grid>
        </Popup>
    );
}

export default pokemonsList;
