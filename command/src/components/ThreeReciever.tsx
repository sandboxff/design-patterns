import * as THREE from 'three';

export class ThreeReciever {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();
    cube;
    constructor () 
    {
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this.cube = new THREE.Mesh( geometry, material );
        this.scene.add( this.cube );
        this.camera.position.z = 5;
        document.body.appendChild(this.renderer.domElement)
    }
    animate() {
        requestAnimationFrame( this.animate.bind(this) );
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );
    }
    onWindowResize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.render( this.scene, this.camera );
    }
    getRenderer() {
        return this.renderer
    }
    setCubeColor(color: string) {
        this.cube.material.color.setHex(parseInt(color.substring(1), 16))
        console.log(color);
        console.log(parseInt(color, 16));
        console.log(this.cube.material.color);
    }
    setCameraDistance(distance: number) {
        this.camera.position.z = distance
    }
}
