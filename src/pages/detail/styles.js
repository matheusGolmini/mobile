import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        marginTop:20,
    },
    titleView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginEnd: 10
    },
    title:{
        fontSize: 30,
        color: '#A2C43A',
        fontWeight: 'bold',
    },
    task: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 25
    },
    taskProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    taskValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    tasksButton: {
        width: 300,
        height: 42,
        backgroundColor: '#A2C43A',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tasksButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    }
});