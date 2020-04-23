uniform sampler2D texture4; //brick texture
varying vec2 vUv;
//varying mat2 scaledvUv

void main() {
 //texture4.repeat.set(vec2(2, 2)); //tried to scale down texture 1/2 size// not working so far
  
  
  gl_FragColor = texture2D(texture4, vUv); //regular texture
}

