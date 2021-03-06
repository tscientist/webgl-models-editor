import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { Camera } from 'three'
import { Console } from 'console'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.x = 8
camera.position.y = 3
camera.position.z = 7.5

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(8, 0, 0)

const light1 = new THREE.PointLight()
light1.position.set(10, 10, 10)
scene.add(light1)

const light2 = new THREE.PointLight()
light2.position.set(-10, 10, 10)
scene.add(light2)

const icosahedronGeometryObject1 = new THREE.IcosahedronGeometry(1, 0)
const material = new THREE.MeshNormalMaterial()

const object1 = new THREE.Mesh(icosahedronGeometryObject1, material)
object1.position.set(4, 0, 0)
object1.animations.push()
scene.add(object1)

const object2 = new THREE.Mesh(icosahedronGeometryObject1, material)
object2.position.set(4, 0, 0)
object1.add(object2)

const object3 = new THREE.Mesh(icosahedronGeometryObject1, material)
object3.position.set(4, 0, 0)
object2.add(object3)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function addObject() {
    const newObject = new THREE.Mesh(
        new THREE.SphereBufferGeometry(),
        new THREE.MeshPhongMaterial({ color: 0x00FF00 })
    )
    newObject.position.set(4, 0, 0)
    object3.add(newObject)
    return newObject;
}

const rotation1 = {
    animation: true
}

const rotation2 = {
    animation: true
}

const rotation3 = {
    animation: true
}

const movingOBject1 = {
    animation: false
}

const movingOBject2 = {
    animation: false
}

const movingOBject3 = {
    animation: false
}

const cameraTargetOBject1 = {
    target: false
}

const cameraTargetOBject2 = {
    target: false
}

const cameraTargetOBject3 = {
    target: false
}

const gui = new GUI()

const object1Folder = gui.addFolder('Object1')

object1Folder.add(activeRotationObject1(), 'animation')
object1Folder.add(moveObject1(), 'animation').name('moving')

const object1RotationFolder = object1Folder.addFolder('Rotation')
object1RotationFolder.add(object1.rotation, 'x', 0, Math.PI * 2)
object1RotationFolder.add(object1.rotation, 'y', 0, Math.PI * 2)
object1RotationFolder.add(object1.rotation, 'z', 0, Math.PI * 2)

const object1PositionFolder = object1Folder.addFolder('Position')
object1PositionFolder.add(object1.position, 'x', 0, 10, 0.01)
object1PositionFolder.add(object1.position, 'y', -10, 10, 2)
object1PositionFolder.add(object1.position, 'z', -10, 10, 2)

const object1ScaleFolder = object1Folder.addFolder('Scale')

object1ScaleFolder.add(object1.scale, 'x', -5, 5)
object1ScaleFolder.add(object1.scale, 'y', -5, 5)
object1ScaleFolder.add(object1.scale, 'z', -5, 5)
object1Folder.open()

//Object2
const object2Folder = gui.addFolder('Object2')
object2Folder.add(activeRotationObject2(), 'animation')
object2Folder.add(moveObject2(), 'animation').name('moving')

const object2RotationFolder = object2Folder.addFolder('Rotation')
object2RotationFolder.add(object2.rotation, 'x', 0, Math.PI * 2)
object2RotationFolder.add(object2.rotation, 'y', 0, Math.PI * 2)
object2RotationFolder.add(object2.rotation, 'z', 0, Math.PI * 2)

const object2PositionFolder = object2Folder.addFolder('Position')
object2PositionFolder.add(object2.position, 'x', 0, 10, 0.01)
object2PositionFolder.add(object2.position, 'y', -10, 10, 2)
object2PositionFolder.add(object2.position, 'z', -10, 10, 2)

const object2ScaleFolder = object2Folder.addFolder('Scale')

object2ScaleFolder.add(object2.scale, 'x', -5, 5)
object2ScaleFolder.add(object2.scale, 'y', -5, 5)
object2ScaleFolder.add(object2.scale, 'z', -5, 5)

//Object3
const object3Folder = gui.addFolder('Object3')
object3Folder.add(activeRotationObject3(), 'animation')
object3Folder.add(moveObject3(), 'animation').name('moving')

const object3RotationFolder = object3Folder.addFolder('Rotation')
object3RotationFolder.add(object3.rotation, 'x', 0, Math.PI * 2)
object3RotationFolder.add(object3.rotation, 'y', 0, Math.PI * 2)
object3RotationFolder.add(object3.rotation, 'z', 0, Math.PI * 2)

