import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        marginTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginLeft: 15
    },
    task: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        marginTop: 50
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
    footer: {
        borderColor: '#999',
        paddingVertical: 20,
        paddingHorizontal: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },  
    tasksButton: {
        width: '48%',
        backgroundColor: '#A2C43A',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
   
    tasksButtonText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold'
    },
});