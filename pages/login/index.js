import React, { useState } from 'react';

import { View, TextInput, Text, TouchableOpacity,ScrollView} from 'react-native';

import style from './style';

export default function Login({ navigation }) {



return (
  <ScrollView>
    <View style={style.container}>  
      <View style={style.containertext}>     
       <Text> Entrar na sua conta</Text>
      
      </View>
      <View style={style.containerlabel}>
      <Text style={style.label}>Email:</Text> 
      <TextInput style={style.inputlogin} placeholder='Digite seu email...' ></TextInput>
      <Text style={style.label}>Senha:</Text>
      <TextInput style={style.inputlogin} placeholder='Digite sua senha...'></TextInput>
      </View>
 
      <TouchableOpacity onPress={ () => { navigation.navigate("Cadastro") }}>
                <Text style={style.btnentrar}>Entrar</Text>
      </TouchableOpacity>
      <View style={style.containercadastrese}>
      <Text>Não tem uma conta?</Text>
       <TouchableOpacity
                onPress={ () => navigation.navigate('Cadastro')}>
                <Text  style={style.cadastrase}>Cadastre-se!</Text>
      </TouchableOpacity>
      </View>
    </View>
  </ScrollView> 
);
}