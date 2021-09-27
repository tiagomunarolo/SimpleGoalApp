import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function InputBox(props) {
	const [ goalInput, changeGoalInput ] = useState('');

	const change = (goal) => {
		console.log(`onChange called: ${goalInput}`);
		changeGoalInput(goal);
	};

	return (
		<View style={styles.container}>
			<TextInput placeholder=" Add new goal..." style={styles.input} onChangeText={change} />
			<Button
				title="Add"
				onPress={() => {
					props.addNewGoal(goalInput);
					props.show(false);
				}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	input: {
    borderRadius: 50,
		flex: 1,
		flexDirection: 'column',
		borderWidth: 1,
		width: 300,
		maxHeight: 50
	}
});
