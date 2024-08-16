import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Game from '../src/components/Game';
import 'react-native-gesture-handler';

export default function _layout() {
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Game />
		</GestureHandlerRootView>
	);
}
