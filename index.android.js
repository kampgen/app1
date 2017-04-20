import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Button,
	AppRegistry
} from 'react-native';

const gerarNumeroAleatorio = () => {
	var randomNumber = Math.random()
	randomNumber = Math.floor(randomNumber * 10)
	alert(randomNumber)
}

export default class app1 extends Component {
	render(){
		return(
			<View>
				<Text>Gerador de números randômicos</Text>
				<Button
					title="Gerar um número randomico"
					onPress={gerarNumeroAleatorio}
				/>
			</View>
		);
	}
}

AppRegistry.registerComponent('app1', () => app1);
