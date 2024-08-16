import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Coordinate, Direction, GestureEventType } from '../types/types';
import { useState } from 'react';
import Snake from './Snake';

const SNAKE_INITIAL_POS = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POS = { x: 5, y: 5 };
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 0;

export default function Game(): JSX.Element {
	const [direction, setDirection] = useState<Direction>(Direction.Right);
	const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POS);
	const [food, setFood] = useState<Coordinate>(FOOD_INITIAL_POS);
	const [isGameOver, setIsGameOver] = useState<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(false);

	const handleGesture = (event: GestureEventType) => {
		const { translationX, translationY } = event.nativeEvent;

		if (Math.abs(translationX) > Math.abs(translationY)) {
			if (translationX > 0) {
				setDirection(Direction.Right);
			} else {
				setDirection(Direction.Left);
			}
		} else {
			if (translationY > 0) {
				setDirection(Direction.Down);
			} else {
				setDirection(Direction.Up);
			}
		}
	};

	return (
		<PanGestureHandler onGestureEvent={handleGesture}>
			<SafeAreaView style={styles.container}>
				<View style={styles.boundaries}>
					<Snake snake={snake} />
				</View>
			</SafeAreaView>
		</PanGestureHandler>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.primary,
		flex: 1,
	},
	boundaries: {
		backgroundColor: Colors.background,
		flex: 1,
		borderColor: Colors.primary,
		borderWidth: 12,
		// borderRadius: 20,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
});
