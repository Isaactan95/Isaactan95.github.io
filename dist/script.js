import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {Text} from 'troika-three-text'


// Scene
const scene = new THREE.Scene()
const color = 0xC7DBFF;
const near = 10;
const far = 60;
scene.fog = new THREE.Fog(color, near, far);

/**
 * data
 */
let data = [['18.649063110351562', '0.3811556398868561', '17.690000534057617', '2.7288899421691895', '1266.1300048828125', '3.384082542002789e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['18.858848571777344', '0.38969165086746216', '17.8700008392334', '2.691689968109131', '1381.489990234375', '3.3840979562858965e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.01799774169922', '0.4307803511619568', '18.190000534057617', '2.7234199047088623', '1409.0799560546875', '3.384116173165933e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.112037658691406', '0.42217200994491577', '18.530000686645508', '2.718319892883301', '1355.780029296875', '3.38413158744904e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.07586669921875', '0.4302016496658325', '18.760000228881836', '2.692239999771118', '1285.5899658203125', '3.384147001732148e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.126502990722656', '0.45848628878593445', '18.8700008392334', '2.693150043487549', '1275.0799560546875', '3.384161014716791e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.148208618164062', '0.489519864320755', '19.040000915527344', '2.693880081176758', '1307.1099853515625', '3.3841764289998986e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.263946533203125', '0.5348765850067139', '19.200000762939453', '2.7037301063537598', '1345.300048828125', '3.384191843283006e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.22777557373047', '0.5710462331771851', '19.34000015258789', '2.7137598991394043', '1373.6199951171875', '3.384207257566114e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.162673950195312', '0.6399855613708496', '19.469999313354492', '2.7159500122070312', '1338.5400390625', '3.38422547444615e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.37969207763672', '0.6327516436576843', '19.610000610351562', '2.704819917678833', '1256.4300537109375', '3.3842408887292576e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0'], ['19.40862274169922', '0.7280224561691284', '19.709999084472656', '2.719409942626953', '1350.7099609375', '3.384256303012365e-39', '0.0', '0.0', '0.0', '0.0', '0.0', '0.0']]

/**
 * text
 */
let myText = new Text();

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')


//loader
const loader = new GLTFLoader()
const cubeTextureLoader = new THREE.CubeTextureLoader()

//model
const environmentMapTexture = cubeTextureLoader.load([
    'texture/4/px.png',
    'texture/4/nx.png',
    'texture/4/py.png',
    'texture/4/ny.png',
    'texture/4/pz.png',
    'texture/4/nz.png'
])
environmentMapTexture.encoding = THREE.sRGBEncoding



/**
 * update materials
 */
const updateAllMaterials = () =>
{
    scene.traverse((child) =>
    {
        if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
        {
            child.material.envMap = environmentMapTexture
            child.material.envMapIntensity = 1
            child.material.needsUpdate = true
            child.castShadow = true
            child.receiveShadow = true
        }
    })
}

let model;

loader.load('/model/production_line_3.gltf', function (gltf){
    model = gltf.scene;
    model.traverse(function (child) {
        if(child.isMesh){
            child.material.envMap = environmentMapTexture
            child.material.metalness = 0
        }
    })
    // model.position.z = -15
    // model.scale.set(0.1, 0.1, 0.1)
    // model.rotateY(Math.PI)
    // scene.add(model);
    for (let i = 0; i < 12; i++){
        let copy = gltf.scene.clone()
        if ( i !== 0)
        {
            copy.position.x += i * 5
        }
        copy.name = 'line_' + i
        copy.position.z = -15
        copy.scale.set(0.1, 0.1, 0.1)
        copy.rotateY(Math.PI)
        scene.add(copy)
    }
    updateAllMaterials()
})
console.log(scene);

// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

//backgound
scene.background = new THREE.Color( 0xe0e0e0 )
scene.environment = environmentMapTexture

const ambientLight = new THREE.AmbientLight(0xC7DBFF, 1)
scene.add(ambientLight)



const directionalLight = new THREE.DirectionalLight(0x00fffc, 1)
directionalLight.position.set(0.25, 3, -2.25)
// directionalLight.castShadow = true
// directionalLight.shadow.camera.far = 15
// directionalLight.shadow.mapSize.set(1980,1980)
scene.add(directionalLight)

// const directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)
// scene.add(directionalLightCameraHelper)
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = -10.3
camera.position.y = 7.9
camera.position.z = -2.8


// gui.add(camera.position, 'y').min(1).max(30).step(0.1)
// gui.add(camera.position, 'x').min(-20).max(30).step(0.1)
// gui.add(camera.position, 'z').min(-20).max(30).step(0.1)

/**
 * raycaster
 */
//  const raycaster = new THREE.Raycaster()

/**
 * mouse
 */
const mouse = new THREE.Vector2()

window.addEventListener('mousemove', (event) =>
{
    mouse.x = event.clientX / sizes.width * 2 - 1
    mouse.y =  - (event.clientY /sizes.height) * 2 + 1
})

// window.addEventListener('click', () =>
// {
//     if(currentIntersect)
//     {
//         console.log(currentIntersect.object.parent)
//         console.log(currentIntersect.object.parent.name)
//         console.log(currentIntersect.object.userData)
//     }
// })

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.minPolarAngle = 0;
controls.maxPolarAngle =  Math.PI * 0.4;
// controls.autoRotate = true
// controls.autoRotateSpeed = 1
controls.minDistance = 0;
controls.maxDistance = 50;
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding
renderer.physicallyCorrectLights = true
renderer.toneMapping = THREE.CineonToneMapping
renderer.toneMappingExposure = 3
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap

gui
    .add(renderer, 'toneMapping', {
        No: THREE.NoToneMapping,
        Linear: THREE.LinearToneMapping,
        Reinhard: THREE.ReinhardToneMapping,
        Cineon: THREE.CineonToneMapping,
        ACESFilmic: THREE.ACESFilmicToneMapping
    })
    .onFinishChange(() =>
    {
        renderer.toneMapping = Number(renderer.toneMapping)
        updateAllMaterials()
    })

gui.add(renderer, 'toneMappingExposure').min(0).max(5).step(0.001)

/**
 * Animate
 */
const clock = new THREE.Clock()

/**
 * static text config
 */
// myText.text = "TEMP After Vapour: " + parseInt(data[0][0]).toFixed(2)+ 
//             "\nPressure after vaporization :  " + parseInt(data[0][1]).toFixed(2) + 
//             "\nTemperature of Flow : " + parseInt(data[0][2]).toFixed(2) +
//             "\nPressure in in flow meter : " + parseInt(data[0][3]).toFixed(2) +
//             "\nFlow rate/hour : " + parseInt(data[0][4]).toFixed(2);

// myText.name = "myText"
// myText.color = 0x000000
// myText.fontSize = 0.7
// myText.position.z =  4
// myText.position.x =  2
// myText.position.y =  10

// scene.add(myText);
// myText.sync()

// let currentIntersect = null

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Adding raycasting here
    // const intersects = raycaster.intersectObjects(scene.children, true)
    // console.log(intersects)

    // if(intersects.length)
    // {
    //     currentIntersect = intersects[0]
    // }
    // else
    // {
    //     currentIntersect = null
    // }
    // raycaster.setFromCamera(mouse, camera)

    myText.rotation.y += 0.003

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)
    
    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()