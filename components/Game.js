import React from 'react';
import {
    Button,
    View,
    Text,
    ScrollView,
    StyleSheet
} from 'react-native';

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

import DialogInput from 'react-native-dialog-input';

import Player from './Player'

export default class Game extends React.Component{

    state = {
        activePlayers: [],
        history: [],
        nameChangeDialogVisible: false,
        playerNameChange: -1
    }

    addNewPlayer(){
        const activePlayers = this.state.activePlayers;
        if(activePlayers.length === 10)
            return;
        const history = this.state.history;
        //console.log("adding new player...");
        let player = {};
        player.name = "New Player";
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

        if(activePlayers[i].color === "blue")
            activePlayers[i].color = "red";
        else
            activePlayers[i].color = "blue";

        history.push(activePlayers);

        this.setState({
            activePlayers: activePlayers,
            history: history
        });
    }

    showNameChangeDialog(isShow, i){
        this.setState({ 
            nameChangeDialogVisible: isShow,
            playerNameChange: i
        });
    }

    onNameChange(newName){
        const activePlayers = this.state.activePlayers;
        const history = this.state.history;
        const playerNameChange = this.state.playerNameChange
        console.log("old name: " + activePlayers[playerNameChange].name);
        console.log("new name: " + newName);
        activePlayers[playerNameChange].name = newName;

        history.push(activePlayers);
        this.setState({ 
            activePlayers: activePlayers,
            history: history,
            nameChangeDialogVisible: false,
            playerNameChange: -1
        });
    }

    render(){
        const activePlayers = this.state.activePlayers;
        const nameChangeDialogVisible = this.state.nameChangeDialogVisible;
        const playerNameChange = this.state.playerNameChange;
        //console.log(activePlayers);
        return (
            <>
            <View style={{flex:20}}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}
                    >
                    <DialogInput isDialogVisible={nameChangeDialogVisible}
                        title={"Change Player Name"}
                        hintInput ={playerNameChange !== -1 ? activePlayers[playerNameChange].name : ""}
                        submitInput={ (newName) => {this.onNameChange(newName)} }
                        closeDialog={ () => {this.showNameChangeDialog(false, -1)}}>
                    </DialogInput>
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
                                onNameChange={() => this.showNameChangeDialog(true, i)}
                            />
                        );
                    })}
                </ScrollView>
                </View>
                <View style={styles.bottom}>
                    <Button title="Add New Player" 
                        onPress={() => this.addNewPlayer()}
                        />
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },    
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    bottom:{
        flex:1,
        justifyContent: 'flex-end',
        paddingTop: 10
    }
});