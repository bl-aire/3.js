import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
//renderer.render(scene, camera)

/**
 * Animation along the y-axis + Using Clock + Animating Object3D(e.g camera) using the POSITION property and MATH.SIN()
 */

const clock = new THREE.Clock()

const tick = () => {

	// Time
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    camera.position.x =  Math.cos(elapsedTime) //(has animates the camera)
    camera.position.y =  Math.sin(elapsedTime)
    camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)
    
    // Call tick again on the next frame
    
    window.requestAnimationFrame(tick)
}

tick()

/**
 * USING  A LIBRARY E.G GSAP
 */

/**
 * npm install --save gsap@3.5.1
 * 
 
import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    mesh.rotation.y = elapsedTime

    // ...
}

tick()

*/