const object3PositionFolder = object3Folder.addFolder('Position')
object3PositionFolder.add(object3.position, 'x', 0, 10, 0.01)
object3PositionFolder.add(object3.position, 'y', -10, 10, 2)
object3PositionFolder.add(object3.position, 'z', -10, 10, 2)

const object3ScaleFolder = object3Folder.addFolder('Scale')

object3ScaleFolder.add(object3.scale, 'x', -5, 5)
object3ScaleFolder.add(object3.scale, 'y', -5, 5)
object3ScaleFolder.add(object3.scale, 'z', -5, 5)

//Camera
const cameraFolder = gui.addFolder('Camera')
const cameraTranslationFolder = cameraFolder.addFolder('Position')
cameraTranslationFolder.add(camera.position, 'x', -30, 30)
cameraTranslationFolder.add(camera.position, 'y', -15, 15)
cameraTranslationFolder.add(camera.position, 'z', -20, 20)

const cameraRotationFolder = cameraFolder.addFolder('Rotation')
cameraRotationFolder.add(camera.rotation, 'x',  -2, Math.PI * 2)
cameraRotationFolder.add(camera.rotation, 'y',  0, Math.PI * 2)
cameraRotationFolder.add(camera.rotation, 'z',  0, Math.PI * 2)

const cameraFocusFolder = cameraFolder.addFolder('Focus')
cameraFocusFolder.add(cameraTargetObject1(), 'target').name('Object 1')
cameraFocusFolder.add(cameraTargetObject2(), 'target').name('Object 2')
cameraFocusFolder.add(cameraTargetObject3(), 'target').name('Object 3')

cameraFolder.add(object1, 'visible')

const stats = Stats()
document.body.appendChild(stats.dom)

function animate() {
    requestAnimationFrame(animate)

    // object1.rotation.x = Math.PI / 2;    
    controls.update()
    render()
    const object1WorldPosition = new THREE.Vector3()
    object1.getWorldPosition(object1WorldPosition)
    const object2WorldPosition = new THREE.Vector3()
    object2.getWorldPosition(object2WorldPosition)
    const object3WorldPosition = new THREE.Vector3()
    object3.getWorldPosition(object3WorldPosition)
    stats.update()
}

function activeRotationObject1 (){
    rotation1.animation = true;
    return rotation1;
}

function activeRotationObject2 (){
    rotation2.animation = true;
    return rotation2;
}
function activeRotationObject3 (){
    rotation3.animation = true;
    return rotation3;
}

function moveObject1() {
    movingOBject1.animation = false;
    return movingOBject1;
}

function moveObject2() {
    movingOBject2.animation = false;
    return movingOBject2;
}

function moveObject3() {
    movingOBject3.animation = false;
    return movingOBject3;
}

function cameraTargetObject1() {
    cameraTargetOBject1.target = false;
    return cameraTargetOBject1;
}

function cameraTargetObject2() {
    cameraTargetOBject2.target = false;
    return cameraTargetOBject2;
}

function cameraTargetObject3() {
    cameraTargetOBject3.target = false;
    return cameraTargetOBject3;
}

function render() {
    renderer.render(scene, camera)

    if (rotation1.animation == true) {
        object1.rotation.x += 0.005;
    }

    if (rotation2.animation == true) {
        object2.rotation.x += 0.005;
    }
    
    if (rotation3.animation == true) {
        object3.rotation.x += 0.005;
    }

    if (movingOBject1.animation == true) {
        let speed = 0.01;
        if (object1.position.x > 0){
            object1.position.x -= speed;
        } 
    } 

    if (movingOBject2.animation == true) {
        let speed = 0.01;
        if (object2.position.x > 0){
            object2.position.x -= speed;
        } 
    } 

    if (movingOBject3.animation == true) {
        let speed = 0.01;
        if (object3.position.x > 0){
            object3.position.x -= speed;
        } 
    } 

    if (cameraTargetOBject1.target == true) {
        controls.target.set(object1.position.x, object1.position.y, object1.position.z)
    } else if (cameraTargetOBject2.target == true) {
        controls.target.set(object2.position.x, object2.position.y, object2.position.z)
    } else if (cameraTargetOBject3.target == true) {
        controls.target.set(object3.position.x, object3.position.y, object3.position.z)
    } else {
        controls.target.set(8, 0, 0)
    }

}

animate()

  