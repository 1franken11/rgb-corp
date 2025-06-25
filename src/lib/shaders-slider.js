import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

export class ShadersSlider {
  constructor(options = {}) {
    this.container = options.container;
    this.images = options.images || [];
    this.vertexShader = options.vertexShader || this.getDefaultVertexShader();
    this.fragmentShader = options.fragmentShader || this.getDefaultFragmentShader();
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.material = null;
    this.geometry = null;
    this.mesh = null;
    this.currentImageIndex = 0;
    this.nextImageIndex = 1;
    this.progress = 0;
    this.isAnimating = false;
    
    this.init();
  }

  init() {
    this.setupScene();
    this.setupCamera();
    this.setupRenderer();
    this.setupMesh();
    this.setupEvents();
    this.loadImages();
    this.animate();
  }

  setupScene() {
    this.scene = new THREE.Scene();
  }

  setupCamera() {
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  }

  setupRenderer() {
    this.renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.container.appendChild(this.renderer.domElement);
  }

  setupMesh() {
    this.geometry = new THREE.PlaneGeometry(2, 2);
    this.material = new THREE.ShaderMaterial({
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uTexture1: { value: null },
        uTexture2: { value: null },
        uTextureSize1: { value: new THREE.Vector2(1, 1) },
        uTextureSize2: { value: new THREE.Vector2(1, 1) },
        uResolution: { value: new THREE.Vector2(this.width, this.height) }
      }
    });
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.mesh);
  }

  setupEvents() {
    window.addEventListener('resize', this.onResize.bind(this));
    
    // Auto-advance slides
    setInterval(() => {
      if (!this.isAnimating) {
        this.next();
      }
    }, 4000);
  }

  async loadImages() {
    const textureLoader = new THREE.TextureLoader();
    
    for (let i = 0; i < this.images.length; i++) {
      const texture = await this.loadTexture(textureLoader, this.images[i]);
      if (i === 0) {
        this.material.uniforms.uTexture1.value = texture;
        this.material.uniforms.uTextureSize1.value.set(texture.image.width, texture.image.height);
      }
    }
  }

  loadTexture(loader, url) {
    return new Promise((resolve, reject) => {
      loader.load(url, resolve, undefined, reject);
    });
  }

  async next() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.nextImageIndex = (this.currentImageIndex + 1) % this.images.length;
    
    const textureLoader = new THREE.TextureLoader();
    const nextTexture = await this.loadTexture(textureLoader, this.images[this.nextImageIndex]);
    
    this.material.uniforms.uTexture2.value = nextTexture;
    this.material.uniforms.uTextureSize2.value.set(nextTexture.image.width, nextTexture.image.height);
    
    // Animate transition
    const startTime = Date.now();
    const duration = 1500;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      this.progress = Math.min(elapsed / duration, 1);
      this.material.uniforms.uProgress.value = this.progress;
      
      if (this.progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.currentImageIndex = this.nextImageIndex;
        this.material.uniforms.uTexture1.value = nextTexture;
        this.material.uniforms.uTextureSize1.value.set(nextTexture.image.width, nextTexture.image.height);
        this.material.uniforms.uTexture2.value = null;
        this.progress = 0;
        this.material.uniforms.uProgress.value = 0;
        this.isAnimating = false;
      }
    };
    
    animate();
  }

  async prev() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.nextImageIndex = this.currentImageIndex === 0 ? this.images.length - 1 : this.currentImageIndex - 1;
    
    const textureLoader = new THREE.TextureLoader();
    const nextTexture = await this.loadTexture(textureLoader, this.images[this.nextImageIndex]);
    
    this.material.uniforms.uTexture2.value = nextTexture;
    this.material.uniforms.uTextureSize2.value.set(nextTexture.image.width, nextTexture.image.height);
    
    // Animate transition
    const startTime = Date.now();
    const duration = 1500;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      this.progress = Math.min(elapsed / duration, 1);
      this.material.uniforms.uProgress.value = this.progress;
      
      if (this.progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.currentImageIndex = this.nextImageIndex;
        this.material.uniforms.uTexture1.value = nextTexture;
        this.material.uniforms.uTextureSize1.value.set(nextTexture.image.width, nextTexture.image.height);
        this.material.uniforms.uTexture2.value = null;
        this.progress = 0;
        this.material.uniforms.uProgress.value = 0;
        this.isAnimating = false;
      }
    };
    
    animate();
  }

  onResize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    
    this.renderer.setSize(this.width, this.height);
    this.material.uniforms.uResolution.value.set(this.width, this.height);
  }

  animate() {
    this.material.uniforms.uTime.value += 0.01;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
  }

  getDefaultVertexShader() {
    return `
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
  }

  getDefaultFragmentShader() {
    return `
      uniform float uTime;
      uniform float uProgress;
      uniform sampler2D uTexture1;
      uniform sampler2D uTexture2;
      uniform vec2 uTextureSize1;
      uniform vec2 uTextureSize2;
      uniform vec2 uResolution;
      
      varying vec2 vUv;
      
      vec2 getUv(vec2 uv, vec2 textureSize, vec2 resolution) {
        vec2 ratio = vec2(
          min((resolution.x / resolution.y) / (textureSize.x / textureSize.y), 1.0),
          min((resolution.y / resolution.x) / (textureSize.y / textureSize.x), 1.0)
        );
        return vec2(
          uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
          uv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );
      }
      
      void main() {
        vec2 uv1 = getUv(vUv, uTextureSize1, uResolution);
        vec2 uv2 = getUv(vUv, uTextureSize2, uResolution);
        
        vec4 color1 = texture2D(uTexture1, uv1);
        vec4 color2 = texture2D(uTexture2, uv2);
        
        // Simple crossfade transition
        gl_FragColor = mix(color1, color2, uProgress);
      }
    `;
  }
} 