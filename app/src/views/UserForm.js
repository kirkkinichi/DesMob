import React, { useState } from 'react'
import {Text, View, TextInput, StyleSheet} from 'react-native'
import { Button, Icon } from 'react-native-elements'

export default ({route, navigation}) => {
    const [user, setUser] = useState (route.params ? route.params : {})
    return(
        <View>
            <Text>Nome</Text>
            <TextInput 
                style={style.input}
                onChangeText={name => setUser({...user, name})}
                placeholder="Insira o Nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput 
                style={style.input}
                onChangeText={email => setUser({...user, email})}
                placeholder="Insira o Email"
                value={user.email}
            />
            <Button 
                title="Salvar"
                onPress={() => {navigation.goBack()}}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding:15
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        marginTop: 10,
    }
})