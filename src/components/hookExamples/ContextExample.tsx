import React, { useState } from "react";
import { TextInput } from "react-native";
import { MyTitle } from "../common/MyTitle";
import { Text } from 'react-native';

const FormInput = (props : { setName: (name: string) => void }) => {
    return (
        <TextInput
            onChangeText={(text: string) => props.setName(text)}
            style={{
                height: 40,
                width: '80%',
                margin: 12,
                borderWidth: 1,
                borderRadius: 10,
                padding: 10
            }}
        />
    )
};

const FormInputResult = (props : { name: string }) => {
    return (<Text>{ 'Input Result : ' + props.name}</Text>);
};

export const ContextExample : React.VFC = () => {

    const [name, setName] = useState('');

    return (
        <>
            <MyTitle label={'useContext'} />
            <FormInput setName={setName}/>
            <FormInputResult name={name}/>
        </>
    );
};
