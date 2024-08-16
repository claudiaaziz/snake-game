import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Colors } from '../styles/colors';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Coordinate, Direction, GestureEventType } from '../types/types';
import { useEffect, useState } from 'react';
import Snake from './Snake';
import { Dimensions } from 'react-native';
import { checkGameOver } from '../utils/checkGameOver';

const SNAKE_INITIAL_POS = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POS = { x: 5, y: 20 };
const SCREEN_DIMENSION = Dimensions.get('window');
const GAME_BOUNDS = {
	xMin: 0,
	xMax: SCREEN_DIMENSION.width / 11,
	yMin: 0,
	yMax: SCREEN_DIMENSION.height / 11,
};
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 0;

export default function Game(): JSX.Element {
	const [direction, setDirection] = useState<Direction>(Direction.Right);
	const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POS);
	const [food, setFood] = useState<Coordinate>(FOOD_INITIAL_POS);
	const [score, setScore] = useState<number>(0);
	const [isGameOver, setIsGameOver] = useState<boolean>(false);
	const [isPaused, setIsPaused] = useState<boolean>(false);

	useEffect(() => {
		if (!isGameOver) {
			const intervalId = setInterval(() => {
				!isPaused && moveSnake();
			}, MOVE_INTERVAL);

			return () => clearInterval(intervalId);
		}
	}, [snake, isGameOver, isPaused]);

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

	const moveSnake = () => {
		const snakeHead = snake[0];
		const newSnakeHead = { ...snakeHead };

		if (checkGameOver(snakeHead, GAME_BOUNDS)) {
			setIsGameOver((prev) => !prev);
			return;
		}

		switch (direction) {
			case Direction.Up:
				newSnakeHead.y -= 1;
				break;
			case Direction.Down:
				newSnakeHead.y += 1;
				break;
			case Direction.Left:
				newSnakeHead.x -= 1;
				break;
			case Direction.Right:
				newSnakeHead.x += 1;
				break;
			default:
				break;
		}

		setSnake([newSnakeHead, ...snake.slice(0, -1)]);
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
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
	},
});
