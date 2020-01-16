import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Player extends React.Component{

    state = {
        playerInfo: {
            name: "Player",
            color: "blue",
            score: 0,
            scoreHistory: []
        }
    }

    render(){
        const playerInfo = this.state.playerInfo;

        return(
            <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                    <View style={styles.tableCell}><Text>{playerInfo.name}</Text></View>
                    <Button><Text>+</Text></Button>
                    <View style={styles.tableCell}><Text>{playerInfo.color}</Text></View>
                    <Button><Text>-</Text></Button>
                    <View style={styles.tableCell}><Text>{playerInfo.score}</Text></View>
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