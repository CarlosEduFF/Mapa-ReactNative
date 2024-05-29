import { View, Button } from "react-native";

export default function Navbar(){
    <View style={StyleSheetes.Navbar}>
        <Button title="Início" onPress={() => console.log('Início pressionado')} />
        <Button title="Favoritos" onPress={() => console.log('Favoritos pressionado')} />
        <Button title="Configurações" onPress={() => console.log('Configurações pressionado')} />
    </View>
}