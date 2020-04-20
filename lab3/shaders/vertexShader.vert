varying vec3 vUv;

void main() {
  vUv = position;

  vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0); //position of model within scene * position of the vertex

  gl_Position = projectionMatrix * modelViewPosition; //camera's relationship to model within the scene * modelViewPosition = position of each vertex in the mesh in scene seen by camera
}
