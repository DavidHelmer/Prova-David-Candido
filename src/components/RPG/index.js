import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Arma(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.arma.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.nome}>Arma: {props.arma.nome}</Text>
                <Text style={styles.descricao}>Descrição: {props.arma.descricao}</Text>
                <Button style={styles.btn} title="Trocar"/>
            </View>
        </View>
    );
}
