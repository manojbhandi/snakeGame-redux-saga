export interface IObjectBody{
    x : number;
    y : number;
}


//utility function for clearing canvas
export const clearBoard = (context: CanvasRenderingContext2D | null) => {
    if(context){
        context.clearRect(0, 0, 1000, 600);
    }
}

//Utility function for drawing snake object

export const drawObject = (
    context : CanvasRenderingContext2D | null,
    objectbody : IObjectBody[],
    fillColor : string,
    strokeStyle = '#146356'

) => {
    if(context){
        objectbody?.forEach((object:IObjectBody)=>{
            context.fillStyle = fillColor;
            context.strokeStyle = strokeStyle;
            context?.fillRect(object.x, object.y, 20, 20);
            context?.strokeRect(object.x, object.y, 20, 20);
        })
    }
}
//to enerate random number

export const randomNumber = (max: number) => {
    let random = Math.random() * max;

    return random - (random % 20);
}

// to generate Random position

export const generateRandomPosition = (width : number, height: number) => {
    return {
        x : randomNumber(width),
        y : randomNumber(height)
    }
}



