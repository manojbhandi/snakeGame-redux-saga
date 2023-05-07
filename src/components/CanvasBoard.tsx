import { useCallback, useEffect, useRef, useState } from "react";
import { IObjectBody, drawObject, generateRandomPosition } from "../utilities";
import { useDispatch, useSelector } from "react-redux";
import { IGlobaleState } from "../store/reducers";
import { MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, MOVE_UP, makeMove } from "../store/actions";

export interface IcanvaBoard {
    height : number,
    width : number
}

const CanvasBoard = ({height, width}: IcanvaBoard) => {
    const dispatch = useDispatch()
    const snake1 = useSelector((state: IGlobaleState)=>state.snake)
    const canvasRef = useRef<HTMLCanvasElement| null>(null)
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)
    const [pos, setPos] = useState<IObjectBody>(generateRandomPosition(width, height))
    const {disallowedDierction} = useSelector((state:IGlobaleState)=> state)
    useEffect(()=>{
        //context details
        setContext(canvasRef.current && canvasRef.current.getContext('2d'))
        //snake
        drawObject(context,snake1,'#91c483')
        //food
        drawObject(context,[pos], 'red')
    },[context]);

    const moveSnake = useCallback((dx = 0, dy = 0, ds : string)=>{

        if(dx > 0 && dy === 0 && ds !== 'RIGHT'){
            dispatch(makeMove(dx, dy, MOVE_RIGHT))
        }
        if(dx < 0 && dy === 0 && ds != "LEFT"){
           dispatch(makeMove(dx, dy, MOVE_LEFT))
        }
        if(dx === 0 && dy > 0 && ds !== 'UP'){
            dispatch(makeMove(dx, dy, MOVE_UP))
        }
        if(dx === 0 && dy < 0 && ds != "DOWN"){
            dispatch( makeMove(dx, dy, MOVE_DOWN))
        }

    },[dispatch])

    const handleKeyEvents = useCallback(
        (event:KeyboardEvent) => {
        if(disallowedDierction){
            switch(event.key){
                case "w":
                    moveSnake(0,20,disallowedDierction)
                    break;
                case "a":
                    moveSnake(-20,0,disallowedDierction)
                    break;
                case "s":
                    moveSnake(0,-20,disallowedDierction)
                    break;
                case "d":
                    moveSnake(20,0,disallowedDierction)
                    break;
            }
        }else{
            if(
                disallowedDierction !== 'UP' &&
                disallowedDierction !== "DOWN" &&
                disallowedDierction !== "LEFT" &&
                event.key === 'd'
            ){
                moveSnake(20,0,"LEFT")
            }

        }
    },[disallowedDierction, moveSnake])
    useEffect(()=>{
        window.addEventListener("keypress",handleKeyEvents);
        //cleanup function
        return () => {
            window.removeEventListener("keypress",handleKeyEvents);
        }
    },[disallowedDierction, handleKeyEvents])

    return (
        <canvas
            height={height}
            width={width}
            ref={canvasRef}
            style={{border:'3px solid black'}}
        >
            
        </canvas>
    )
};
export default CanvasBoard;