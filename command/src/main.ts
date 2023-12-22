import './style.css'
import { ThreeManager } from './components/ThreeManager.tsx';
import { Toolbar } from './components/Toolbar.tsx';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="root">
  </div>
`
const root = document.getElementById("root")
const threeManager = new(ThreeManager)
const toolbar = new(Toolbar)

if (root) {
  root.appendChild( threeManager.getRenderer().domElement );
  root.appendChild( toolbar.toHtml() )
}

threeManager.animate();

window.addEventListener( 'resize', threeManager.onWindowResize, false );

