import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../custom.css';
import { Grid } from 'semantic-ui-react';
import { maxValue, minValue, randomNum } from '../lib/helpers';
import PokemonsList from "./pokemonsList"; //couldn't build this feature, so ignore its implementation
import SearchBox from "./pokemonSearchBox";
import PokemonCard from "./pokemonCard";
import PokemonProperties from "./pokeModeal";


class Home extends Component {
    constructor(props) {
        super(props);
        let attack = { max: maxValue(props.pokemonsData, 'BaseAttack'), min: minValue(props.pokemonsData, 'BaseAttack') };
        let defense = { max: maxValue(props.pokemonsData, 'BaseDefense'), min: minValue(props.pokemonsData, 'BaseDefense') };
        let stamina = { max: maxValue(props.pokemonsData, 'BaseStamina'), min: minValue(props.pokemonsData, 'BaseStamina') }
        let me = props.pokemonsData[randomNum(1, 151)];     //sorry for mess :)
        let opponent = props.pokemonsData[randomNum(1, 151)];
        this.state = {
            me: me, //obj
            opponent: opponent, //obj
            activeDimmer: false,
            pokemonToView: null, //id
            pokemonToViewDetails: null,//obj
            attackRange: attack,
            defenseRange: defense,
            staminaRange: stamina
            // opponentDetails: null,
            // meDetails: null
        };
    }

    handleDimmerOpen = pokeId => {
        this.setState({ activeDimmer: true, pokemonToView: pokeId });
        const pokemonDetails = this.pokemonDetails(pokeId);
        const pokemonFamilyDetails = this.pokemonFamilyDetails(pokeId, pokemonDetails['EvoChainID'], parseInt(pokemonDetails['EvoStage']));
        this.setState({ pokemonToViewDetails: pokemonFamilyDetails }); // setting all related details of pokemon
    }
    handleDimmerClose = () => this.setState({ activeDimmer: false })

    pokemonDetails = (pokeId) => {
        return this.props.pokemonsData.find(pokemon => pokeId === pokemon.PkMn)
    }
    // pokemonFamilyDetails = (pokeId, pokeFamilyId, pokeEvoStage) => {
    //     return this.props.pokemonsData.filter(pokemon => pokemon['EvoChainID'] === pokeFamilyId)
    // }
    pokemonFamilyDetails = (pokeId, pokeFamilyId, pokeEvoStage) => {
        return this.props.pokemonsData.reduce(function (acc, obj) {
            console.log('asdsa', pokeEvoStage - 1);
            if (obj['PkMn'] == pokeId) {
                return { 'selected': obj, ...acc };
            }
            if (obj['EvoChainID'] == pokeFamilyId && obj['EvoStage'] == pokeEvoStage - 1) {
                console.log('tolddyaa2')
                return { 'previous': obj, ...acc };
            }
            if (obj['EvoChainID'] == pokeFamilyId && obj['EvoStage'] == pokeEvoStage + 1) {
                console.log('tolddyaa')
                return { 'next': obj, ...acc };
            }
            return acc;
        }, {});
    }
    render() {
        console.log('attack', this.state.attackRange);
        return (
            <Grid relaxed padded >
                {/* added columns : 38Line: columns={2} */}
                <Grid.Row centered>
                    <div className="SearchContainer">
                        <SearchBox pokemons={this.props.pokemonsData} handleDimmerOpen={this.handleDimmerOpen} />
                        {/* <PokemonsList pokemons={this.props.pokemonsData}/> tTODOOO */}
                    </div>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column textAlign="center" stretched>
                        <PokemonCard pokemon={this.state.me} />
                    </Grid.Column>
                    <Grid.Column verticalAlign="middle">
                        <div class="ui vertical animated button big" tabindex="0">
                            <div class="hidden content">Fight!</div>
                            <div class="visible content">
                                Begin Match
                            </div>
                        </div>
                    </Grid.Column>
                    <Grid.Column>
                        <PokemonCard pokemon={this.state.opponent} />
                    </Grid.Column>
                </Grid.Row>
                {/* <button onClick={() => this.handleDimmerOpen(1)}> aa</button> */}
                <PokemonProperties pokemon={this.state.pokemonToViewDetails} handleDimmerClose={this.handleDimmerClose} active={this.state.activeDimmer} attackRange={this.state.attackRange} defenseRange={this.state.defenseRange} staminaRange={this.state.staminaRange} />
            </Grid>
        )
    }
}


function mapStateToProps(state) {
    return {
        pokemonsData: state.pokeData.data
    }
}

export default connect(mapStateToProps, null)(Home);
