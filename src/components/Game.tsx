import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { GestureEventType } from '../types/types';

const SNAKE_INITIAL_POS = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POS = { x: 5, y: 5 };
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 0;

export default function Game(): JSX.Element {
	const handleGesture = (event: GestureEventType) => {
		const { translationX, translationY } = event.nativeEvent;

		if (Math.abs(translationX) > Math.abs(translationY)) {
			if (translationX > 0) {
				// moving right
			} else {
				// moving left
			}
		} else {
			if (translationY > 0) {
				// down
			} else {
				// up
			}
		}
	};

	return (
		<PanGestureHandler onGestureEvent={handleGesture}>
			<SafeAreaView style={styles.container}>
				<Text>Hi</Text>
			</SafeAreaView>
		</PanGestureHandler>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primary,
		flex: 1,
	},
});
