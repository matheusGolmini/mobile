import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    header: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontSize: 30,
        fontWeight:"bold",
        color: "black",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    skill: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    skillProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },
    skillValue: {
        fontSize: 15,
        color: '#737380'
    },
    skillButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    skillButtonText: {
        color: '#A2C43A',
        fontSize: 15,
        fontWeight: 'bold'
    }
});