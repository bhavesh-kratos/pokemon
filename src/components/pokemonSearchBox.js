import React, { Component, Fragment } from 'react'
import _ from 'lodash';
import { Search, Image } from 'semantic-ui-react'

const PokemonSearchCard = (props) => {
    const { PkMn, Identifier } = props;
    console.log('searchbox', props);
    return (
        <div>
            <Image className="ui" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${PkMn}.png`} avatar />
            <div>{Identifier}</div>
            <div class="ui buttons">
                <button class="ui positive button" onClick={() => console.log('yoooooo')}>Me</button>
                <div class="or"></div>
                <button class="ui red button" onClick={() => console.log('yoooooo')}>Opponent</button>
            </div>
        </div>
    );
}


class PokemonSearchBox extends Component {
    componentWillMount() {
        this.resetComponent();
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => {
        this.setState({ value: result.Identifier });
        this.props.handleDimmerOpen(result.PkMn);
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

    render() {
        const { isLoading, value, results } = this.state;
        return (
            <span>
                <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                    results={_.slice(results, 0, 4)}
                    resultRenderer={PokemonSearchCard}
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
