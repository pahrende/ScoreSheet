import React from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Player extends React.Component{
    constructor(props){
        super(props);
        this.state.playerInfo.name = props.name;
        this.state.playerInfo.color = props.color;
        this.state.playerInfo.score = props.score;
    }

    state = {
        playerInfo: {
            name: "Player",
            color: "blue",
            score: 0
        }
    }

    render(){
        const playerInfo = this.state.playerInfo;

        return(
            <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                    <Button title="X" onPress={this.props.onDeletePlayer}/>
                    <View style={styles.tableCell}><Text>{this.props.name}</Text></View>
                    <View style={styles.tableCell}><Text>{this.props.color}</Text></View>
                    <Button title="-" onPress={this.props.onSubScore}/>
                    <View style={styles.tableCell}><Text>{this.props.score}</Text></View>
                    <Button title="+" onPress={this.props.onAddScore} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tableContainer:{ flex: 1, alignItems:'center', justifyContent: 'center',paddingTop: 30, borderWidth: 0.5, borderColor: "#c8e1ff", minWidth: 280 },
    tableRow:{ flex: 1, flexDirection: 'row', alignSelf: 'stretch', borderWidth: 0.5, borderColor: "#c8e1ff" },
    tableCell: { flex: 1, alignSelf: 'stretch', borderWidth: 0.5, borderColor: "#c8e1ff"}
  });