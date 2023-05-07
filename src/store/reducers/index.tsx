import { MOVE_RIGHT, RIGHT } from "../actions"

interface ISnakeCord {
    x: number,
    y : number
}

export interface IGlobaleState {
    snake : ISnakeCord[] | [];
    disallowedDierction : string;
}

const globalState : IGlobaleState = {
    snake : [
        {x : 580, y : 300},
        {x : 560, y : 300},
        {x : 540, y : 300},
        {x : 520, y : 300},
        {x : 500, y : 300},
    ],
    disallowedDierction : "",
}

// const GloablState = {
//     state: ""
// }

const gameReducer  = (state = globalState ,action: any) => {
    switch(action.type){
        case RIGHT:{
            //copy the state
            let newSnake = [...globalState.snake]
            newSnake = [
                //New X and Y Coodinates
                {
                    x : globalState.snake[0].x + action.payload[0],
                    y : globalState.snake[0].y + action.payload[1]
                }, ...newSnake
            ];
            newSnake.pop();

            return{
                ...globalState, 
                snake : newSnake
            }
        }
            

        default:
            return globalState;
    }
}
export default gameReducer;