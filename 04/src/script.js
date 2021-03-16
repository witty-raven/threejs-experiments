import './style.css'
console.log("Server started");

import * as THREE from 'three';

console.log(THREE);

// Scene
const scene = new THREE.Scene();
const axesHelper = new THREE.AxisHelper(2);
axesHelper.position.set(0, 0, 0)
scene.add(axesHelper);


// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 5
camera.position.x = -1
camera.position.y = 2
scene.add(camera)

// Canvas
const canvas = document.querySelector('canvas.webgl')

// ...

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})


const cubeGroup = new THREE.Group();

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xFFFFFF }))


cubeGroup.add(cube1);

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xFA00AB }))
cube2.position.set(1, 1, 1)
cubeGroup.add(cube2);

const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0xAB0A00 }))
cube3.position.set(0, 2.2, 1)
cubeGroup.add(cube3);

scene.add(cubeGroup)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


//console.log("Distance between mesh and camera: ", mesh.position.distanceTo(camera.position))

setTimeout(() => {
    camera.position.x = 2


    cubeGroup.position.set(0, 1, -2)
    renderer.render(scene, camera)

}, 500);