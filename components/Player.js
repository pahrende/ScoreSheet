import React from 'react';
import {
    Button,
    TouchableOpacity,
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class Player extends React.Component{

    shouldComponentUpdate(props){
        if(props.name !== this.props.name || props.color !== this.props.color || props.score !== this.props.score)
            return true;
        return false;
    }

    render(){
        return(
            <View style={styles.tableContainer}>
                <View style={styles.tableRow}>
                    <Button title=" X " onPress={this.props.onDeletePlayer}/>
                    <TouchableOpacity style={styles.tableCell} onPress={this.props.onNameChange}><Text>{this.props.name}</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.tableCell} onPress={this.props.onChangeColor}><Text>{this.props.color}</Text></TouchableOpacity>
                    <Button title="    -    " onPress={this.props.onSubScore}/>
                    <View style={styles.tableCell}><Text>{this.props.score}</Text></View>
                    <Button title="    +    " onPress={this.props.onAddScore} />
                </View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    tableContainer:{ flex: 1, alignItems:'center', justifyContent: 'center',paddingTop: 10, borderWidth: 0.5, borderColor: "#c8e1ff", minWidth: 280 },
    tableRow:{ flex: 1, alignItems:'center', flexDirection: 'row', alignSelf: 'stretch', borderWidth: 0.5, borderColor: "#c8e1ff" },
    tableCell: { flex: 1, alignItems:'center', alignSelf: 'stretch', borderWidth: 0, borderColor: "#c8e1ff"}
  });