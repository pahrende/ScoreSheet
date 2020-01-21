import React from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Player} from './Player'

export default class Game extends React.Component{

    state = {
        activePlayers: [],
        history: []
    }

    addNewPlayer(){
        const activePlayers = this.state.activePlayers;
        const history = this.state.history;
        console.log("adding new player...");
        let player = {};
        player.name = "New Name";
        player.color = "blue";
        player.score = 0;

        activePlayers.push(player);
        history.push(activePlayers);

        this.setState({
            activePlayers: activePlayers,
            history: history
        });
    }

    onAddScore(i){
        //console.log("lets add some score to " + i);
        const activePlayers = this.state.activePlayers;
        const history = this.state.history;
        activePlayers[i].score++;
        //console.log(activePlayers[i].score);
        history.push(activePlayers);

        this.setState({
            activePlayers: activePlayers,
            history: history
        });
    }

    onSubScore(i){
        //console.log("lets sub some score to " + i);
        const activePlayers = this.state.activePlayers;
        const history = this.state.history;
        activePlayers[i].score--;
        //console.log(activePlayers[i].score);
        history.push(activePlayers);

        this.setState({
            activePlayers: activePlayers,
            history: history
        });
    }

    onDeletePlayer(i){
        //console.log("lets delete someone! (" + i + ")");
        const activePlayers = Array.from(this.state.activePlayers);
        const history = this.state.history;
        activePlayers.splice(i,1);
        //console.log(activePlayers[i]);
        history.push(activePlayers);

        this.setState({
            activePlayers: activePlayers,
            history: history
        });
    }

    onChangeColor(i){        
        const activePlayers = this.state.activePlayers;
        const history = this.state.history;

        activePlayers[i].color = "red";
        history.push(activePlayers);

        this.setState({
            activePlayers: activePlayers,
            history: history
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
                                onAddScore={() => this.onAddScore(i)}
                                onSubScore={() => this.onSubScore(i)}
                                onDeletePlayer={() => this.onDeletePlayer(i)}
                                onChangeColor={() => this.onChangeColor(i)}
                            />
                        );
                    })}
                </View>
                <Button title="Add New Player" onPress={() => this.addNewPlayer()}/>
            </View>
        );
    }
}