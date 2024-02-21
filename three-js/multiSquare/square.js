import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGLAvailable() ) {

	// we need a scene, a camera and a renderer
const scene = new THREE.Scene()
// creates a scene object - initialises a contructor that will spit out an object

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
// perspective camera ( FOV, Aspect ratio, near, far)
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
//create a renderer object but also tell the renderer what size we want it to render
document.body.appendChild(renderer.domElement)

// Lets make the cube 


class Cube {

    constructor(){
        this.geometry = new THREE.BoxGeometry(1,1,1);
        this.material = new THREE.MeshBasicMaterial({color:  0x2602c7})
        this.cube = new THREE.Mesh(this.geometry, this.material);
        scene.add(this.cube)
        camera.position.z = 3;
    }



   update(){
        const factor = Math.random() * 0.01
        this.cube.rotation.x += factor
        this.cube.rotation.y += factor 
    }
}

const cubeone = new Cube()

function animate(){
    cubeone.update()
    renderer.render(scene, camera);
    requestAnimationFrame(animate);


}

animate();


} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}


