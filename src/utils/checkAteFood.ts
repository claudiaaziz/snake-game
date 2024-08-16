import { Coordinate } from '../types/types';

export const checkAteFood = (
	head: Coordinate,
	food: Coordinate,
	area: number
): boolean => {
	const xDistToFood: number = Math.abs(head.x - food.x);
	const yDistToFood: number = Math.abs(head.y - food.y);

	return xDistToFood < area && yDistToFood < area;
};
