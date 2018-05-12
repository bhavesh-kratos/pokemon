import React, { Component, Fragment } from 'react';
import _ from 'lodash';
import { Button, Dimmer, Header, Icon, Reveal, Segment, Grid, Image, Tab, Rating } from 'semantic-ui-react';
import { calcRating } from '../lib/helpers';
import '../custom.css';

export default class PokemonProperties extends Component {

    pokemonType = pokeType => (pokeType != "NONE") ? pokeType : null;

    pokeEvolution = evolStage => {

        switch (parseInt(evolStage)) {
            case 1: return 'Unevolved'; break;
            case 2: return 'Evolved Stage 1'; break;
            case 3: return 'Evolved Stage 2'; break;
            default:
                return 'Can\'t tell!'
        }
    }

    panes = [
        {
            menuItem: 'Skills', render: () => {
                return (
                    <Tab.Pane style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Attack:&nbsp;&nbsp; <Rating maxRating={5} defaultRating={calcRating(this.props.pokemon['selected'].BaseAttack, this.props.attackRange.max, this.props.attackRange.min)} icon='star' size='massive' disabled />
                        &nbsp;&nbsp;
                        Defense:&nbsp;&nbsp; <Rating maxRating={5} defaultRating={calcRating(this.props.pokemon['selected'].BaseDefense, this.props.defenseRange.max, this.props.defenseRange.min)} icon='star' size='massive' disabled />
                        &nbsp;&nbsp;
                        Stamina:&nbsp;&nbsp; <Rating maxRating={5} defaultRating={calcRating(this.props.pokemon['selected'].BaseStamina, this.props.staminaRange.max, this.props.staminaRange.min)} icon='star' size='massive' disabled />
                        &nbsp;&nbsp;
                    </Tab.Pane>
                );
            }
        },
        {
            menuItem: 'Moves', render: () => {
                return (
                    <Tab.Pane style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Movement type: {this.pokemonType(this.props.pokemon['selected'].MovementType)} <br /><br />
                        QuickMoves: {this.pokemonType(this.props.pokemon['selected'].QuickMoves)} <br /><br />
                        CinematicMoves: {this.pokemonType(this.props.pokemon['selected'].CinematicMoves)} <br />
                    </Tab.Pane>
                );
            }
        },
        {
            menuItem: 'Pokemon Type', render: () => {
                return (
                    <Tab.Pane style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {this.pokemonType(this.props.pokemon['selected'].Type1)} <br /><br />
                        {this.pokemonType(this.props.pokemon['selected'].Type2)} <br /><br />
                    </Tab.Pane>
                );
            }
        },
    ]

    render() {
        let { pokemon, active, handleDimmerClose, attackRange, defenseRange, staminaRange } = this.props;

        if (pokemon != null) {
            let { previous, next, selected } = pokemon;
            return (
                <div>
                    <Dimmer
                        active={active}
                        onClickOutside={handleDimmerClose}
                        page
                        className= "Blur"
                    >
                        {/* {pokemon.Identifier}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.PkMn}.png`} width={200} height={200} /> */}
                        <Grid divided='vertically' padded className="Content">
                            <Grid.Row columns={3} centered>
                                <Grid.Column textAlign="center">
                                    {!_.isNil(previous) && (
                                        <Fragment>
                                            <Image style={{
                                                display: "block",
                                                margin: "auto auto",
                                            }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${previous.PkMn}.png`} width="150" height="150" />
                                            {previous.Identifier}<br />{this.pokeEvolution(previous.EvoStage)}
                                        </Fragment>
                                    )
                                    }
                                </Grid.Column>
                                <Grid.Column textAlign="center" verticalAlign="top">
                                    {selected.Identifier}
                                    <Image style={{
                                        display: "block",
                                        margin: "auto auto",
                                    }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selected.PkMn}.png`} width="200" height="200" />
                                    {this.pokeEvolution(selected.EvoStage)}
                                </Grid.Column>
                                <Grid.Column textAlign="center">
                                    {!_.isNil(next) && (
                                        <Fragment>
                                            <Image style={{
                                                display: "block",
                                                margin: "auto auto",
                                            }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${next.PkMn}.png`} width="150" height="150" />
                                            {next.Identifier}<br />{this.pokeEvolution(next.EvoStage)}
                                        </Fragment>
                                    )
                                    }
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row centered>
                                <Grid.Column width={12}>
                                    <Segment >
                                        <Tab panes={this.panes} defaultActiveIndex={0} style={{ color: 'gray' }} />
                                    </Segment>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Dimmer>
                </div>
            )
        }
        return null;
    }
}