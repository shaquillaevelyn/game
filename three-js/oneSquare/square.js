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



const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color:  0x2602c7})
const cube = new THREE.Mesh(geometry, material);
scene.add(cube)

// can we make three cubes?


camera.position.z = 3;


// const factor = Math.random() * 0.1
// setInterval(factor, 2000)


function animate(){
    requestAnimationFrame(animate);

    const factor = Math.random() * 0.01
    cube.rotation.x += factor
    cube.rotation.y += factor 
    renderer.render(scene, camera)
}
animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}


