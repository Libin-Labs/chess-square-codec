export function squareToIndex(square: string): number {
  if (typeof square !== 'string' || !/^([a-hA-H])([1-8])$/.test(square))
    throw new TypeError('Expected algebraic square a1..h8');
  return Number(square[1]) - 1 + (square.toLowerCase().charCodeAt(0) - 97) * 8;
}
export function indexToSquare(index: number): string {
  if (!Number.isInteger(index) || index < 0 || index > 63)
    throw new RangeError('Square index must be in [0,63]');
  return String.fromCharCode(97 + Math.floor(index / 8)) + String((index % 8) + 1);
}
export function mirrorSquare(
  square: string,
  axis: 'horizontal' | 'vertical' | 'both' = 'both',
): string {
  const i = squareToIndex(square),
    file = Math.floor(i / 8),
    rank = i % 8;
  if (!['horizontal', 'vertical', 'both'].includes(axis))
    throw new TypeError('Unknown mirror axis');
  const f = axis === 'horizontal' || axis === 'both' ? 7 - file : file,
    r = axis === 'vertical' || axis === 'both' ? 7 - rank : rank;
  return indexToSquare(f * 8 + r);
}
