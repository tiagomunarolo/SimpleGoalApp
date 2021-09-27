import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Modal, Button, View } from 'react-native';

import InputBox from './components/InputBox';
import ListBox from './components/listBox';

export default function App() {
	const [ listOfGoals, updateListOfGoals ] = useState([]);
	const [ enabledGoalView, setGoalView ] = useState(false);

	const removeGoal = (goalId) => {
		console.log('Removing goal');
		return updateListOfGoals(listOfGoals.filter((goal) => goal.key != goalId));
	};

	const addNewGoal = (data) => {
		console.log(`Adding new goal...`);
    if (!data)
      return;
		updateListOfGoals((goals) => {
			return [ ...goals, { key: Math.random().toString(), value: data } ];
		});
	};

	return (
		<SafeAreaView style={styles.root}>
			<View style={styles.beforeAdd}>
				<Button title="Add New Goal" onPress={() => setGoalView(true)} />
				<ListBox listOfGoals={listOfGoals} removeGoal={removeGoal} />
			</View>
			<Modal visible={enabledGoalView} style={styles.beforeAdd} animationType="slide">
				<View style={styles.root}>
					<InputBox addNewGoal={addNewGoal} show={setGoalView} />
				</View>
			</Modal>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	root: {
		paddingTop: 50,
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center'
	},
	beforeAdd: {
		flex: 1,
		alignItems: 'center'
	}
});
