// Smooth scrolling when clicking on links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  window.addEventListener('DOMContentLoaded', () => {
    // Initialize Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.canvas-container').appendChild(renderer.domElement);
  
    // Create Cityscape Geometry
    const geometry = new THREE.BoxGeometry(1, 1, 1); // Adjust size as needed
  
    // Create Cityscape Material
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Adjust color as needed
  
    // Create Cityscape Mesh
    const cityScape = new THREE.Mesh(geometry, material);
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
  