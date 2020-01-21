import React from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native';

export function Player(props){
    return(
        <View style={styles.tableContainer}>
            <View style={styles.tableRow}>
                <Button title="X" onPress={props.onDeletePlayer}/>
                <View style={styles.tableCell}><Text>{props.name}</Text></View>
                <View style={styles.tableCell}><Text onPress={props.onChangeColor}>{props.color}</Text></View>
                <Button title="-" onPress={props.onSubScore}/>
                <View style={styles.tableCell}><Text>{props.score}</Text></View>
                <Button title="+" onPress={props.onAddScore} />
            </View>
        </View>
    );
    
}

const styles = StyleSheet.create({
    tableContainer:{ flex: 1, alignItems:'center', justifyContent: 'center',paddingTop: 30, borderWidth: 0.5, borderColor: "#c8e1ff", minWidth: 280 },
    tableRow:{ flex: 1, alignItems:'center', flexDirection: 'row', alignSelf: 'stretch', borderWidth: 0.5, borderColor: "#c8e1ff" },
    tableCell: { flex: 1, alignItems:'center', alignSelf: 'stretch', borderWidth: 0, borderColor: "#c8e1ff"}
  });