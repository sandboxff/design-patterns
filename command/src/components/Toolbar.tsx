import { Command } from "../interfaces/Command";

export class Toolbar {
    toolbar: HTMLElement;
    cubeColorElement: HTMLInputElement;
    cameraDistanceElement: HTMLInputElement;
    cubeColorCommand?: Command;
    cameraDistanceCommand?: Command;

    constructor() {
        this.toolbar = document.createElement('div')
        this.toolbar.id = 'toolbar'

        this.cubeColorElement = document.createElement('input')
        this.cubeColorElement.setAttribute('type', 'color')

        this.cameraDistanceElement = document.createElement('input')
        this.cameraDistanceElement.setAttribute('type', 'range')
        this.cameraDistanceElement.setAttribute('min', '1')
        this.cameraDistanceElement.setAttribute('max', '50')
        this.cameraDistanceElement.setAttribute('step', '1')
        this.cameraDistanceElement.setAttribute('value', '5')

        this.toolbar.appendChild(this.cubeColorElement)
        this.toolbar.appendChild(this.cameraDistanceElement)
    }
    toHtml() {
        return(
            this.toolbar
        )
    }
    getCubeColorElement() {
        return this.cubeColorElement
    }
    getCameraDistanceElement() {
        return this.cameraDistanceElement
    }
    setCubeColorCommand(cubeColorCommand: Command) {
        this.cubeColorCommand = cubeColorCommand
    }
    executeCubeColorCommand() {
        this.cubeColorCommand?.execute()
    }
    setCameraDistanceCommand(cameraDistanceCommand: Command) {
        this.cameraDistanceCommand = cameraDistanceCommand
    }
    executeCameraDistanceCommand() {
        this.cameraDistanceCommand?.execute()
    }
}