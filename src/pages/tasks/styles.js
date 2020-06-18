import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24
    },
    taskList: {
        marginTop: 15,
    },
    task: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tasksButtonText: {
        color: '#A2C43A',
        fontSize: 15,
        fontWeight: 'bold'
    },
    headerNotTasks: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
    },
    textNotTask: {
        fontSize: 25,
        color: '#A2C43A',
        marginBottom:50,
        alignSelf:"center",
        fontWeight:"bold"
    },
    imageNotTask: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginLeft: 15
    },
});