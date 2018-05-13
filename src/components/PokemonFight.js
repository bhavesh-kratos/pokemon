import React, { Component, Fragment } from 'react';
import { Transition } from 'semantic-ui-react';
import { randomNum, winnerFormula } from '../lib/helpers';


const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce',
    'browse', 'browse right',
    'drop',
    'fade', 'fade up', 'fade down', 'fade left', 'fade right',
    'fly up', 'fly down', 'fly left', 'fly right',
    'horizontal flip', 'vertical flip',
    'scale',
    'slide up', 'slide down', 'slide left', 'slide right',
    'swing up', 'swing down', 'swing left', 'swing right'];

export default class PokemonFight extends Component {
    // duration of fight: 4000ms, after animation: 300ms
    state = {
        visible: true, winner: null, resultOut: false
    };

    componentWillMount() {
        this.setState({ winner: winnerFormula(this.props.me, this.props.opponent) });
    }
    componentDidMount() {
        this.toggleVisibility();
        let self = this;
        setTimeout(function () {
            self.setState({ resultOut: true });
        }, 4000);
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible });

    afterMatchImage = (pokeId) => {
        if (pokeId == this.state.winner) {
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`
        }
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokeId}.png`
    }

    render() {
        console.log('resultout', this.state.winner);
        const { me, opponent } = this.props;
        return (
            <div>
                {!this.state.resultOut && (
                    <Fragment>
                        <Transition animation={transitions[randomNum(0, transitions.length)]} duration={4000} visible={this.state.visible}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${me['PkMn']}.png`} width="350" height="350" />
                        </Transition>
                        <Transition animation={transitions[randomNum(0, transitions.length)]} duration={4000} visible={this.state.visible}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${opponent['PkMn']}.png`} width="350" height="350" />
                        </Transition>
                    </Fragment>
                )}
                {this.state.resultOut && (
                    <div style={{ fontFamily: 'Pokemon' }}>
                        <h1 style={{ fontFamily: 'Pokemon' }}>{this.state.winner == this.props.me['PkMn'] ? 'YOU WON' : `${this.props.opponent['Identifier']} WON`}</h1>
                        <img src={this.afterMatchImage(this.props.me['PkMn'])} width="350" height="350" />
                        <img src={this.afterMatchImage(this.props.opponent['PkMn'])} width="350" height="350" />
                    </div>
                )}
            </div>
        )
    }
}

// import React, { Component, Fragment } from 'react';
// import { Transition } from 'semantic-ui-react';
// import { randomNum, winnerFormula } from '../lib/helpers';


// const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce',
//     'browse', 'browse right',
//     'drop',
//     'fade', 'fade up', 'fade down', 'fade left', 'fade right',
//     'fly up', 'fly down', 'fly left', 'fly right',
//     'horizontal flip', 'vertical flip',
//     'scale',
//     'slide up', 'slide down', 'slide left', 'slide right',
//     'swing up', 'swing down', 'swing left', 'swing right'];

// export default class PokemonFight extends Component {
//     // duration of fight: 4000ms, after animation: 300ms
//     state = {
//         visible: true, winner: null, resultOut: false
//     };

//     componentDidMount() {
//         this.toggleVisibility();
//         this.setState({ winner: winnerFormula(this.props.me, this.props.opponent) });
//     }

//     toggleVisibility = () => this.setState({ visible: !this.state.visible });


//     render() {
//         console.log('resultout', this.state.resultOut);
//         const { me, opponent } = this.props;
//         return (
//             <div>
//                 <Transition animation={transitions[randomNum(0, transitions.length)]} duration={4000} visible={this.state.visible}>
//                     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${me['PkMn']}.png`} width="350" height="350" />
//                 </Transition>
//                 <Transition animation={transitions[randomNum(0, transitions.length)]} duration={4000} visible={this.state.visible}>
//                     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${opponent['PkMn']}.png`} width="350" height="350" />
//                 </Transition>
//             </div>
//         )
//     }
// }
