import * as THREE from 'three'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5), //width, height, depth, widthSegment, heightSegment, depthSegment. Default _ 1
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 100) //FOV, aspect ratio, near, far. PERSPECTIVE CAMERA

//const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100) // LRTB, near, far. ORTHOGRAPHIC CAMERA (due to LRTB, the square rendered stretches to fit the canvas which is rectangular so it is distorted. We need to use aspect ratio)

//const aspectRatio = sizes.width / sizes.height
//const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)

//camera.position.x = 2
//camera.position.y = 2
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Cursor
const cursor = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (event) => {
    cursor.x = event.clientX /sizes.width - 0.5
    cursor.x = event.clientY /sizes.height - 0.5

    console.log(cursor.x, cursor.y) //mouse position is stored in cursor( 0 = center, -0.5 = far left, 0.5 = far right)
})

// Animate
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //mesh.rotation.y = elapsedTime;

    //Update camera
    camera.position.x = cursor.x
    camera.position.y = cursor.y

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()