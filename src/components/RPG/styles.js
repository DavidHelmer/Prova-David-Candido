import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    viewImg: {
        width: '30%',
        height: 160,
        backgroundColor: 'gray'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: {
        backgroundColor: 'black',
        padding: 15,
        width: '70%',
        height: '100%',
    },
    nome: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    descricao: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    }, 
    btn: {
        padding: 10,
        backgroundColor: 'gray'
    }
});

export default styles;
