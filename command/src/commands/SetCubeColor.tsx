import { ThreeManager } from "../components/ThreeManager";
import { Command } from "../interfaces/Command";

export class SetCubeColor implements Command {

    manager: ThreeManager
    color: string

    constructor(manager: ThreeManager, color: string) {
        this.manager = manager
        this.color = color
    }

    execute(): void {
        this.manager.setCubeColor(this.color)
    }
}