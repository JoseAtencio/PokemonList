import styled from 'styled-components/native';
//const {size, style, type} = Fonts 
import { ImageBackground } from 'react-native';

export default {
        Container: styled.View`
            flex: 1;
            justify-content: center;
            align-items: center;
        `,

        BackgroundImage: styled.ImageBackground`
            position: absolute;
            width: 100%;
            height: 100%;
        `,

        CenteredText: styled.Text`
            color: white;
            font-size: 24px;
            font-weight: bold;
        `
}
