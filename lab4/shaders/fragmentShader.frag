uniform sampler2D texture3; //pebble texture
varying vec2 vUv;

void main() {
 // gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0); 
  gl_FragColor = texture2D(texture3, vUv);
}
