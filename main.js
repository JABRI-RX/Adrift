import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1,1000);
const rend = new THREE.WebGLRenderer({
    canvas:document.querySelector("#bg")
});
const loader = new GLTFLoader();
const object  =loader.load("imgs/ofppt.glb",function (glft)
{
    scene.add(glft.scene);

},undefined,function(error){
    console.error(error)
}
)

rend.setPixelRatio(window.devicePixelRatio);
rend.setSize(781,331);
rend.setClearColor(0xffffff);
camera.position.z = 10;
camera.position.x = 10;
camera.position.y = 10;
// const torus = new THREE.Mesh(
//     new THREE.TorusGeometry(0.3,10,10,10),
//     new THREE.MeshStandardMaterial(0x2824c2)
// )
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xffffff);

const grid = new THREE.GridHelper(200,15);
const orbit = new OrbitControls(camera,rend.domElement);


// scene.add(torus)
scene.add(pointLight,ambientLight);
scene.add(grid)

function animate()
{
    requestAnimationFrame(animate);
    rend.render(scene,camera);

}
animate();
// rend.render(scene,camera);