import React from "react";
import { MyButton } from "../common/MyButton";
import { MyTitle } from "../common/MyTitle";
import { Text, StyleSheet } from "react-native";

export const StateExample : React.VFC = () => {

    let counter = 0;
    const increment = () => counter++;    

    return (
        <>
            <MyTitle label={'useState'} />
            <Text style={styles.counter}>{counter}</Text>
            <MyButton label={'Increment'} onPress={increment}/>
        </>
    );
};

const styles = StyleSheet.create({
    counter: {
        fontSize: 200,
        textAlign: 'center'
    }
});
