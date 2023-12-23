import { ThreeReciever } from "../components/ThreeReciever";
import { Command } from "../interfaces/Command";

export class SetCubeColor implements Command {

    reciever: ThreeReciever
    color: string

    constructor(reciever: ThreeReciever, color: string) {
        this.reciever = reciever
        this.color = color
    }

    execute(): void {
        this.reciever.setCubeColor(this.color)
        console.log(this.color);
        
    }
}