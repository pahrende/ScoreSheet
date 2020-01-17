import React from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native';

import Player from './Player';

export default class Game extends React.Component{

    state = {
        activePlayers: [],
    }

    renderPlayer(i){
        return(
            <Player
                name={this.props.playerName}
                color={this.props.playerColor}
                onAddClick={() => this.props.onAddClick(i)}
                onSubClick={() => this.props.onSubClick(i)}
            />
        );
    }

    render(){
        const activePlayers = this.state.activePlayers;

        return(
            <View>
                <Button title='Add Player'/>
            </View>
        );
    }
}