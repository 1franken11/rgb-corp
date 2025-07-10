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
    this.currentEffect = 'dots';
    this.effects = [
      'dots', 'dots-circle', 
      'page-curl', 'peel-x', 'peel-y', 'polygons-fall', 
      'polygons-morph', 'polygons-wind', 'pixelize', 'ripple'
    ];
    
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
        uResolution: { value: new THREE.Vector2(this.width, this.height) },
        uEffect: { value: 0.0 } // Index of current effect
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

  getRandomEffect() {
    const randomIndex = Math.floor(Math.random() * this.effects.length);
    return this.effects[randomIndex];
  }

  getEffectIndex(effectName) {
    return this.effects.indexOf(effectName) / (this.effects.length - 1);
  }

  getCurrentEffect() {
    return this.currentEffect;
  }

  async next() {
    if (this.isAnimating) return;
    
    this.isAnimating = true;
    this.nextImageIndex = (this.currentImageIndex + 1) % this.images.length;
    
    // Select random effect
    this.currentEffect = this.getRandomEffect();
    this.material.uniforms.uEffect.value = this.getEffectIndex(this.currentEffect);
    
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
    
    // Select random effect
    this.currentEffect = this.getRandomEffect();
    this.material.uniforms.uEffect.value = this.getEffectIndex(this.currentEffect);
    
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

  async updateImages(newImages) {
    if (this.isAnimating) return;
    
    this.images = newImages;
    
    // Load the first image if no current texture
    if (!this.material.uniforms.uTexture1.value) {
      const textureLoader = new THREE.TextureLoader();
      const texture = await this.loadTexture(textureLoader, this.images[0]);
      this.material.uniforms.uTexture1.value = texture;
      this.material.uniforms.uTextureSize1.value.set(texture.image.width, texture.image.height);
    }
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
      uniform float uEffect;
      
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
      
      // Noise functions
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }
      
      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        f = f * f * (3.0 - 2.0 * f);
        
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        
        return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
      }
      
      // Transition effects
      float dots(vec2 uv, float progress) {
        float scale = 20.0;
        vec2 st = uv * scale;
        float d = distance(fract(st), vec2(0.5));
        float mask = step(d, 0.1);
        return step(progress, mask);
      }
      
      float dotsCircle(vec2 uv, float progress) {
        vec2 center = vec2(0.5);
        float dist = distance(uv, center);
        float radius = progress * 0.7;
        float dots = dots(uv, 1.0);
        return step(dist, radius) * dots;
      }
      
      float flyeye(vec2 uv, float progress) {
        vec2 center = vec2(0.5);
        float dist = distance(uv, center);
        float scale = 1.0 + progress * 2.0;
        vec2 distorted = center + (uv - center) * scale;
        return step(dist, 0.5 - progress * 0.3);
      }
      
      float morphX(vec2 uv, float progress) {
        float wave = sin(uv.y * 20.0 + progress * 10.0) * 0.1;
        return step(uv.x + wave, progress);
      }
      
      float morphY(vec2 uv, float progress) {
        float wave = sin(uv.x * 20.0 + progress * 10.0) * 0.1;
        return step(uv.y + wave, progress);
      }
      
      float pageCurl(vec2 uv, float progress) {
        float curl = 1.0 - progress;
        float angle = progress * 3.14159;
        vec2 rotated = vec2(
          uv.x * cos(angle) - uv.y * sin(angle),
          uv.x * sin(angle) + uv.y * cos(angle)
        );
        return step(rotated.x, curl);
      }
      
      float peelX(vec2 uv, float progress) {
        return step(uv.x, progress);
      }
      
      float peelY(vec2 uv, float progress) {
        return step(uv.y, progress);
      }
      
      float polygonsFall(vec2 uv, float progress) {
        float scale = 10.0;
        vec2 st = uv * scale;
        float n = noise(st + uTime);
        float mask = step(n, progress);
        return mask;
      }
      
      float polygonsMorph(vec2 uv, float progress) {
        float scale = 8.0;
        vec2 st = uv * scale;
        float n1 = noise(st);
        float n2 = noise(st + vec2(10.0));
        float mask = mix(n1, n2, progress);
        return step(mask, 0.5);
      }
      
      float polygonsWind(vec2 uv, float progress) {
        float scale = 15.0;
        vec2 st = uv * scale;
        float wind = sin(uTime * 2.0 + uv.x * 10.0) * 0.1;
        float n = noise(st + vec2(wind, 0.0));
        return step(n, progress);
      }
      
      float pixelize(vec2 uv, float progress) {
        float pixelSize = mix(0.01, 0.1, progress);
        vec2 pixelated = floor(uv / pixelSize) * pixelSize;
        return step(distance(uv, pixelated), progress * 0.1);
      }
      
      float ripple(vec2 uv, float progress) {
        vec2 center = vec2(0.5);
        float dist = distance(uv, center);
        float wave = sin(dist * 20.0 - progress * 10.0) * 0.1;
        return step(dist + wave, progress * 0.7);
      }
      
      float getTransitionMask(vec2 uv, float progress) {
        float effectIndex = uEffect * 12.0; // 13 effects total
        
        if (effectIndex < 1.0) return dots(uv, progress);
        else if (effectIndex < 2.0) return dotsCircle(uv, progress);
        else if (effectIndex < 3.0) return flyeye(uv, progress);
        else if (effectIndex < 4.0) return morphX(uv, progress);
        else if (effectIndex < 5.0) return morphY(uv, progress);
        else if (effectIndex < 6.0) return pageCurl(uv, progress);
        else if (effectIndex < 7.0) return peelX(uv, progress);
        else if (effectIndex < 8.0) return peelY(uv, progress);
        else if (effectIndex < 9.0) return polygonsFall(uv, progress);
        else if (effectIndex < 10.0) return polygonsMorph(uv, progress);
        else if (effectIndex < 11.0) return polygonsWind(uv, progress);
        else if (effectIndex < 12.0) return pixelize(uv, progress);
        else return ripple(uv, progress);
      }
      
      void main() {
        vec2 uv = vUv;
        
        // Get textures with proper UV mapping
        vec2 uv1 = getUv(uv, uTextureSize1, uResolution);
        vec2 uv2 = getUv(uv, uTextureSize2, uResolution);
        
        vec4 color1 = texture2D(uTexture1, uv1);
        vec4 color2 = texture2D(uTexture2, uv2);
        
        // Get transition mask based on current effect
        float mask = getTransitionMask(uv, uProgress);
        
        // Apply transition
        gl_FragColor = mix(color1, color2, mask);
      }
    `;
  }
} 