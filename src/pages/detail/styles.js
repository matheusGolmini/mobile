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
    tasksButton: {
        width: 350,
        height: 42,
        backgroundColor: '#A2C43A',
        marginTop: 1,
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