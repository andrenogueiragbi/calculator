import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0.6)',
        alignItems: "flex-end"
    },
    displayValue: {
        fontSize: 35,
        color: "#000"
    },
    credites: {
        color: "#fff",
        fontSize: 15,
        textAlign: "center",
        alignItems: "center",
        backgroundColor: "#000",
        borderBottomEndRadius: 15,
        padding: 20,
        fontWeight: "bold",
        
    }


});

export default props =>

    <>
        <Text style={styles.credites}>Calculator from André</Text>
        <View style={styles.display}>

            <Text style={styles.displayValue}

                numberOfLines={1}>{props.value}</Text>
        </View>
    </>
