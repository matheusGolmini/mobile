import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    level: {
        fontSize: 30,
        fontWeight:"bold",
        color: "black",
    },
    footer:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    power:{
        alignItems: 'center'
    },
    button: {
        flex:1,
        backgroundColor: 'transparent',
        marginLeft: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    iconText: {
        fontSize: 20,
        color: "black",
        fontWeight:"bold",
        alignContent: 'center',
        alignItems: 'center'
    },
});