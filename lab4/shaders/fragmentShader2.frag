uniform sampler2D texture4; //brick texture
varying vec2 vUv;

void main() {
	if (vUv.x > 0.5){ //right sides
		if(vUv.y > 0.5){
			gl_FragColor = texture2D(texture4, (vUv-0.5)*2.0); //top right
		}else{
			gl_FragColor = texture2D(texture4, vec2(vUv.x-0.5, vUv.y)*2.0); //bottom right
		}	
	}else{ //left sides
		if (vUv.y > 0.5){
			gl_FragColor = texture2D(texture4, vec2(vUv.x, vUv.y-0.5)*2.0); //top left
		}else{
			gl_FragColor = texture2D(texture4, vUv*2.0); //bottom left
		}
	}
}