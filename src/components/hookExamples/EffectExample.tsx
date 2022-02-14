import React, { useState } from "react";
import { MyTitle } from "../common/MyTitle";
import { Text } from 'react-native';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export const EffectExample : React.VFC = () => {
    const [users, setUsers] = useState<User[]>([]);

    return (
        <>
            <MyTitle label={'useEffect'} />
            <Text>{`Number of users : ${users.length}`}</Text>
        </>
    );
};
