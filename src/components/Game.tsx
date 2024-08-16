import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';

export default function Game(): JSX.Element {
	return (
		<SafeAreaView style={styles.container}>
			<Text>Hi</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: 'pink',
		backgroundColor: Colors.primary,
		flex: 1,
	},
});
