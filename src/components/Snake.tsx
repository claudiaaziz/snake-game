import { View, Text, StyleSheet } from 'react-native';
import { Coordinate } from '../types/types';
import { Colors } from '../styles/colors';

interface SnakeProps {
	snake: Coordinate[];
}

export default function Snake({ snake }: SnakeProps): JSX.Element {
	return (
		<>
			{snake.map((segment: Coordinate, idx: number) => {
				const segmentStyle = {
					top: segment.y * 10,
					left: segment.x * 10,
				};

				return <View key={idx} style={[styles.snake, segmentStyle]} />;
			})}
		</>
	);
}

const styles = StyleSheet.create({
	snake: {
		width: 15,
		height: 15,
		borderRadius: 15,
		backgroundColor: Colors.primary,
		position: 'absolute',
	},
});
