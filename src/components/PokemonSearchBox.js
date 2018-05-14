import React, { Component } from 'react'
import _ from 'lodash';
import { Search, Image } from 'semantic-ui-react'



class PokemonSearchBox extends Component {
    componentWillMount() {
        this.resetComponent();
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = ( Identifier, PkMn ) => {
        this.setState({ value: Identifier });
        this.props.handleDimmerOpen(PkMn);
    }

    handleSearchChange = (e, { value }) => {
        this.setState({ value })
        if (this.state.value.length >= 2) this.setState({ isLoading: true })
        //setting timeout so if the list is too long it won't keep computing the result
        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.Identifier);

            this.setState({
                isLoading: false,
                results: _.filter(this.props.pokemons, isMatch),
            });
        }, 300)
    }

    PokemonSearchCard = (props) => {
        const { PkMn, Identifier } = props;
        console.log('searchbox', props);
        return (
            <div>
                <Image className="left floated avatar" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PkMn}.png`} />
                <div style={{fontWeight: 'bold', fontFamily: "Pokemon" }} >{Identifier}</div>
                <div class="ui buttons">
                    <button class="ui white button" onClick={() => this.props.setPlayer(PkMn,'me')}>Me</button>
                    <div class="or" data-text="GO" onClick={() => this.handleResultSelect(Identifier, PkMn)}></div>
                    <button class="ui red button" onClick={() => this.props.setPlayer(PkMn,'opponent')}>Opponent</button>
                </div>
            </div>
        );
    }

    render() {
        const { isLoading, value, results } = this.state;
        return (
            <span>
                <Search
                    loading={isLoading}
                    // onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                    results={_.slice(results, 0, 4)}
                    resultRenderer={this.PokemonSearchCard}
                    minCharacters={2}
                    value={value}
                    size={"large"}
                    fluid
                />
            </span>

        )
    }
}
export default PokemonSearchBox;
