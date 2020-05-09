import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
        // paddingHorizontal: 24,
        // paddingTop: Constants.statusBarHeight + 20
        
    },
    // header: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center'
    // },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100

    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 15,
        fontSize: 16,
        fontWeight: 'bold'
    },
    button : {
        width: 300,
        height: 42,
        backgroundColor: '#3498db',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
//     headerText: { 
//         fontSize: 15,
//         color: '#737380'
//     },
//     headerTextBold: { 
//         fontWeight: 'bold'
//     },
//     title: {
//         fontSize: 30,
//         marginBottom: 16,
//         marginTop: 16,
//         color: '#13131a',
//         fontWeight: 'bold'
//     },
//     description: {
//         fontSize: 16,
//         lineHeight:24,
//         color: '#737380'
//     }
});