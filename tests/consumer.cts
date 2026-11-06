import * as api from '@lp-labs/chess-square-codec';
import { squareToIndex, indexToSquare } from '@lp-labs/chess-square-codec';
const index = squareToIndex('e4');
if (indexToSquare(index) !== 'e4') throw new Error('Square round trip failed');
// @ts-expect-error invalid argument must be rejected by declarations
api.squareToIndex(4);
