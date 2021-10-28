let scene, camera, renderer;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75,document.querySelector("#animation").clientWidth/document.querySelector("#animation").clientHeight, 0.1, 1000);
renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(document.querySelector("#animation").clientWidth,document.querySelector("#animation").clientHeight);
document.querySelector("#animation").appendChild(renderer.domElement);

camera.position.z = 5;
const animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();