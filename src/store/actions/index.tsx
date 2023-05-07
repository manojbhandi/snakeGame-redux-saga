//saga actions
export const MOVE_RIGHT = "MOVE_RIGHT";
export const MOVE_LEFT = "MOVE_LEFT";
export const MOVE_UP = "MOVE_UP";
export const MOVE_DOWN = "MOVE_DOWN";

//reducer actions
export const RIGHT = "RIGHT";
export const LEFT = "LEFT";
export const UP = "UP";
export const DOWN = "DOWN";

// initialy only right direction
export const SET_DIS_DIRECTION = "SET_DIS_DIRECTION";

//for each move - dx, dy => deltas , move -> move type
export const makeMove = (dx : number, dy : number, move: string) => {
    alert(move)
    return{

        type: move,
        payload : [dx, dy]
    }
}

export const moveRight = (payload: any) => {
    return{
        type:MOVE_RIGHT,
        data: payload 
    }
}

