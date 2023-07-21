import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";


export const Container = styled.View`
    flex: 1;
    background-color: #9AB3F5;
`;


export const UserInfo = styled.View`
    background-color: #7579E7;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0px 13px ;
    border-radius: 0px 0px 10px 10px;
`;

export const UserWraper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-left: 13px;
`;

export const Info = styled.View`
    padding-left: 13px;
    
`;

export const UserGreeting = styled.Text`
   color: #fff;
`;

export const UserName = styled.Text`
   color: #fff;
`;

export const Icon = styled(FontAwesome5)`
   margin-right: 30px;
`;

export const UserImage = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    margin-left: 19px;
    margin-top: 52;
    margin-bottom: 52;
`;


