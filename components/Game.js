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

        this.setState({
            activePlayers: activePlayers
        });
    }

    onAddScore(i){
        console.log("lets add some score to " + i);
        const activePlayers = this.state.activePlayers;
        activePlayers[i].score++;
        console.log(activePlayers[i].score);
        this.setState({
            activePlayers: activePlayers
        });
    }

    onSubScore(i){
        console.log("lets add some score to " + i);
        const activePlayers = this.state.activePlayers;
        activePlayers[i].score--;
        console.log(activePlayers[i].score);
        this.setState({
            activePlayers: activePlayers
        });
    }

    onDeletePlayer(i){
        console.log("lets delete someone! (" + i + ")");
        
        const activePlayers = Array.from(this.state.activePlayers);
        activePlayers.splice(i,1);
        console.log(activePlayers[i]);
        this.setState({
            activePlayers: activePlayers
        });
    }

    render(){
        const activePlayers = this.state.activePlayers;
        console.log(activePlayers);
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
                                onAddScore={() => {this.onAddScore(i)}}
                                onSubScore={() => {this.onSubScore(i)}}
                                onDeletePlayer={() => {this.onDeletePlayer(i)}}
                            />
                        );
                    })}
                </View>
                <Button title="Add New Player" onPress={() => this.addNewPlayer()}/>
            </View>
        );
    }
}