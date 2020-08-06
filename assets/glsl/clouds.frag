precision mediump float;
uniform float param; //input
uniform int seed;
uniform vec2 u_resolution;

// For multiple octaves
#define NUM_NOISE_OCTAVES 5

// Precision-adjusted variations of https://www.shadertoy.com/view/4djSRW
float hash(float p) { 
	p = fract(p * 0.011); 
	p *= p + 7.5;
	p *= p + p; 
	return fract(p); 
}

float noise(vec3 x) {
    //const vec3 step = vec3(110, 241, 171);
    vec3 step = vec3(100, 101, seed);

    vec3 i = floor(x);
    vec3 f = fract(x);
 
    // For performance, compute the base input to a 1D hash from the integer part of the argument and the 
    // incremental change to the 1D based on the 3D -> 1D wrapping
    float n = dot(i, step);

    vec3 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix( hash(n + dot(step, vec3(0, 0, 0))), hash(n + dot(step, vec3(1, 0, 0))), u.x),
                   mix( hash(n + dot(step, vec3(0, 1, 0))), hash(n + dot(step, vec3(1, 1, 0))), u.x), u.y),
               mix(mix( hash(n + dot(step, vec3(0, 0, 1))), hash(n + dot(step, vec3(1, 0, 1))), u.x),
                   mix( hash(n + dot(step, vec3(0, 1, 1))), hash(n + dot(step, vec3(1, 1, 1))), u.x), u.y), u.z);
}

float fbm(vec3 x) {
	float v = 0.0;
	float a = 0.5;
	vec3 shift = vec3(100);
	for (int i = 0; i < NUM_NOISE_OCTAVES; ++i) {
		v += a * noise(x);
		x = x * 2.0 + shift;
		a *= 0.5;
	}
	return v;
}

void main() {
	vec2 coord = gl_FragCoord.xy*0.01;
	vec2 nCoord = gl_FragCoord.xy / u_resolution.xy;
	float noise, noise2;

	//vec3 colorA = vec3(0.149,0.141,0.912);
	//vec3 colorB = vec3(1.000,0.833,0.224);
	
	vec3 colorA = vec3(1,0,0);
	vec3 colorB = vec3(0,1,0);
	
	vec3 color = vec3(0.1);
	
	noise = fbm(vec3(coord, param)); //keep
	noise = smoothstep(0.85, 0.9, noise*noise+0.5); //keep
	noise2 = noise - smoothstep(0.9, 1.0, noise); //keep
	
	//color = mix(colorA, colorB, vec3(nCoord, param));
	//gl_FragColor = vec4(UV, 0.0, 1.0);
	gl_FragColor = 1.0 - 0.1*vec4(noise2); //keep
	//gl_FragColor = vec4(color, 1.0) * noise2;
}