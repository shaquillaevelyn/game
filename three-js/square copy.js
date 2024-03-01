import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGLAvailable() ) {

// 	// we need a scene, a camera and a renderer
// const scene = new THREE.Scene()
// // creates a scene object - initialises a contructor that will spit out an object

// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
// // perspective camera ( FOV, Aspect ratio, near, far)
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight);
// //create a renderer object but also tell the renderer what size we want it to render
// document.body.appendChild(renderer.domElement)

// // Lets make the cube 

class Cube {
    scene;
    camera;
    renderer;

    constructor(x, y){

        this.scene =  new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, x / y, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(x, y);
        document.body.appendChild(this.renderer.domElement)

        this.geometry = new THREE.BoxGeometry(1,1,1);
        this.vector = new THREE.Vector3( x, y, 0 );
        this.material = new THREE.MeshBasicMaterial({color:  0x2602c7});
        this.cube = new THREE.Mesh(this.geometry, this.material);

        this._animate = animate.bind( this )
    }

    render(){
        this.renderer.render(this.scene, this.camera)
    }



}

function animate(){

    requestAnimationFrame( this._animate );
    this.render()
}


const x = window.innerWidth
const y = window.innerHeight

const sceneManager = new Cube(x, y);

sceneManager._animate();


// const geometry = new THREE.BoxGeometry(1,1,1);
// const material = new THREE.MeshBasicMaterial({color:  0x2602c7})
// const cube = new THREE.Mesh(geometry, material);


// can we make three cubes?


// camera.position.z = 3;

// const cube1 = new Cube(100, 100)
// const cube2 = new Cube(400, 400)
// const cube3 = new Cube(700, 700)

// scene.add(cube1)
// scene.add(cube2)
// scene.add(cube3)

// const cubeArray = [cube1, cube2, cube3]


// function animate(){
//     requestAnimationFrame(animate);

//     // const factor = Math.random() * 0.01
//     cubeArray.forEach(cube => {
//         cube.cube.rotation.x += 0.01
//         cube.cube.rotation.y += 0.01
//     });

//     renderer.render(scene, camera)
// }
// animate();

} else {

	const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}


