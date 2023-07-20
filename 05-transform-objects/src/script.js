import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */

//const geometry = new THREE.BoxGeometry(1, 1, 1)
//const material = new THREE.MeshBasicMaterial({ color: "red" })
//const mesh = new THREE.Mesh(geometry, material)

//mesh.position.x = 0.7
//mesh.position.y = - 0.6
//mesh.position.z = 1

//mesh.position.set(0.7, - 0.6, 1)
//console.log(mesh.position.normalize())...Normal position and vector object in devtool console
//console.log(mesh.position.length())...1.3(square root of the sum of the squares of x, y and z?)

//mesh.scale.x = 1
//mesh.scale.y = 1
//mesh.scale.z = 1

//mesh.rotation.x = Math.PI * 0.25
//mesh.rotation.y = Math.PI * 0.25

//scene.add(mesh)

const group = new THREE.Group()
group.scale.y = 2
group.rotation.y = 0.2
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube1.position.x = - 1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
cube3.position.x = 1.5
group.add(cube3)


/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3

//console.log(mesh.position.distanceTo(camera.position))...2.202

//camera.lookAt(new THREE.Vector3(0, - 1, 0)) camera looks below the cube
//camera.lookAt(mesh.position)
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

