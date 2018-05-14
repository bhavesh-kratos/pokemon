import React, { Component } from 'react';
import _ from 'lodash';
import { Dimmer, Segment, Grid, Image, Tab, Rating, Transition } from 'semantic-ui-react';
import { calcRating } from '../lib/helpers';

export default class PokemonProperties extends Component {

    pokemonType = pokeType => (pokeType !== "NONE") ? pokeType : null;

    pokeEvolution = evolStage => {
        switch (parseInt(evolStage, 10)) {
            case 1: return 'Unevolved'; 
            case 2: return 'Evolved Stage 1'; 
            case 3: return 'Evolved Stage 2'; 
            default:
                return 'Can\'t tell!'
        }
    }

    panes = [
        {
            menuItem: 'Skills', render: () => {
                return (
                    <Tab.Pane style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        Attack:&nbsp;&nbsp; <Rating maxRating={5} rating={calcRating(this.props.pokemon['selected'].BaseAttack, this.props.attackRange.max, this.props.attackRange.min)} icon='star' size='massive' disabled />
                        &nbsp;&nbsp;
                        Defense:&nbsp;&nbsp; <Rating maxRating={5} rating={calcRating(this.props.pokemon['selected'].BaseDefense, this.props.defenseRange.max, this.props.defenseRange.min)} icon='star' size='massive' disabled />
                        &nbsp;&nbsp;
                        Stamina:&nbsp;&nbsp; <Rating maxRating={5} rating={calcRating(this.props.pokemon['selected'].BaseStamina, this.props.staminaRange.max, this.props.staminaRange.min)} icon='star' size='massive' disabled />
                        &nbsp;&nbsp;
                    </Tab.Pane>
                );
            }
        },
        {
            menuItem: 'Moves', render: () => {
                return (
                    <Tab.Pane style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Pokemon' }}>
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
                    <Tab.Pane style={{ minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Pokemon' }}>
                        {this.pokemonType(this.props.pokemon['selected'].Type1)} <br /><br />
                        {this.pokemonType(this.props.pokemon['selected'].Type2)} <br /><br />
                    </Tab.Pane>
                );
            }
        },
    ]

    render() {
        let { pokemon, active, handleDimmerClose, handleDimmerOpen } = this.props;

        if (pokemon != null) {
            let { previous, next, selected } = pokemon;
            return (
                <div>
                    <Transition animation="fade up" duration={300} visible={active}>
                        <Dimmer
                            active={active}
                            page
                            className="Blur"
                        >
                            <button className="circular ui icon button huge Close-Button" onClick={() => handleDimmerClose()}>
                                <i className="icon close"></i>
                            </button>
                            {/* {pokemon.Identifier}
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.PkMn}.png`} width={200} height={200} /> */}
                            <Grid divided='vertically' padded className="Content">

                                <Grid.Row columns={3} centered style={{ fontFamily: "Pokemon" }}>
                                    <Grid.Column textAlign="center">
                                        {!_.isNil(previous) && (
                                            <div onClick={() => handleDimmerOpen(previous['PkMn'])}>
                                                <Image style={{
                                                    display: "block",
                                                    margin: "auto auto",
                                                }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${previous.PkMn}.png`} width="150" height="150" />
                                                {previous.Identifier}<br />({this.pokeEvolution(previous.EvoStage)})
                                        </div>
                                        )
                                        }
                                    </Grid.Column>
                                    <Grid.Column textAlign="center" verticalAlign="top">
                                        <Image style={{
                                            display: "block",
                                            margin: "auto auto",
                                        }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selected.PkMn}.png`} width="200" height="200" />
                                        {selected.Identifier}<br />
                                        ({this.pokeEvolution(selected.EvoStage)})
                                </Grid.Column>
                                    <Grid.Column textAlign="center">
                                        {!_.isNil(next) && (
                                            <div onClick={() => handleDimmerOpen(next['PkMn'])}>
                                                <Image style={{
                                                    display: "block",
                                                    margin: "auto auto",
                                                }} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${next.PkMn}.png`} width="150" height="150" />
                                                {next.Identifier}<br />({this.pokeEvolution(next.EvoStage)})
                                        </div>
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
                    </Transition>
                </div>
            )
        }
        return null;
    }
}