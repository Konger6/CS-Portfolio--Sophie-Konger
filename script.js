window.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling when clicking on links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Initialize Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.canvas-container').appendChild(renderer.domElement);
  
    // Create Cityscape Geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Adjust size as needed
  
    // Create Cityscape Material
    const material = new THREE.MeshBasicMaterial({ color: 0x888888 }); // Adjust color as needed
  
    // Create Cityscape Meshes
    const cityScape = new THREE.Group();
    const buildingsCount = 30; // Adjust the number of buildings
  
    for (let i = 0; i < buildingsCount; i++) {
      const building = new THREE.Mesh(geometry, material);
      building.position.x = (Math.random() - 0.5) * 10; // Adjust position randomness
      building.position.y = (Math.random() - 0.5) * 5; // Adjust position randomness
      building.position.z = i * -2; // Adjust the distance between buildings
      cityScape.add(building);
    }
  
    scene.add(cityScape);
  
    // Set Camera Position
    camera.position.z = 5;
  
    // Render Loop
    function animate() {
      requestAnimationFrame(animate);
      cityScape.rotation.x += 0.01;
      cityScape.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
  
    animate();
  });
  