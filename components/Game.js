import React from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native';

import Player from './Player'

export default class Game extends React.Component{

    state = {
        activePlayers: [],
        history: []
    }

    addNewPlayer(){
        const activePlayers = this.state.activePlayers;
        console.log("adding new player...");
        let player = {};
        player.name = "New Name";
        player.color = "blue";
        player.score = 0;

        activePlayers.push(player);

        this.setState(
            {
                activePlayers: activePlayers
            }
        );
    }

    render(){
        const activePlayers = this.state.activePlayers;
        return (
            <View>
                <View>
                    {activePlayers.map((entry, i) => {
                        return (
                            <Player 
                                key={i} 
                                name={entry.name} 
                                color={entry.color} 
                                score={entry.score}
                            />
                        );
                    })}
                </View>
                <Button title="Add New Player" onPress={() => this.addNewPlayer()}/>
            </View>
        );
    }
}