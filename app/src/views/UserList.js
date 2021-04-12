import React from 'react'
import {Alert, FlatList, Text, View, StyleSheet} from 'react-native'
import { Button, Icon, ListItem } from 'react-native-elements'
import users from '../data/users'

export default props =>{
    
    function confirmUserDeletion(user) {
        Alert.alert('Excluir', 'Deseja excluir o usuário?', [{
            text: 'Sim',
            onPress() {
                console.warn('O Usuário ' + user.id + ' foi deletado')
            }
        },     
        {
            text:'Não'
        }  
        ])
    }

    function getActions(user) {
        return(
            <>
            <Button 
                onPress={() => props.navigation.navigate('UserForm', user)}
                type="clear"
                icon={<Icon name="edit" size={25} color="blue"/>}
            />
            <Button 
                onPress={() => confirmUserDeletion(user)}
                type="clear"
                icon={<Icon name="delete" size={25} color="red"/>}
            />
            </>
        )
    }

    function getUserItem({ item: user }){
        return (
            <View>
                <Text style={style.title} bottomDivider rightElement={getActions(user)} onPress={() => props.navigation.navigate('UserForm', user)}>{user.name}</Text>
                <Text style={style.subtitle}>{user.email}</Text>
            </View>
        )
    }

    return(
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}

const style = StyleSheet.create({
    title: {
        height: 40,
        marginTop: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        height: 30,
        borderBottomColor:'gray',
        borderBottomWidth: 1,
    }
})