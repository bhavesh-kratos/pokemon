import React, { Component, Fragment } from 'react';
import { Button, Dimmer, Header, Icon, Reveal, Segment } from 'semantic-ui-react';

export default class PokemonProperties extends Component {
    render() {
        const { pokemon, active, handleDimmerClose } = this.props;
        console.log('seeitt',this.props.pokemon);
        pokemon = pokemon['selected'];
        if (pokemon != null) {
            return (
                <div>
                    <Dimmer
                        active={active}
                        onClickOutside={handleDimmerClose}
                        page
                    >
                        {pokemon.Identifier}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.PkMn}.png`} width={200} height={200} />

                        <Reveal animated='rotate left'>
                            <Reveal.Content visible>
                                <Segment.Group horizontal style={{ width: "90vw", color: "black" }}>
                                    <Segment>Left</Segment>
                                    <Segment>Middle</Segment>
                                    <Segment>Middle</Segment>
                                </Segment.Group>
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Segment raised style={{ width: "90vw" }}>
                                    Pellentesque habitant morbi tristique senectus.
                                </Segment>
                            </Reveal.Content>
                        </Reveal>
                    </Dimmer>
                </div>
            )
        }
        return null;
    }
}