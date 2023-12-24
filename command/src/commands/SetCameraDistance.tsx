import { ThreeReciever } from "../components/ThreeReciever";
import { Command } from "../interfaces/Command";

export class SetCameraDistance implements Command {

    reciever: ThreeReciever
    distance: number

    constructor(reciever: ThreeReciever, distance: number) {
        this.reciever = reciever
        this.distance = distance
    }

    execute(): void {
        this.reciever.setCameraDistance(this.distance)
    }
}