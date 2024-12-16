import { Button, View } from "react-native";

function HomeScreen({navigation}){
    return(
        <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}>
            <Button
            onPress={()=>navigation.navigate('Login')}
            title="Iniciar sesión"
            />
            <Button
            onPress={()=>navigation.navigate('SingUp')}
            title="Registrarse"
            />
        </View>
    );
}
export default HomeScreen;