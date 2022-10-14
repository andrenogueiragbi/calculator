import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight

} from 'react-native'

const styles = StyleSheet.create({
    button:{
        fontSize: 35,
        height: Dimensions.get("window").width / 4,
        width: Dimensions.get("window").width / 4,
        padding: 20,
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888"
    },
    buttonDouble:{
        width: Dimensions.get("window").width / 2,

    },
    buttonTriple:{
        width: Dimensions.get("window").width / 3,

    },
    buttonOne:{
        width: Dimensions.get("window").width / 2.670,

    },
    buttonSum:{
        height: Dimensions.get("window").width / 2,

    },
    buttonOperation:{
        color: "#fff",
        backgroundColor: "#fa8231"
    }


});

export default props =>{

    const styleButton = [styles.button]
    if(props.buttonDouble) styleButton.push(styles.buttonDouble);
    if(props.buttonTriple) styleButton.push(styles.buttonTriple);
    if(props.buttonOperation) styleButton.push(styles.buttonOperation);
    if(props.buttonOne) styleButton.push(styles.buttonOne);
    if(props.buttonSum) styleButton.push(styles.buttonSum);


    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}