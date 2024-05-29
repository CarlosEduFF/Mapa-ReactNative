import { StyleSheet } from "react-native";

export const StyleSheetes = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
        flex: 1,
        width: '70%',
        height: '50%',
        borderColor: 'black', // Corrigi o nome da propriedade
        borderWidth: 1, // Adicionei a propriedade para definir a largura da borda
    } ,
    Navbar: {
      flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          height: 50,
          backgroundColor: 'lightgray',
    }
  });