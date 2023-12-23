import './style.css'
import { ThreeReciever } from './components/ThreeReciever.tsx';
import { Toolbar } from './components/Toolbar.tsx';
import { SetCubeColor } from './commands/SetCubeColor.tsx';
import { SetCameraDistance } from './commands/SetCameraDistance.tsx';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="root">
  </div>
`
const root = document.getElementById("root")
const threeReciever = new(ThreeReciever)
const toolbar = new(Toolbar)

if (root) {
  root.appendChild( threeReciever.getRenderer().domElement );
  root.appendChild( toolbar.toHtml() )
}

const cubeColorElement = toolbar.getCubeColorElement()
cubeColorElement.addEventListener('input', () => {
  toolbar.setCubeColorCommand(new SetCubeColor(threeReciever, cubeColorElement.value))
  toolbar.executeCubeColorCommand()
  console.log(cubeColorElement.value)
})

const cameraDistanceElement = toolbar.getCameraDistanceElement()
cameraDistanceElement.addEventListener('input', () => {
  toolbar.setCameraDistanceCommand(new SetCameraDistance(threeReciever, parseInt(cameraDistanceElement.value)))
  toolbar.executeCameraDistanceCommand()
  console.log(cameraDistanceElement.value)
})

threeReciever.animate();

window.addEventListener( 'resize', threeReciever.onWindowResize, false );

