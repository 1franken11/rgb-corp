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

// Noise function for wave effect
float noise(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Smooth noise
float smoothNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  
  float a = noise(i);
  float b = noise(i + vec2(1.0, 0.0));
  float c = noise(i + vec2(0.0, 1.0));
  float d = noise(i + vec2(1.0, 1.0));
  
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

// Wave distortion
vec2 waveDistortion(vec2 uv, float time, float intensity) {
  float wave1 = sin(uv.x * 10.0 + time * 2.0) * 0.01 * intensity;
  float wave2 = sin(uv.y * 8.0 + time * 1.5) * 0.01 * intensity;
  return uv + vec2(wave1, wave2);
}

// Ripple effect
vec2 rippleEffect(vec2 uv, float time, float intensity) {
  vec2 center = vec2(0.5, 0.5);
  float dist = distance(uv, center);
  float ripple = sin(dist * 20.0 - time * 3.0) * 0.01 * intensity;
  return uv + normalize(uv - center) * ripple;
}

// Particle effect
float particleEffect(vec2 uv, float time) {
  float particles = 0.0;
  for(int i = 0; i < 20; i++) {
    vec2 pos = vec2(
      noise(vec2(float(i) * 0.1, 0.0)),
      noise(vec2(0.0, float(i) * 0.1))
    );
    float size = noise(vec2(float(i) * 0.2, 0.5)) * 0.02;
    float alpha = noise(vec2(float(i) * 0.3, 0.7));
    
    float dist = distance(uv, pos);
    particles += smoothstep(size, 0.0, dist) * alpha * uProgress;
  }
  return particles;
}

void main() {
  vec2 uv = vUv;
  
  // Apply wave distortion based on progress
  float waveIntensity = sin(uProgress * 3.14159) * 0.5;
  uv = waveDistortion(uv, uTime, waveIntensity);
  
  // Apply ripple effect
  uv = rippleEffect(uv, uTime, uProgress);
  
  // Get textures with proper UV mapping
  vec2 uv1 = getUv(uv, uTextureSize1, uResolution);
  vec2 uv2 = getUv(uv, uTextureSize2, uResolution);
  
  vec4 color1 = texture2D(uTexture1, uv1);
  vec4 color2 = texture2D(uTexture2, uv2);
  
  // Create a wave transition mask
  float waveMask = sin(uv.x * 20.0 + uProgress * 10.0) * 0.5 + 0.5;
  waveMask = smoothstep(waveMask - 0.1, waveMask + 0.1, uProgress);
  
  // Add particle effect
  float particles = particleEffect(uv, uTime);
  
  // Combine effects
  vec4 finalColor = mix(color1, color2, waveMask);
  finalColor.rgb += particles * vec3(1.0, 0.8, 0.6); // Golden particles
  
  // Add vignette effect
  float vignette = 1.0 - distance(uv, vec2(0.5)) * 0.3;
  finalColor.rgb *= vignette;
  
  gl_FragColor = finalColor;
} 