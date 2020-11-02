import {MAX_POS} from "../constant";
import {getRandomInteger} from './number';
export function getInitialTileList() {
    const tileList = [];
    const tile1 = makeTile(tileList);
    tileList.push(tile1);
    const tile2 = makeTile(tileList);
    tileList.push(tile2);
    return tileList;
}
function checkCollision(tileList, newTile) {
    return tileList.some(tile => tile.x === newTile.x && tile.y === newTile.y);
}
export function makeTile(tileList) {
    let newTile;
    while (!newTile || (tileList && checkCollision(tileList, newTile))) {
        newTile = {
            x: getRandomInteger(1, MAX_POS),
            y: getRandomInteger(1, MAX_POS),
            value: 2,
        };
    }
    return newTile;
}



