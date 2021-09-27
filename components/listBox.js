import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ListBox(props) {
	const renderFunction = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => props.removeGoal(item.key)}>
				<View style={styles.itemView} key={item.key}>
					<Text style={styles.text}>{item.value}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.listView}>
			<FlatList data={props.listOfGoals} renderItem={renderFunction} />
		</View>
	);
}

const styles = StyleSheet.create({
	listView: {
		flexDirection: 'column',
		flex: 1
	},
	itemView: {
		flex: 1,
		width: 300,
		height: 30,
		backgroundColor: '#ffccdd',
		borderColor: 'black',
		borderWidth: 1,
		marginVertical: 10,
		alignItems: 'center',
        borderRadius: 50,
	},
	text: {
		flex: 1
	}
});
