import React, { Component } from 'react';
import { Transition } from 'semantic-ui-react';
import { randomNum } from '../lib/helpers';

export default class PokemonFight extends Component {
    state = { transitions: ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce'], visible: true };
    
    componentDidMount() {
        this.toggleVisibility();
    }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { me, opponent } = this.props;
        return (
            <div>
                <Transition animation={this.state.transitions[randomNum(0, this.state.transitions.length)]} duration={4000} visible={this.state.visible}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${me['PkMn']}.png`} width="290" height="290" />
                </Transition>
                <Transition animation={this.state.transitions[randomNum(0, this.state.transitions.length)]} duration={4000} visible={this.state.visible}>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${opponent['PkMn']}.png`} width="290" height="290" />
                </Transition>
            </div>
        )
    }
}
