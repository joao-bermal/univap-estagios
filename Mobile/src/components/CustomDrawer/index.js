import React, { useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { AuthContext } from '../../contexts/auth';

export default function CustomDrawer(props){
    const { user, sair } = useContext(AuthContext)
    return (
        <DrawerContentScrollView {...props} >
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 25, marginBottom: 10}}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{width: 100, height: 100}}
                    resizeMode="contain"
                />

                <Text style={{color: '#FFF', fontSize: 18, marginTop: 5}}>Bem-vindo</Text>
                <Text style={{color: '#FFF', fontSize: 17, fontWeight: 'bold', paddingBottom: 25}}>{user && user.nome}</Text>
            </View>

            <DrawerItemList {...props} />

            <DrawerItem
                {...props}
                label="Sair"
                onPress={ () => sair()}
            />
        </DrawerContentScrollView>
    );
}