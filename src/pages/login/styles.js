import { StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
// import { Colors } from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginLeft: 10
    },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#A2C43A'
    },
    button : {
        width: 300,
        height: 42,
        backgroundColor: '#A2C43A',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerText: { 
        fontSize: 25,
        color: '#A2C43A',
        marginBottom:10,
        marginTop:50,
        alignSelf:"center",
        fontWeight:"bold"
    }
});