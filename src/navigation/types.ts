import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Navigation } from "./Navigation";

export type AppStackNavigatorParamList = {
    [Navigation.Home] : undefined,
    [Navigation.Playground] : {
        playgroundName: string
    },
    [Navigation.PlaygroundUseEffect] : undefined,
};

export type HomeStackScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.Home
>;

export type PlaygroundScreenProps = NativeStackScreenProps<
    AppStackNavigatorParamList,
    typeof Navigation.Playground
>;