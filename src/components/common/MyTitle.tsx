import React from "react";
import { Text, StyleSheet } from "react-native";

interface MyTitleProps {
    label: string;
}

export const MyTitle: React.VFC<MyTitleProps> = ({ label }) => {
    return <Text style={styles.text}>{ label }</Text>

};

const styles = StyleSheet.create({
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        marginVertical: 10
    }
});