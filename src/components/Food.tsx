import { Text, StyleSheet } from 'react-native';
import { Coordinate } from '../types/types';

export default function Food({ x, y }: Coordinate): JSX.Element {
	return <Text style={[{ top: 10 * y, left: 10 * x }, styles.food]}>🍒</Text>;
}

const styles = StyleSheet.create({
	food: {
		width: 20,
		height: 20,
		borderRadius: 7,
		position: 'absolute',
	},
});
